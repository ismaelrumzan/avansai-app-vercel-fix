WITH new_user as (
    INSERT INTO public.users (display_name, avatar_url)
    VALUES ('Test User', null)
    RETURNING id
)

INSERT INTO auth.accounts (user_id, active, email, new_email, password_hash)
VALUES ((SELECT id FROM new_user), true, 'test@test.com', null, crypt('test', gen_salt('bf', 10)))
