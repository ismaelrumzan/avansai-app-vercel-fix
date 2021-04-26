DELETE FROM public.profiles P using public.users U WHERE P.user_id = U.id and U.display_name = 'Test User';
DELETE FROM auth.accounts A WHERE A.email = 'test@test.com';
DELETE FROM public.users U WHERE U.display_name = 'Test User'
