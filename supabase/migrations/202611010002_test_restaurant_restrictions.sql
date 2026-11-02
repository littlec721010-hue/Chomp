-- Fictional Beta restaurant fixtures only. No real-world safety or restaurant claims.
-- Add explicitly modeled fish/seafood/dragon-fruit exclusions without dropping user restrictions.
begin;
update public.chomp_group_catalog
set supports=array['Gluten-Free','Vegetarian (Strict)','Peanut Allergy','Shellfish','seafood','Fish','dragon fruit']
where id in ('oishii','taqueria','pasta');
commit;
