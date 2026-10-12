-- Run once in a new Supabase project's SQL editor, or use `supabase db push`.
begin;
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '' check (char_length(display_name) <= 80),
  notifications boolean not null default true,
  share_preferences boolean not null default false,
  updated_at timestamptz not null default now()
);
create table public.dining_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  cuisines text[] not null default '{}',
  disliked_foods text[] not null default '{}',
  dietary_habits text[] not null default '{}',
  allergens text[] not null default '{}',
  budget_min numeric(10,2) not null default 15,
  budget_max numeric(10,2) not null default 30,
  travel_miles integer default 5,
  updated_at timestamptz not null default now(),
  constraint valid_budget check (budget_min >= 0 and budget_max >= budget_min and budget_max <= 100000),
  constraint valid_radius check (travel_miles is null or travel_miles in (1,3,5,10)),
  constraint bounded_lists check (cardinality(cuisines) <= 50 and cardinality(disliked_foods) <= 50 and cardinality(dietary_habits) <= 50 and cardinality(allergens) <= 50)
);
alter table public.profiles enable row level security;
alter table public.dining_preferences enable row level security;
revoke all on public.profiles, public.dining_preferences from anon;
grant select, insert, update, delete on public.profiles, public.dining_preferences to authenticated;
create policy "Own profile only" on public.profiles for all to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Own preferences only" on public.dining_preferences for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create function public.set_updated_at() returns trigger language plpgsql set search_path = '' as $$
begin new.updated_at = now(); return new; end;
$$;
create trigger profiles_updated before update on public.profiles for each row execute function public.set_updated_at();
create trigger preferences_updated before update on public.dining_preferences for each row execute function public.set_updated_at();

create function public.handle_new_chomp_user() returns trigger language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles(id, display_name)
  values (new.id, left(coalesce(new.raw_user_meta_data ->> 'display_name', new.raw_user_meta_data ->> 'full_name', ''),80))
  on conflict (id) do nothing;
  return new;
end;
$$;
revoke all on function public.handle_new_chomp_user() from public, anon, authenticated;
create trigger on_chomp_user_created after insert on auth.users for each row execute function public.handle_new_chomp_user();
commit;
