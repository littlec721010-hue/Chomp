-- Explicit fictional test menus, including the user-entered Seafood spelling.
update public.chomp_group_catalog set supports=array_append(supports,'Seafood') where id in ('oishii','taqueria','pasta') and not ('Seafood'=any(supports));
