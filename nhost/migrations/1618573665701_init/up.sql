CREATE EXTENSION IF NOT EXISTS plpgsql;
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;
CREATE SCHEMA auth;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
declare
  _new record;
begin
  _new := new;
  _new. "updated_at" = now();
  return _new;
end;
$$;
CREATE TABLE auth.account_providers (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    account_id uuid NOT NULL,
    auth_provider text NOT NULL,
    auth_provider_unique_id text NOT NULL
);
CREATE TABLE auth.account_roles (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    account_id uuid NOT NULL,
    role text NOT NULL
);
CREATE TABLE auth.accounts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    user_id uuid NOT NULL,
    active boolean DEFAULT false NOT NULL,
    email public.citext,
    new_email public.citext,
    password_hash text,
    default_role text DEFAULT 'user'::text NOT NULL,
    is_anonymous boolean DEFAULT false NOT NULL,
    custom_register_data jsonb,
    otp_secret text,
    mfa_enabled boolean DEFAULT false NOT NULL,
    ticket uuid DEFAULT public.gen_random_uuid() NOT NULL,
    ticket_expires_at timestamp with time zone DEFAULT now() NOT NULL,
    CONSTRAINT proper_email CHECK ((email OPERATOR(public.~*) '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'::public.citext)),
    CONSTRAINT proper_new_email CHECK ((new_email OPERATOR(public.~*) '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'::public.citext))
);
CREATE TABLE auth.providers (
    provider text NOT NULL
);
CREATE TABLE auth.refresh_tokens (
    refresh_token uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    expires_at timestamp with time zone NOT NULL,
    account_id uuid NOT NULL
);
CREATE TABLE auth.roles (
    role text NOT NULL
);
CREATE TABLE public.databases (
    value text NOT NULL,
    release_year text NOT NULL
);
CREATE TABLE public.databases_associated_types (
    database text NOT NULL,
    type text NOT NULL
);
CREATE TABLE public.databases_types (
    value text NOT NULL
);
CREATE TABLE public.focus_areas (
    value text NOT NULL,
    profile_type text NOT NULL
);
CREATE TABLE public.frameworks (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name character varying NOT NULL,
    type text,
    release_year text
);
CREATE TABLE public.frameworks_associated_categories (
    framework_id uuid NOT NULL,
    categories text NOT NULL
);
CREATE TABLE public.frameworks_associated_languages (
    framework_id uuid NOT NULL,
    language text NOT NULL
);
CREATE TABLE public.frameworks_categories (
    value text NOT NULL
);
CREATE TABLE public.frameworks_types (
    value text NOT NULL
);
CREATE TABLE public.profiles (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    phone_number text,
    profile_type text NOT NULL,
    resume_url text,
    user_id uuid NOT NULL,
    focus_area text,
    other_focus_area text,
    work_status text,
    full_time_compensation numeric,
    contract_compensation numeric,
    work_vacation_duration text,
    driving_to_work boolean,
    relocate_for_work boolean,
    visa_sponsoship boolean,
    zip_code text,
    acceptable_travel_time integer,
    years_of_experience numeric,
    work_location_type text
);
CREATE TABLE public.profiles_spoken_languages (
    profile_id uuid NOT NULL,
    language text NOT NULL
);
CREATE TABLE public.profiles_types (
    value text NOT NULL
);
CREATE TABLE public.programming_languages (
    value text NOT NULL,
    release_year text
);
CREATE TABLE public.spoken_languages (
    value text NOT NULL
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    display_name text,
    avatar_url text
);
CREATE TABLE public.work_location_types (
    value text NOT NULL
);
CREATE TABLE public.work_status_types (
    value text NOT NULL
);
CREATE TABLE public.work_vacation_durations (
    value text NOT NULL
);
ALTER TABLE ONLY auth.account_providers
    ADD CONSTRAINT account_providers_account_id_auth_provider_key UNIQUE (account_id, auth_provider);
ALTER TABLE ONLY auth.account_providers
    ADD CONSTRAINT account_providers_auth_provider_auth_provider_unique_id_key UNIQUE (auth_provider, auth_provider_unique_id);
ALTER TABLE ONLY auth.account_providers
    ADD CONSTRAINT account_providers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.account_roles
    ADD CONSTRAINT account_roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_email_key UNIQUE (email);
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_new_email_key UNIQUE (new_email);
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_user_id_key UNIQUE (user_id);
ALTER TABLE ONLY auth.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (provider);
ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (refresh_token);
ALTER TABLE ONLY auth.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (role);
ALTER TABLE ONLY auth.account_roles
    ADD CONSTRAINT user_roles_account_id_role_key UNIQUE (account_id, role);
ALTER TABLE ONLY public.databases_associated_types
    ADD CONSTRAINT databases_associated_types_pkey PRIMARY KEY (database, type);
ALTER TABLE ONLY public.databases
    ADD CONSTRAINT databases_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.databases_types
    ADD CONSTRAINT databases_types_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.focus_areas
    ADD CONSTRAINT focus_areas_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.frameworks_associated_categories
    ADD CONSTRAINT frameworks_associated_categories_pkey PRIMARY KEY (framework_id, categories);
ALTER TABLE ONLY public.frameworks_associated_languages
    ADD CONSTRAINT frameworks_associated_languages_pkey PRIMARY KEY (framework_id, language);
ALTER TABLE ONLY public.frameworks_categories
    ADD CONSTRAINT frameworks_categories_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.frameworks
    ADD CONSTRAINT frameworks_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.frameworks_types
    ADD CONSTRAINT frameworks_types_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.profiles_spoken_languages
    ADD CONSTRAINT profiles_spoken_languages_pkey PRIMARY KEY (profile_id, language);
ALTER TABLE ONLY public.profiles_types
    ADD CONSTRAINT profiles_types_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.programming_languages
    ADD CONSTRAINT programming_languages_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.spoken_languages
    ADD CONSTRAINT spoken_languages_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.work_location_types
    ADD CONSTRAINT work_location_types_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.work_status_types
    ADD CONSTRAINT work_status_types_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.work_vacation_durations
    ADD CONSTRAINT work_vacation_durations_pkey PRIMARY KEY (value);
CREATE TRIGGER set_auth_account_providers_updated_at BEFORE UPDATE ON auth.account_providers FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
CREATE TRIGGER set_auth_accounts_updated_at BEFORE UPDATE ON auth.accounts FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
ALTER TABLE ONLY auth.account_providers
    ADD CONSTRAINT account_providers_account_id_fkey FOREIGN KEY (account_id) REFERENCES auth.accounts(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.account_providers
    ADD CONSTRAINT account_providers_auth_provider_fkey FOREIGN KEY (auth_provider) REFERENCES auth.providers(provider) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY auth.account_roles
    ADD CONSTRAINT account_roles_account_id_fkey FOREIGN KEY (account_id) REFERENCES auth.accounts(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.account_roles
    ADD CONSTRAINT account_roles_role_fkey FOREIGN KEY (role) REFERENCES auth.roles(role) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_default_role_fkey FOREIGN KEY (default_role) REFERENCES auth.roles(role) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY auth.accounts
    ADD CONSTRAINT accounts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY auth.refresh_tokens
    ADD CONSTRAINT refresh_tokens_account_id_fkey FOREIGN KEY (account_id) REFERENCES auth.accounts(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.databases_associated_types
    ADD CONSTRAINT databases_associated_types_database_fkey FOREIGN KEY (database) REFERENCES public.databases(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.databases_associated_types
    ADD CONSTRAINT databases_associated_types_type_fkey FOREIGN KEY (type) REFERENCES public.databases_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.focus_areas
    ADD CONSTRAINT focus_areas_profile_type_fkey FOREIGN KEY (profile_type) REFERENCES public.profiles_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.frameworks_associated_categories
    ADD CONSTRAINT frameworks_associated_categories_categories_fkey FOREIGN KEY (categories) REFERENCES public.frameworks_categories(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.frameworks_associated_categories
    ADD CONSTRAINT frameworks_associated_categories_framework_id_fkey FOREIGN KEY (framework_id) REFERENCES public.frameworks(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.frameworks_associated_languages
    ADD CONSTRAINT frameworks_associated_languages_framework_id_fkey FOREIGN KEY (framework_id) REFERENCES public.frameworks(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.frameworks_associated_languages
    ADD CONSTRAINT frameworks_associated_languages_language_fkey FOREIGN KEY (language) REFERENCES public.programming_languages(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.frameworks
    ADD CONSTRAINT frameworks_type_fkey FOREIGN KEY (type) REFERENCES public.frameworks_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_focus_area_fkey FOREIGN KEY (focus_area) REFERENCES public.focus_areas(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_profile_type_fkey FOREIGN KEY (profile_type) REFERENCES public.profiles_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles_spoken_languages
    ADD CONSTRAINT profiles_spoken_languages_language_fkey FOREIGN KEY (language) REFERENCES public.spoken_languages(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles_spoken_languages
    ADD CONSTRAINT profiles_spoken_languages_profile_id_fkey FOREIGN KEY (profile_id) REFERENCES public.profiles(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_work_location_type_fkey FOREIGN KEY (work_location_type) REFERENCES public.work_location_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_work_status_fkey FOREIGN KEY (work_status) REFERENCES public.work_status_types(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_work_vacation_duration_fkey FOREIGN KEY (work_vacation_duration) REFERENCES public.work_vacation_durations(value) ON UPDATE RESTRICT ON DELETE RESTRICT;


INSERT INTO auth.roles (role)
    VALUES ('user'), ('me'), ('anonymous');

INSERT INTO auth.providers (provider)
    VALUES ('github'), ('facebook'), ('twitter'), ('google'), ('apple'), ('linkedin'), ('windowslive');

