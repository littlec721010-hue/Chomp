-- Real, authenticated single-round rooms. Restaurant data remains an explicit Beta fixture.
begin;
create table public.chomp_group_rooms (
 id uuid primary key default gen_random_uuid(),
 code text not null unique,
 host_id uuid not null references auth.users(id),
 name text not null default 'My Dinner Squad',
 status text not null default 'lobby' check (status in ('lobby','voting','tie','complete')),
 options text[] not null default '{}',
 winner_id text,
 lucky_user_id uuid,
 revision bigint not null default 0,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 check ((status = 'complete') = (winner_id is not null))
);
create table public.chomp_group_members (
 room_id uuid not null references public.chomp_group_rooms(id) on delete cascade,
 user_id uuid not null references auth.users(id),
 name text not null,
 preferences jsonb not null default '{"cuisines":[],"restrictions":[],"dislikedFoods":[],"budget":[0,100000],"distanceMiles":100000}',
 ready boolean not null default false,
 joined_at timestamptz not null default now(),
 primary key(room_id,user_id)
);
create table public.chomp_group_votes (
 room_id uuid not null,
 user_id uuid not null,
 restaurant_id text not null,
 method text not null check(method in ('free','random')),
 primary key(room_id,user_id),
 foreign key(room_id,user_id) references public.chomp_group_members(room_id,user_id) on delete cascade
);
create index chomp_group_members_user on public.chomp_group_members(user_id,joined_at desc);
create table public.chomp_group_catalog (
 id text primary key, price_min numeric not null, price_max numeric not null,
 distance_miles numeric not null, supports text[] not null, ingredients text[] not null
);
insert into public.chomp_group_catalog values
 ('oishii',15,24,.8,array['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],array['rice noodles','shiitake','scallions','tofu']),
 ('taqueria',18,26,.6,array['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],array['corn tortillas','tofu','rice','cabbage','sesame']),
 ('pasta',20,28,.9,array['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish'],array['rice pasta','tomato','basil','mushrooms']);

alter table public.chomp_group_rooms enable row level security;
alter table public.chomp_group_members enable row level security;
alter table public.chomp_group_votes enable row level security;
alter table public.chomp_group_catalog enable row level security;
revoke all on public.chomp_group_rooms,public.chomp_group_members,public.chomp_group_votes,public.chomp_group_catalog from public,anon,authenticated;
-- Only the locked RPC can read or mutate room data. Polling does not require Realtime publication.
create function public.chomp_group(action text, room_id uuid default null, payload jsonb default '{}')
returns jsonb language plpgsql security definer set search_path = '' as $$
declare
 actor uuid := auth.uid();
 r public.chomp_group_rooms%rowtype;
 rid uuid := room_id;
 p jsonb;
 chosen text;
 leaders text[];
 n integer;
 low_budget numeric;
 high_budget numeric;
 label text;
begin
 if actor is null then raise exception 'Sign in to use live group rooms.'; end if;
 if action = 'create' then
  label := trim(coalesce(payload->>'name','My Dinner Squad'));
  if length(label) not between 1 and 40 then raise exception 'Group name must contain 1–40 characters.'; end if;
  -- Collision retries never overwrite an existing invitation.
  loop
   begin
    insert into public.chomp_group_rooms(code,host_id,name)
    values (chr(65+floor(random()*26)::int)||chr(65+floor(random()*26)::int)||chr(65+floor(random()*26)::int)||'-'||lpad(floor(random()*1000)::int::text,3,'0'),actor,label)
    returning * into r;
    exit;
   exception when unique_violation then null;
   end;
  end loop;
  rid := r.id;
 elsif action = 'join' then
  select * into r from public.chomp_group_rooms where code=upper(trim(payload->>'code')) for update;
  if not found then raise exception 'Room not found. Check the invitation code.'; end if;
  rid := r.id;
 elsif action = 'resume' then
  select m.room_id into rid from public.chomp_group_members m where m.user_id=actor order by m.joined_at desc,m.room_id limit 1;
  if rid is null then return null; end if;
  select * into r from public.chomp_group_rooms where id=rid for update;
 else
  select * into r from public.chomp_group_rooms where id=rid for update;
  if not found then raise exception 'Room unavailable.'; end if;
 end if;

 if action in ('create','join') then
  if not exists(select 1 from public.chomp_group_members m where m.room_id=rid and m.user_id=actor) then
   if r.status <> 'lobby' then raise exception 'Voting has started. Ask the host for a new room.'; end if;
   if (select count(*) from public.chomp_group_members m where m.room_id=rid)>=4 then raise exception 'This Beta supports up to four diners.'; end if;
   label:=trim(coalesce(payload->>'displayName','Diner'));
   if length(label) not between 1 and 80 then raise exception 'Display name must contain 1–80 characters.'; end if;
   insert into public.chomp_group_members(room_id,user_id,name) values(rid,actor,label);
  end if;
 end if;
 if not exists(select 1 from public.chomp_group_members m where m.room_id=rid and m.user_id=actor) then
  raise exception 'Room unavailable.';
 end if;

 if action = 'preferences' then
  if r.status <> 'lobby' then raise exception 'Preferences are frozen after voting starts.'; end if;
  p := payload->'preferences';
  if p is null or jsonb_typeof(p)<>'object' or
     jsonb_typeof(p->'cuisines') is distinct from 'array' or
     jsonb_typeof(p->'restrictions') is distinct from 'array' or
     jsonb_typeof(p->'dislikedFoods') is distinct from 'array' or
     jsonb_typeof(p->'budget') is distinct from 'array' or
     jsonb_typeof(p->'distanceMiles') is distinct from 'number' then
   raise exception 'Invalid preferences.';
  end if;
  if jsonb_array_length(p->'budget')<>2 or jsonb_typeof(p#>'{budget,0}')<>'number' or jsonb_typeof(p#>'{budget,1}')<>'number' then raise exception 'Invalid budget.'; end if;
  low_budget:=(p#>>'{budget,0}')::numeric; high_budget:=(p#>>'{budget,1}')::numeric;
  if low_budget<0 or high_budget<low_budget or high_budget>100000 or (p->>'distanceMiles')::numeric<=0 or (p->>'distanceMiles')::numeric>100000 then raise exception 'Invalid budget or distance.'; end if;
  if jsonb_array_length(p->'cuisines')>50 or jsonb_array_length(p->'restrictions')>50 or jsonb_array_length(p->'dislikedFoods')>50 or
    exists(select 1 from jsonb_array_elements((p->'cuisines')||(p->'restrictions')||(p->'dislikedFoods')) e where jsonb_typeof(e)<>'string' or length(e#>>'{}')>100) then raise exception 'Invalid preference lists.'; end if;
  update public.chomp_group_members m set preferences=jsonb_build_object('cuisines',p->'cuisines','restrictions',p->'restrictions','dislikedFoods',p->'dislikedFoods','budget',p->'budget','distanceMiles',p->'distanceMiles'),ready=true where m.room_id=rid and m.user_id=actor;
 elsif action = 'start' then
  if actor<>r.host_id then raise exception 'Only the host can start voting.'; end if;
  if r.status='lobby' then
   if (select count(*) from public.chomp_group_members m where m.room_id=rid)<2 then raise exception 'Invite at least one other diner first.'; end if;
   if exists(select 1 from public.chomp_group_members m where m.room_id=rid and not ready) then raise exception 'Wait for every diner to submit preferences.'; end if;
   select max((preferences#>>'{budget,0}')::numeric), min((preferences#>>'{budget,1}')::numeric) into low_budget,high_budget from public.chomp_group_members m where m.room_id=rid;
   select coalesce(array_agg(c.id order by c.id),'{}') into r.options from public.chomp_group_catalog c
   where low_budget<=high_budget and c.price_min<=high_budget and c.price_max>=low_budget
   and not exists(select 1 from public.chomp_group_members m where m.room_id=rid and (
     c.distance_miles>(m.preferences->>'distanceMiles')::numeric or
     not (array(select jsonb_array_elements_text(m.preferences->'restrictions')) <@ c.supports) or
     exists(select 1 from jsonb_array_elements_text(m.preferences->'dislikedFoods') f where lower(trim(f))=any(c.ingredients))));
   if cardinality(r.options)=0 then raise exception 'No sample restaurants match everyone. Review preferences before starting.'; end if;
   update public.chomp_group_rooms set status='voting',options=r.options where id=rid;
  end if;
 elsif action = 'vote' then
  if r.status<>'voting' then raise exception 'This round is not accepting votes.'; end if;
  if payload->>'method' not in ('free','random') or payload->>'method' is null then raise exception 'Invalid voting method.'; end if;
  chosen:=payload->>'restaurantId';
  if payload->>'method'='random' then chosen:=r.options[1+floor(random()*cardinality(r.options))::int]; end if;
  if chosen is null or not (chosen=any(r.options)) then raise exception 'Choose a restaurant in this round.'; end if;
  insert into public.chomp_group_votes(room_id,user_id,restaurant_id,method) values(rid,actor,chosen,payload->>'method')
  on conflict on constraint chomp_group_votes_pkey do update set restaurant_id=excluded.restaurant_id,method=excluded.method;
  if (select count(*) from public.chomp_group_votes v where v.room_id=rid)=(select count(*) from public.chomp_group_members m where m.room_id=rid) then
   select max(total) into n from (select count(*) total from public.chomp_group_votes v where v.room_id=rid group by restaurant_id) counts;
   select array_agg(restaurant_id order by restaurant_id) into leaders from (select restaurant_id from public.chomp_group_votes v where v.room_id=rid group by restaurant_id having count(*)=n) tops;
   update public.chomp_group_rooms set status=case when cardinality(leaders)=1 then 'complete' else 'tie' end,winner_id=case when cardinality(leaders)=1 then leaders[1] end where id=rid;
  end if;
 elsif action = 'draw' then
  if r.status='tie' then
   -- With 2–4 diners every tied leading voter participates. Freeze and persist once under room lock.
   select max(total) into n from (select count(*) total from public.chomp_group_votes v where v.room_id=rid group by restaurant_id) counts;
   select array_agg(restaurant_id) into leaders from (select restaurant_id from public.chomp_group_votes v where v.room_id=rid group by restaurant_id having count(*)=n) tops;
   select v.user_id,v.restaurant_id into r.lucky_user_id,r.winner_id from public.chomp_group_votes v where v.room_id=rid and v.restaurant_id=any(leaders) order by random() limit 1;
   update public.chomp_group_rooms set status='complete',winner_id=r.winner_id,lucky_user_id=r.lucky_user_id where id=rid;
  elsif r.status<>'complete' then raise exception 'Complete all votes before drawing a lucky diner.';
  end if;
 elsif action not in ('create','join','read','resume') then
  raise exception 'Unknown group action.';
 end if;
 if action not in ('read','resume') then
  update public.chomp_group_rooms set revision=revision+1,updated_at=clock_timestamp() where id=rid;
 end if;
 select * into r from public.chomp_group_rooms where id=rid;
 return jsonb_build_object('id',r.id,'code',r.code,'name',r.name,'hostId',r.host_id,'status',r.status,'optionIds',r.options,'winnerId',r.winner_id,'luckyUserId',r.lucky_user_id,'revision',r.revision,
  'members',(select coalesce(jsonb_agg(jsonb_build_object('id',m.user_id,'name',m.name,'preferences',m.preferences,'ready',m.ready) order by m.joined_at,m.user_id),'[]') from public.chomp_group_members m where m.room_id=rid),
  'votes',(select coalesce(jsonb_agg(jsonb_build_object('userId',v.user_id,'restaurantId',v.restaurant_id,'method',v.method) order by v.user_id),'[]') from public.chomp_group_votes v where v.room_id=rid));
end;
$$;
revoke all on function public.chomp_group(text,uuid,jsonb) from public,anon;
grant execute on function public.chomp_group(text,uuid,jsonb) to authenticated;
commit;
