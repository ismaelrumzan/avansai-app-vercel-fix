import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  citext: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.account_providers" */
export type Auth_Account_Providers = {
  __typename?: 'auth_account_providers';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: Auth_Providers;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate = {
  __typename?: 'auth_account_providers_aggregate';
  aggregate?: Maybe<Auth_Account_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Account_Providers>;
};

/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Fields = {
  __typename?: 'auth_account_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Providers_Max_Fields>;
  min?: Maybe<Auth_Account_Providers_Min_Fields>;
};


/** aggregate fields of "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_providers" */
export type Auth_Account_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Providers_Max_Order_By>;
  min?: Maybe<Auth_Account_Providers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_providers" */
export type Auth_Account_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Providers_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_providers". All fields are combined with a logical 'AND'. */
export type Auth_Account_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Providers_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  provider?: Maybe<Auth_Providers_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account_providers" */
export enum Auth_Account_Providers_Constraint {
  /** unique or primary key constraint */
  AccountProvidersAccountIdAuthProviderKey = 'account_providers_account_id_auth_provider_key',
  /** unique or primary key constraint */
  AccountProvidersAuthProviderAuthProviderUniqueIdKey = 'account_providers_auth_provider_auth_provider_unique_id_key',
  /** unique or primary key constraint */
  AccountProvidersPkey = 'account_providers_pkey'
}

/** input type for inserting data into table "auth.account_providers" */
export type Auth_Account_Providers_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  provider?: Maybe<Auth_Providers_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Account_Providers_Max_Fields = {
  __typename?: 'auth_account_providers_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Providers_Min_Fields = {
  __typename?: 'auth_account_providers_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.account_providers" */
export type Auth_Account_Providers_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_providers" */
export type Auth_Account_Providers_Mutation_Response = {
  __typename?: 'auth_account_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Providers>;
};

/** on conflict condition type for table "auth.account_providers" */
export type Auth_Account_Providers_On_Conflict = {
  constraint: Auth_Account_Providers_Constraint;
  update_columns: Array<Auth_Account_Providers_Update_Column>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_providers". */
export type Auth_Account_Providers_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  provider?: Maybe<Auth_Providers_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_account_providers */
export type Auth_Account_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.account_providers" */
export type Auth_Account_Providers_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.account_providers" */
export enum Auth_Account_Providers_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  AuthProvider = 'auth_provider',
  /** column name */
  AuthProviderUniqueId = 'auth_provider_unique_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "auth.account_roles" */
export type Auth_Account_Roles = {
  __typename?: 'auth_account_roles';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Auth_Roles;
};

/** aggregated selection of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate = {
  __typename?: 'auth_account_roles_aggregate';
  aggregate?: Maybe<Auth_Account_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Account_Roles>;
};

/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Fields = {
  __typename?: 'auth_account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Account_Roles_Max_Fields>;
  min?: Maybe<Auth_Account_Roles_Min_Fields>;
};


/** aggregate fields of "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.account_roles" */
export type Auth_Account_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Account_Roles_Max_Order_By>;
  min?: Maybe<Auth_Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account_roles" */
export type Auth_Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Roles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.account_roles". All fields are combined with a logical 'AND'. */
export type Auth_Account_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Account_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Account_Roles_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Auth_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.account_roles" */
export enum Auth_Account_Roles_Constraint {
  /** unique or primary key constraint */
  AccountRolesPkey = 'account_roles_pkey',
  /** unique or primary key constraint */
  UserRolesAccountIdRoleKey = 'user_roles_account_id_role_key'
}

/** input type for inserting data into table "auth.account_roles" */
export type Auth_Account_Roles_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Account_Roles_Max_Fields = {
  __typename?: 'auth_account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Account_Roles_Min_Fields = {
  __typename?: 'auth_account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "auth.account_roles" */
export type Auth_Account_Roles_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.account_roles" */
export type Auth_Account_Roles_Mutation_Response = {
  __typename?: 'auth_account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account_Roles>;
};

/** on conflict condition type for table "auth.account_roles" */
export type Auth_Account_Roles_On_Conflict = {
  constraint: Auth_Account_Roles_Constraint;
  update_columns: Array<Auth_Account_Roles_Update_Column>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account_roles". */
export type Auth_Account_Roles_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Auth_Roles_Order_By>;
};

/** primary key columns input for table: auth_account_roles */
export type Auth_Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.account_roles" */
export type Auth_Account_Roles_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.account_roles" */
export enum Auth_Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** columns and relationships of "auth.accounts" */
export type Auth_Accounts = {
  __typename?: 'auth_accounts';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  active: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  mfa_enabled: Scalars['Boolean'];
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** An object relationship */
  role: Auth_Roles;
  ticket: Scalars['uuid'];
  ticket_expires_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsCustom_Register_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "auth.accounts" */
export type Auth_AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "auth.accounts" */
export type Auth_Accounts_Aggregate = {
  __typename?: 'auth_accounts_aggregate';
  aggregate?: Maybe<Auth_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_Accounts>;
};

/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_Fields = {
  __typename?: 'auth_accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Accounts_Max_Fields>;
  min?: Maybe<Auth_Accounts_Min_Fields>;
};


/** aggregate fields of "auth.accounts" */
export type Auth_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.accounts" */
export type Auth_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Accounts_Max_Order_By>;
  min?: Maybe<Auth_Accounts_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Append_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.accounts" */
export type Auth_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_Accounts_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.accounts". All fields are combined with a logical 'AND'. */
export type Auth_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  _not?: Maybe<Auth_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Auth_Accounts_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  custom_register_data?: Maybe<Jsonb_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  mfa_enabled?: Maybe<Boolean_Comparison_Exp>;
  new_email?: Maybe<Citext_Comparison_Exp>;
  otp_secret?: Maybe<String_Comparison_Exp>;
  password_hash?: Maybe<String_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  role?: Maybe<Auth_Roles_Bool_Exp>;
  ticket?: Maybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.accounts" */
export enum Auth_Accounts_Constraint {
  /** unique or primary key constraint */
  AccountsEmailKey = 'accounts_email_key',
  /** unique or primary key constraint */
  AccountsNewEmailKey = 'accounts_new_email_key',
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Accounts_Delete_At_Path_Input = {
  custom_register_data?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Accounts_Delete_Elem_Input = {
  custom_register_data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Accounts_Delete_Key_Input = {
  custom_register_data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.accounts" */
export type Auth_Accounts_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  role?: Maybe<Auth_Roles_Obj_Rel_Insert_Input>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Accounts_Max_Fields = {
  __typename?: 'auth_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.accounts" */
export type Auth_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Accounts_Min_Fields = {
  __typename?: 'auth_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.accounts" */
export type Auth_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.accounts" */
export type Auth_Accounts_Mutation_Response = {
  __typename?: 'auth_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Accounts>;
};

/** input type for inserting object relation for remote table "auth.accounts" */
export type Auth_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_Accounts_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};

/** on conflict condition type for table "auth.accounts" */
export type Auth_Accounts_On_Conflict = {
  constraint: Auth_Accounts_Constraint;
  update_columns: Array<Auth_Accounts_Update_Column>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.accounts". */
export type Auth_Accounts_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  active?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  custom_register_data?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  mfa_enabled?: Maybe<Order_By>;
  new_email?: Maybe<Order_By>;
  otp_secret?: Maybe<Order_By>;
  password_hash?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  role?: Maybe<Auth_Roles_Order_By>;
  ticket?: Maybe<Order_By>;
  ticket_expires_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_accounts */
export type Auth_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Accounts_Prepend_Input = {
  custom_register_data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "auth.accounts" */
export enum Auth_Accounts_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "auth.accounts" */
export type Auth_Accounts_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  custom_register_data?: Maybe<Scalars['jsonb']>;
  default_role?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  mfa_enabled?: Maybe<Scalars['Boolean']>;
  new_email?: Maybe<Scalars['citext']>;
  otp_secret?: Maybe<Scalars['String']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.accounts" */
export enum Auth_Accounts_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomRegisterData = 'custom_register_data',
  /** column name */
  DefaultRole = 'default_role',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  MfaEnabled = 'mfa_enabled',
  /** column name */
  NewEmail = 'new_email',
  /** column name */
  OtpSecret = 'otp_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "auth.providers" */
export type Auth_Providers = {
  __typename?: 'auth_providers';
  /** An array relationship */
  account_providers: Array<Auth_Account_Providers>;
  /** An aggregate relationship */
  account_providers_aggregate: Auth_Account_Providers_Aggregate;
  provider: Scalars['String'];
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


/** columns and relationships of "auth.providers" */
export type Auth_ProvidersAccount_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type Auth_Providers_Aggregate = {
  __typename?: 'auth_providers_aggregate';
  aggregate?: Maybe<Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Providers>;
};

/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_Fields = {
  __typename?: 'auth_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Providers_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  _not?: Maybe<Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Auth_Providers_Bool_Exp>>;
  account_providers?: Maybe<Auth_Account_Providers_Bool_Exp>;
  provider?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum Auth_Providers_Constraint {
  /** unique or primary key constraint */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type Auth_Providers_Insert_Input = {
  account_providers?: Maybe<Auth_Account_Providers_Arr_Rel_Insert_Input>;
  provider?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Providers_Max_Fields = {
  __typename?: 'auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Providers_Min_Fields = {
  __typename?: 'auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type Auth_Providers_Mutation_Response = {
  __typename?: 'auth_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Providers>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Providers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};

/** on conflict condition type for table "auth.providers" */
export type Auth_Providers_On_Conflict = {
  constraint: Auth_Providers_Constraint;
  update_columns: Array<Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type Auth_Providers_Order_By = {
  account_providers_aggregate?: Maybe<Auth_Account_Providers_Aggregate_Order_By>;
  provider?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_providers */
export type Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum Auth_Providers_Select_Column {
  /** column name */
  Provider = 'provider'
}

/** input type for updating data in table "auth.providers" */
export type Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum Auth_Providers_Update_Column {
  /** column name */
  Provider = 'provider'
}

/** columns and relationships of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens = {
  __typename?: 'auth_refresh_tokens';
  /** An object relationship */
  account: Auth_Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate = {
  __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'auth_refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Auth_Refresh_Tokens_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  account_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Constraint {
  /** unique or primary key constraint */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Auth_Refresh_Tokens_Max_Fields = {
  __typename?: 'auth_refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Max_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Refresh_Tokens_Min_Fields = {
  __typename?: 'auth_refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Min_Order_By = {
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Mutation_Response = {
  __typename?: 'auth_refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Refresh_Tokens>;
};

/** on conflict condition type for table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type Auth_Refresh_Tokens_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  account_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_refresh_tokens */
export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type Auth_Refresh_Tokens_Set_Input = {
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum Auth_Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "auth.roles" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  /** An array relationship */
  account_roles: Array<Auth_Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** An array relationship */
  accounts: Array<Auth_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Accounts_Aggregate;
  role: Scalars['String'];
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccount_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


/** columns and relationships of "auth.roles" */
export type Auth_RolesAccounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: Maybe<Auth_Roles_Bool_Exp>;
  _or?: Maybe<Array<Auth_Roles_Bool_Exp>>;
  account_roles?: Maybe<Auth_Account_Roles_Bool_Exp>;
  accounts?: Maybe<Auth_Accounts_Bool_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type Auth_Roles_Insert_Input = {
  account_roles?: Maybe<Auth_Account_Roles_Arr_Rel_Insert_Input>;
  accounts?: Maybe<Auth_Accounts_Arr_Rel_Insert_Input>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};

/** on conflict condition type for table "auth.roles" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns: Array<Auth_Roles_Update_Column>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type Auth_Roles_Order_By = {
  account_roles_aggregate?: Maybe<Auth_Account_Roles_Aggregate_Order_By>;
  accounts_aggregate?: Maybe<Auth_Accounts_Aggregate_Order_By>;
  role?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type Auth_Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Role = 'role'
}


/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['citext']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['citext']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['citext']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['citext']>;
};

/** columns and relationships of "databases" */
export type Databases = {
  __typename?: 'databases';
  release_year: Scalars['String'];
  /** An array relationship */
  types: Array<Databases_Associated_Types>;
  /** An aggregate relationship */
  types_aggregate: Databases_Associated_Types_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "databases" */
export type DatabasesTypesArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


/** columns and relationships of "databases" */
export type DatabasesTypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};

/** aggregated selection of "databases" */
export type Databases_Aggregate = {
  __typename?: 'databases_aggregate';
  aggregate?: Maybe<Databases_Aggregate_Fields>;
  nodes: Array<Databases>;
};

/** aggregate fields of "databases" */
export type Databases_Aggregate_Fields = {
  __typename?: 'databases_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Databases_Max_Fields>;
  min?: Maybe<Databases_Min_Fields>;
};


/** aggregate fields of "databases" */
export type Databases_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Databases_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "databases_associated_types" */
export type Databases_Associated_Types = {
  __typename?: 'databases_associated_types';
  database: Databases_Enum;
  /** An object relationship */
  databaseType: Databases_Types;
  /** An object relationship */
  dbAssociatedTypes: Databases;
  type: Databases_Types_Enum;
};

/** aggregated selection of "databases_associated_types" */
export type Databases_Associated_Types_Aggregate = {
  __typename?: 'databases_associated_types_aggregate';
  aggregate?: Maybe<Databases_Associated_Types_Aggregate_Fields>;
  nodes: Array<Databases_Associated_Types>;
};

/** aggregate fields of "databases_associated_types" */
export type Databases_Associated_Types_Aggregate_Fields = {
  __typename?: 'databases_associated_types_aggregate_fields';
  count: Scalars['Int'];
};


/** aggregate fields of "databases_associated_types" */
export type Databases_Associated_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "databases_associated_types" */
export type Databases_Associated_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "databases_associated_types" */
export type Databases_Associated_Types_Arr_Rel_Insert_Input = {
  data: Array<Databases_Associated_Types_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Databases_Associated_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "databases_associated_types". All fields are combined with a logical 'AND'. */
export type Databases_Associated_Types_Bool_Exp = {
  _and?: Maybe<Array<Databases_Associated_Types_Bool_Exp>>;
  _not?: Maybe<Databases_Associated_Types_Bool_Exp>;
  _or?: Maybe<Array<Databases_Associated_Types_Bool_Exp>>;
  database?: Maybe<Databases_Enum_Comparison_Exp>;
  databaseType?: Maybe<Databases_Types_Bool_Exp>;
  dbAssociatedTypes?: Maybe<Databases_Bool_Exp>;
  type?: Maybe<Databases_Types_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "databases_associated_types" */
export enum Databases_Associated_Types_Constraint {
  /** unique or primary key constraint */
  DatabasesAssociatedTypesPkey = 'databases_associated_types_pkey'
}

/** input type for inserting data into table "databases_associated_types" */
export type Databases_Associated_Types_Insert_Input = {
  database?: Maybe<Databases_Enum>;
  databaseType?: Maybe<Databases_Types_Obj_Rel_Insert_Input>;
  dbAssociatedTypes?: Maybe<Databases_Obj_Rel_Insert_Input>;
  type?: Maybe<Databases_Types_Enum>;
};

/** response of any mutation on the table "databases_associated_types" */
export type Databases_Associated_Types_Mutation_Response = {
  __typename?: 'databases_associated_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Databases_Associated_Types>;
};

/** on conflict condition type for table "databases_associated_types" */
export type Databases_Associated_Types_On_Conflict = {
  constraint: Databases_Associated_Types_Constraint;
  update_columns: Array<Databases_Associated_Types_Update_Column>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "databases_associated_types". */
export type Databases_Associated_Types_Order_By = {
  database?: Maybe<Order_By>;
  databaseType?: Maybe<Databases_Types_Order_By>;
  dbAssociatedTypes?: Maybe<Databases_Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: databases_associated_types */
export type Databases_Associated_Types_Pk_Columns_Input = {
  database: Databases_Enum;
  type: Databases_Types_Enum;
};

/** select columns of table "databases_associated_types" */
export enum Databases_Associated_Types_Select_Column {
  /** column name */
  Database = 'database',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "databases_associated_types" */
export type Databases_Associated_Types_Set_Input = {
  database?: Maybe<Databases_Enum>;
  type?: Maybe<Databases_Types_Enum>;
};

/** update columns of table "databases_associated_types" */
export enum Databases_Associated_Types_Update_Column {
  /** column name */
  Database = 'database',
  /** column name */
  Type = 'type'
}

/** Boolean expression to filter rows from the table "databases". All fields are combined with a logical 'AND'. */
export type Databases_Bool_Exp = {
  _and?: Maybe<Array<Databases_Bool_Exp>>;
  _not?: Maybe<Databases_Bool_Exp>;
  _or?: Maybe<Array<Databases_Bool_Exp>>;
  release_year?: Maybe<String_Comparison_Exp>;
  types?: Maybe<Databases_Associated_Types_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "databases" */
export enum Databases_Constraint {
  /** unique or primary key constraint */
  DatabasesPkey = 'databases_pkey'
}

export enum Databases_Enum {
  /** 2013 */
  AmazonRedshift = 'AMAZON_REDSHIFT',
  /** 2008 */
  ApacheHbase = 'APACHE_HBASE',
  /** 2010 */
  ApacheHive = 'APACHE_HIVE',
  /** 2008 */
  Cassandra = 'CASSANDRA',
  /** 2010 */
  CouchBase = 'COUCH_BASE',
  /** 2012 */
  DynamoDb = 'DYNAMO_DB',
  /** 2010 */
  ElasticSearch = 'ELASTIC_SEARCH',
  /** 2012 */
  Firebase = 'FIREBASE',
  /** 2010 */
  GoogleBigQuery = 'GOOGLE_BIG_QUERY',
  /** 1983 */
  IbmDb2 = 'IBM_DB2',
  /** 2009 */
  MariaDb = 'MARIA_DB',
  /** 2003 */
  Memcached = 'MEMCACHED',
  /** 2010 */
  MicrosoftAzureSqlDb = 'MICROSOFT_AZURE_SQL_DB',
  /** 1989 */
  MicrosoftSqlServer = 'MICROSOFT_SQL_SERVER',
  /** 2009 */
  MongoDb = 'MONGO_DB',
  /** 1995 */
  Mysql = 'MYSQL',
  /** 2007 */
  Neo4J = 'NEO4J',
  /** 1979 */
  Oracle = 'ORACLE',
  /** - */
  Other = 'OTHER',
  /** 1996 */
  Postgresql = 'POSTGRESQL',
  /** 2009 */
  Redis = 'REDIS',
  /** 2000 */
  SqlLite = 'SQL_LITE',
  /** 1989 */
  TSql = 'T_SQL'
}

/** Boolean expression to compare columns of type "databases_enum". All fields are combined with logical 'AND'. */
export type Databases_Enum_Comparison_Exp = {
  _eq?: Maybe<Databases_Enum>;
  _in?: Maybe<Array<Databases_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Databases_Enum>;
  _nin?: Maybe<Array<Databases_Enum>>;
};

/** input type for inserting data into table "databases" */
export type Databases_Insert_Input = {
  release_year?: Maybe<Scalars['String']>;
  types?: Maybe<Databases_Associated_Types_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Databases_Max_Fields = {
  __typename?: 'databases_max_fields';
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Databases_Min_Fields = {
  __typename?: 'databases_min_fields';
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "databases" */
export type Databases_Mutation_Response = {
  __typename?: 'databases_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Databases>;
};

/** input type for inserting object relation for remote table "databases" */
export type Databases_Obj_Rel_Insert_Input = {
  data: Databases_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Databases_On_Conflict>;
};

/** on conflict condition type for table "databases" */
export type Databases_On_Conflict = {
  constraint: Databases_Constraint;
  update_columns: Array<Databases_Update_Column>;
  where?: Maybe<Databases_Bool_Exp>;
};

/** Ordering options when selecting data from "databases". */
export type Databases_Order_By = {
  release_year?: Maybe<Order_By>;
  types_aggregate?: Maybe<Databases_Associated_Types_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: databases */
export type Databases_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "databases" */
export enum Databases_Select_Column {
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "databases" */
export type Databases_Set_Input = {
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** columns and relationships of "databases_types" */
export type Databases_Types = {
  __typename?: 'databases_types';
  /** An array relationship */
  dbAssociatedtypes: Array<Databases_Associated_Types>;
  /** An aggregate relationship */
  dbAssociatedtypes_aggregate: Databases_Associated_Types_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "databases_types" */
export type Databases_TypesDbAssociatedtypesArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


/** columns and relationships of "databases_types" */
export type Databases_TypesDbAssociatedtypes_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};

/** aggregated selection of "databases_types" */
export type Databases_Types_Aggregate = {
  __typename?: 'databases_types_aggregate';
  aggregate?: Maybe<Databases_Types_Aggregate_Fields>;
  nodes: Array<Databases_Types>;
};

/** aggregate fields of "databases_types" */
export type Databases_Types_Aggregate_Fields = {
  __typename?: 'databases_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Databases_Types_Max_Fields>;
  min?: Maybe<Databases_Types_Min_Fields>;
};


/** aggregate fields of "databases_types" */
export type Databases_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Databases_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "databases_types". All fields are combined with a logical 'AND'. */
export type Databases_Types_Bool_Exp = {
  _and?: Maybe<Array<Databases_Types_Bool_Exp>>;
  _not?: Maybe<Databases_Types_Bool_Exp>;
  _or?: Maybe<Array<Databases_Types_Bool_Exp>>;
  dbAssociatedtypes?: Maybe<Databases_Associated_Types_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "databases_types" */
export enum Databases_Types_Constraint {
  /** unique or primary key constraint */
  DatabasesTypesPkey = 'databases_types_pkey'
}

export enum Databases_Types_Enum {
  Cache = 'CACHE',
  DataStore = 'DATA_STORE',
  DataWarehouse = 'DATA_WAREHOUSE',
  DocumentBased = 'DOCUMENT_BASED',
  GraphDb = 'GRAPH_DB',
  Nosql = 'NOSQL',
  Relational = 'RELATIONAL'
}

/** Boolean expression to compare columns of type "databases_types_enum". All fields are combined with logical 'AND'. */
export type Databases_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Databases_Types_Enum>;
  _in?: Maybe<Array<Databases_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Databases_Types_Enum>;
  _nin?: Maybe<Array<Databases_Types_Enum>>;
};

/** input type for inserting data into table "databases_types" */
export type Databases_Types_Insert_Input = {
  dbAssociatedtypes?: Maybe<Databases_Associated_Types_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Databases_Types_Max_Fields = {
  __typename?: 'databases_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Databases_Types_Min_Fields = {
  __typename?: 'databases_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "databases_types" */
export type Databases_Types_Mutation_Response = {
  __typename?: 'databases_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Databases_Types>;
};

/** input type for inserting object relation for remote table "databases_types" */
export type Databases_Types_Obj_Rel_Insert_Input = {
  data: Databases_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Databases_Types_On_Conflict>;
};

/** on conflict condition type for table "databases_types" */
export type Databases_Types_On_Conflict = {
  constraint: Databases_Types_Constraint;
  update_columns: Array<Databases_Types_Update_Column>;
  where?: Maybe<Databases_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "databases_types". */
export type Databases_Types_Order_By = {
  dbAssociatedtypes_aggregate?: Maybe<Databases_Associated_Types_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: databases_types */
export type Databases_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "databases_types" */
export enum Databases_Types_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "databases_types" */
export type Databases_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "databases_types" */
export enum Databases_Types_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "databases" */
export enum Databases_Update_Column {
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "focus_areas" */
export type Focus_Areas = {
  __typename?: 'focus_areas';
  /** An object relationship */
  profileType: Profiles_Types;
  profile_type: Profiles_Types_Enum;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "focus_areas" */
export type Focus_AreasProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "focus_areas" */
export type Focus_AreasProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "focus_areas" */
export type Focus_Areas_Aggregate = {
  __typename?: 'focus_areas_aggregate';
  aggregate?: Maybe<Focus_Areas_Aggregate_Fields>;
  nodes: Array<Focus_Areas>;
};

/** aggregate fields of "focus_areas" */
export type Focus_Areas_Aggregate_Fields = {
  __typename?: 'focus_areas_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Focus_Areas_Max_Fields>;
  min?: Maybe<Focus_Areas_Min_Fields>;
};


/** aggregate fields of "focus_areas" */
export type Focus_Areas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Focus_Areas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "focus_areas" */
export type Focus_Areas_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Focus_Areas_Max_Order_By>;
  min?: Maybe<Focus_Areas_Min_Order_By>;
};

/** input type for inserting array relation for remote table "focus_areas" */
export type Focus_Areas_Arr_Rel_Insert_Input = {
  data: Array<Focus_Areas_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Focus_Areas_On_Conflict>;
};

/** Boolean expression to filter rows from the table "focus_areas". All fields are combined with a logical 'AND'. */
export type Focus_Areas_Bool_Exp = {
  _and?: Maybe<Array<Focus_Areas_Bool_Exp>>;
  _not?: Maybe<Focus_Areas_Bool_Exp>;
  _or?: Maybe<Array<Focus_Areas_Bool_Exp>>;
  profileType?: Maybe<Profiles_Types_Bool_Exp>;
  profile_type?: Maybe<Profiles_Types_Enum_Comparison_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "focus_areas" */
export enum Focus_Areas_Constraint {
  /** unique or primary key constraint */
  FocusAreasPkey = 'focus_areas_pkey'
}

export enum Focus_Areas_Enum {
  /** TECH_INDUSTRY */
  BusinessAnalysis = 'BUSINESS_ANALYSIS',
  /** TECH_INDUSTRY */
  Cloud = 'CLOUD',
  /** TECH_INDUSTRY */
  Database = 'DATABASE',
  /** TECH_INDUSTRY */
  DataScience = 'DATA_SCIENCE',
  /** TECH_INDUSTRY */
  Infrastructure = 'INFRASTRUCTURE',
  /** TECH_INDUSTRY */
  Networking = 'NETWORKING',
  /** TECH_INDUSTRY */
  Other = 'OTHER',
  /** TECH_INDUSTRY */
  ProductManagement = 'PRODUCT_MANAGEMENT',
  /** TECH_INDUSTRY */
  ProjectManagement = 'PROJECT_MANAGEMENT',
  /** TECH_INDUSTRY */
  Security = 'SECURITY',
  /** TECH_INDUSTRY */
  Support = 'SUPPORT',
  /** TECH_INDUSTRY */
  TeamManagement = 'TEAM_MANAGEMENT',
  /** TECH_INDUSTRY */
  Testing = 'TESTING'
}

/** Boolean expression to compare columns of type "focus_areas_enum". All fields are combined with logical 'AND'. */
export type Focus_Areas_Enum_Comparison_Exp = {
  _eq?: Maybe<Focus_Areas_Enum>;
  _in?: Maybe<Array<Focus_Areas_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Focus_Areas_Enum>;
  _nin?: Maybe<Array<Focus_Areas_Enum>>;
};

/** input type for inserting data into table "focus_areas" */
export type Focus_Areas_Insert_Input = {
  profileType?: Maybe<Profiles_Types_Obj_Rel_Insert_Input>;
  profile_type?: Maybe<Profiles_Types_Enum>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Focus_Areas_Max_Fields = {
  __typename?: 'focus_areas_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "focus_areas" */
export type Focus_Areas_Max_Order_By = {
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Focus_Areas_Min_Fields = {
  __typename?: 'focus_areas_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "focus_areas" */
export type Focus_Areas_Min_Order_By = {
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "focus_areas" */
export type Focus_Areas_Mutation_Response = {
  __typename?: 'focus_areas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Focus_Areas>;
};

/** input type for inserting object relation for remote table "focus_areas" */
export type Focus_Areas_Obj_Rel_Insert_Input = {
  data: Focus_Areas_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Focus_Areas_On_Conflict>;
};

/** on conflict condition type for table "focus_areas" */
export type Focus_Areas_On_Conflict = {
  constraint: Focus_Areas_Constraint;
  update_columns: Array<Focus_Areas_Update_Column>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};

/** Ordering options when selecting data from "focus_areas". */
export type Focus_Areas_Order_By = {
  profileType?: Maybe<Profiles_Types_Order_By>;
  profile_type?: Maybe<Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: focus_areas */
export type Focus_Areas_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "focus_areas" */
export enum Focus_Areas_Select_Column {
  /** column name */
  ProfileType = 'profile_type',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "focus_areas" */
export type Focus_Areas_Set_Input = {
  profile_type?: Maybe<Profiles_Types_Enum>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "focus_areas" */
export enum Focus_Areas_Update_Column {
  /** column name */
  ProfileType = 'profile_type',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "frameworks" */
export type Frameworks = {
  __typename?: 'frameworks';
  /** An array relationship */
  associatedLanguages: Array<Frameworks_Associated_Languages>;
  /** An aggregate relationship */
  associatedLanguages_aggregate: Frameworks_Associated_Languages_Aggregate;
  /** An array relationship */
  frameworkCategories: Array<Frameworks_Associated_Categories>;
  /** An aggregate relationship */
  frameworkCategories_aggregate: Frameworks_Associated_Categories_Aggregate;
  /** An object relationship */
  frameworkType: Frameworks_Types;
  id: Scalars['uuid'];
  name: Scalars['String'];
  release_year?: Maybe<Scalars['String']>;
  type?: Maybe<Frameworks_Types_Enum>;
};


/** columns and relationships of "frameworks" */
export type FrameworksAssociatedLanguagesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


/** columns and relationships of "frameworks" */
export type FrameworksAssociatedLanguages_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


/** columns and relationships of "frameworks" */
export type FrameworksFrameworkCategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


/** columns and relationships of "frameworks" */
export type FrameworksFrameworkCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};

/** aggregated selection of "frameworks" */
export type Frameworks_Aggregate = {
  __typename?: 'frameworks_aggregate';
  aggregate?: Maybe<Frameworks_Aggregate_Fields>;
  nodes: Array<Frameworks>;
};

/** aggregate fields of "frameworks" */
export type Frameworks_Aggregate_Fields = {
  __typename?: 'frameworks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Frameworks_Max_Fields>;
  min?: Maybe<Frameworks_Min_Fields>;
};


/** aggregate fields of "frameworks" */
export type Frameworks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Frameworks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "frameworks" */
export type Frameworks_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Frameworks_Max_Order_By>;
  min?: Maybe<Frameworks_Min_Order_By>;
};

/** input type for inserting array relation for remote table "frameworks" */
export type Frameworks_Arr_Rel_Insert_Input = {
  data: Array<Frameworks_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_On_Conflict>;
};

/** columns and relationships of "frameworks_associated_categories" */
export type Frameworks_Associated_Categories = {
  __typename?: 'frameworks_associated_categories';
  categories: Frameworks_Categories_Enum;
  /** An object relationship */
  framework: Frameworks;
  /** An object relationship */
  frameworkCategories: Frameworks_Categories;
  framework_id: Scalars['uuid'];
};

/** aggregated selection of "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Aggregate = {
  __typename?: 'frameworks_associated_categories_aggregate';
  aggregate?: Maybe<Frameworks_Associated_Categories_Aggregate_Fields>;
  nodes: Array<Frameworks_Associated_Categories>;
};

/** aggregate fields of "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Aggregate_Fields = {
  __typename?: 'frameworks_associated_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Frameworks_Associated_Categories_Max_Fields>;
  min?: Maybe<Frameworks_Associated_Categories_Min_Fields>;
};


/** aggregate fields of "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Frameworks_Associated_Categories_Max_Order_By>;
  min?: Maybe<Frameworks_Associated_Categories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Arr_Rel_Insert_Input = {
  data: Array<Frameworks_Associated_Categories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_Associated_Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "frameworks_associated_categories". All fields are combined with a logical 'AND'. */
export type Frameworks_Associated_Categories_Bool_Exp = {
  _and?: Maybe<Array<Frameworks_Associated_Categories_Bool_Exp>>;
  _not?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
  _or?: Maybe<Array<Frameworks_Associated_Categories_Bool_Exp>>;
  categories?: Maybe<Frameworks_Categories_Enum_Comparison_Exp>;
  framework?: Maybe<Frameworks_Bool_Exp>;
  frameworkCategories?: Maybe<Frameworks_Categories_Bool_Exp>;
  framework_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "frameworks_associated_categories" */
export enum Frameworks_Associated_Categories_Constraint {
  /** unique or primary key constraint */
  FrameworksAssociatedCategoriesPkey = 'frameworks_associated_categories_pkey'
}

/** input type for inserting data into table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Insert_Input = {
  categories?: Maybe<Frameworks_Categories_Enum>;
  framework?: Maybe<Frameworks_Obj_Rel_Insert_Input>;
  frameworkCategories?: Maybe<Frameworks_Categories_Obj_Rel_Insert_Input>;
  framework_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Frameworks_Associated_Categories_Max_Fields = {
  __typename?: 'frameworks_associated_categories_max_fields';
  framework_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Max_Order_By = {
  framework_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Frameworks_Associated_Categories_Min_Fields = {
  __typename?: 'frameworks_associated_categories_min_fields';
  framework_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Min_Order_By = {
  framework_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Mutation_Response = {
  __typename?: 'frameworks_associated_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Frameworks_Associated_Categories>;
};

/** on conflict condition type for table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_On_Conflict = {
  constraint: Frameworks_Associated_Categories_Constraint;
  update_columns: Array<Frameworks_Associated_Categories_Update_Column>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "frameworks_associated_categories". */
export type Frameworks_Associated_Categories_Order_By = {
  categories?: Maybe<Order_By>;
  framework?: Maybe<Frameworks_Order_By>;
  frameworkCategories?: Maybe<Frameworks_Categories_Order_By>;
  framework_id?: Maybe<Order_By>;
};

/** primary key columns input for table: frameworks_associated_categories */
export type Frameworks_Associated_Categories_Pk_Columns_Input = {
  categories: Frameworks_Categories_Enum;
  framework_id: Scalars['uuid'];
};

/** select columns of table "frameworks_associated_categories" */
export enum Frameworks_Associated_Categories_Select_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  FrameworkId = 'framework_id'
}

/** input type for updating data in table "frameworks_associated_categories" */
export type Frameworks_Associated_Categories_Set_Input = {
  categories?: Maybe<Frameworks_Categories_Enum>;
  framework_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "frameworks_associated_categories" */
export enum Frameworks_Associated_Categories_Update_Column {
  /** column name */
  Categories = 'categories',
  /** column name */
  FrameworkId = 'framework_id'
}

/** columns and relationships of "frameworks_associated_languages" */
export type Frameworks_Associated_Languages = {
  __typename?: 'frameworks_associated_languages';
  /** An object relationship */
  framework: Frameworks;
  framework_id: Scalars['uuid'];
  language: Programming_Languages_Enum;
  /** An object relationship */
  programmingLanguages: Programming_Languages;
};

/** aggregated selection of "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Aggregate = {
  __typename?: 'frameworks_associated_languages_aggregate';
  aggregate?: Maybe<Frameworks_Associated_Languages_Aggregate_Fields>;
  nodes: Array<Frameworks_Associated_Languages>;
};

/** aggregate fields of "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Aggregate_Fields = {
  __typename?: 'frameworks_associated_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Frameworks_Associated_Languages_Max_Fields>;
  min?: Maybe<Frameworks_Associated_Languages_Min_Fields>;
};


/** aggregate fields of "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Frameworks_Associated_Languages_Max_Order_By>;
  min?: Maybe<Frameworks_Associated_Languages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Arr_Rel_Insert_Input = {
  data: Array<Frameworks_Associated_Languages_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_Associated_Languages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "frameworks_associated_languages". All fields are combined with a logical 'AND'. */
export type Frameworks_Associated_Languages_Bool_Exp = {
  _and?: Maybe<Array<Frameworks_Associated_Languages_Bool_Exp>>;
  _not?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
  _or?: Maybe<Array<Frameworks_Associated_Languages_Bool_Exp>>;
  framework?: Maybe<Frameworks_Bool_Exp>;
  framework_id?: Maybe<Uuid_Comparison_Exp>;
  language?: Maybe<Programming_Languages_Enum_Comparison_Exp>;
  programmingLanguages?: Maybe<Programming_Languages_Bool_Exp>;
};

/** unique or primary key constraints on table "frameworks_associated_languages" */
export enum Frameworks_Associated_Languages_Constraint {
  /** unique or primary key constraint */
  FrameworksAssociatedLanguagesPkey = 'frameworks_associated_languages_pkey'
}

/** input type for inserting data into table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Insert_Input = {
  framework?: Maybe<Frameworks_Obj_Rel_Insert_Input>;
  framework_id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Programming_Languages_Enum>;
  programmingLanguages?: Maybe<Programming_Languages_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Frameworks_Associated_Languages_Max_Fields = {
  __typename?: 'frameworks_associated_languages_max_fields';
  framework_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Max_Order_By = {
  framework_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Frameworks_Associated_Languages_Min_Fields = {
  __typename?: 'frameworks_associated_languages_min_fields';
  framework_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Min_Order_By = {
  framework_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Mutation_Response = {
  __typename?: 'frameworks_associated_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Frameworks_Associated_Languages>;
};

/** on conflict condition type for table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_On_Conflict = {
  constraint: Frameworks_Associated_Languages_Constraint;
  update_columns: Array<Frameworks_Associated_Languages_Update_Column>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "frameworks_associated_languages". */
export type Frameworks_Associated_Languages_Order_By = {
  framework?: Maybe<Frameworks_Order_By>;
  framework_id?: Maybe<Order_By>;
  language?: Maybe<Order_By>;
  programmingLanguages?: Maybe<Programming_Languages_Order_By>;
};

/** primary key columns input for table: frameworks_associated_languages */
export type Frameworks_Associated_Languages_Pk_Columns_Input = {
  framework_id: Scalars['uuid'];
  language: Programming_Languages_Enum;
};

/** select columns of table "frameworks_associated_languages" */
export enum Frameworks_Associated_Languages_Select_Column {
  /** column name */
  FrameworkId = 'framework_id',
  /** column name */
  Language = 'language'
}

/** input type for updating data in table "frameworks_associated_languages" */
export type Frameworks_Associated_Languages_Set_Input = {
  framework_id?: Maybe<Scalars['uuid']>;
  language?: Maybe<Programming_Languages_Enum>;
};

/** update columns of table "frameworks_associated_languages" */
export enum Frameworks_Associated_Languages_Update_Column {
  /** column name */
  FrameworkId = 'framework_id',
  /** column name */
  Language = 'language'
}

/** Boolean expression to filter rows from the table "frameworks". All fields are combined with a logical 'AND'. */
export type Frameworks_Bool_Exp = {
  _and?: Maybe<Array<Frameworks_Bool_Exp>>;
  _not?: Maybe<Frameworks_Bool_Exp>;
  _or?: Maybe<Array<Frameworks_Bool_Exp>>;
  associatedLanguages?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
  frameworkCategories?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
  frameworkType?: Maybe<Frameworks_Types_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  release_year?: Maybe<String_Comparison_Exp>;
  type?: Maybe<Frameworks_Types_Enum_Comparison_Exp>;
};

/** columns and relationships of "frameworks_categories" */
export type Frameworks_Categories = {
  __typename?: 'frameworks_categories';
  /** An array relationship */
  frameworks_associated_categories: Array<Frameworks_Associated_Categories>;
  /** An aggregate relationship */
  frameworks_associated_categories_aggregate: Frameworks_Associated_Categories_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "frameworks_categories" */
export type Frameworks_CategoriesFrameworks_Associated_CategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


/** columns and relationships of "frameworks_categories" */
export type Frameworks_CategoriesFrameworks_Associated_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};

/** aggregated selection of "frameworks_categories" */
export type Frameworks_Categories_Aggregate = {
  __typename?: 'frameworks_categories_aggregate';
  aggregate?: Maybe<Frameworks_Categories_Aggregate_Fields>;
  nodes: Array<Frameworks_Categories>;
};

/** aggregate fields of "frameworks_categories" */
export type Frameworks_Categories_Aggregate_Fields = {
  __typename?: 'frameworks_categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Frameworks_Categories_Max_Fields>;
  min?: Maybe<Frameworks_Categories_Min_Fields>;
};


/** aggregate fields of "frameworks_categories" */
export type Frameworks_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Frameworks_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "frameworks_categories". All fields are combined with a logical 'AND'. */
export type Frameworks_Categories_Bool_Exp = {
  _and?: Maybe<Array<Frameworks_Categories_Bool_Exp>>;
  _not?: Maybe<Frameworks_Categories_Bool_Exp>;
  _or?: Maybe<Array<Frameworks_Categories_Bool_Exp>>;
  frameworks_associated_categories?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "frameworks_categories" */
export enum Frameworks_Categories_Constraint {
  /** unique or primary key constraint */
  FrameworksCategoriesPkey = 'frameworks_categories_pkey'
}

export enum Frameworks_Categories_Enum {
  ApplicationFramework = 'APPLICATION_FRAMEWORK',
  Cms = 'CMS',
  DataAnalysis = 'DATA_ANALYSIS',
  DevOps = 'DEV_OPS',
  GameEngine = 'GAME_ENGINE',
  Infrastructure = 'INFRASTRUCTURE',
  MachineLearning = 'MACHINE_LEARNING',
  MobileApp = 'MOBILE_APP',
  NaviteApp = 'NAVITE_APP',
  Stream = 'STREAM',
  TestingQa = 'TESTING_QA',
  WebFramework = 'WEB_FRAMEWORK',
  WebFrontend = 'WEB_FRONTEND',
  WebServer = 'WEB_SERVER'
}

/** Boolean expression to compare columns of type "frameworks_categories_enum". All fields are combined with logical 'AND'. */
export type Frameworks_Categories_Enum_Comparison_Exp = {
  _eq?: Maybe<Frameworks_Categories_Enum>;
  _in?: Maybe<Array<Frameworks_Categories_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Frameworks_Categories_Enum>;
  _nin?: Maybe<Array<Frameworks_Categories_Enum>>;
};

/** input type for inserting data into table "frameworks_categories" */
export type Frameworks_Categories_Insert_Input = {
  frameworks_associated_categories?: Maybe<Frameworks_Associated_Categories_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Frameworks_Categories_Max_Fields = {
  __typename?: 'frameworks_categories_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Frameworks_Categories_Min_Fields = {
  __typename?: 'frameworks_categories_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "frameworks_categories" */
export type Frameworks_Categories_Mutation_Response = {
  __typename?: 'frameworks_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Frameworks_Categories>;
};

/** input type for inserting object relation for remote table "frameworks_categories" */
export type Frameworks_Categories_Obj_Rel_Insert_Input = {
  data: Frameworks_Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_Categories_On_Conflict>;
};

/** on conflict condition type for table "frameworks_categories" */
export type Frameworks_Categories_On_Conflict = {
  constraint: Frameworks_Categories_Constraint;
  update_columns: Array<Frameworks_Categories_Update_Column>;
  where?: Maybe<Frameworks_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "frameworks_categories". */
export type Frameworks_Categories_Order_By = {
  frameworks_associated_categories_aggregate?: Maybe<Frameworks_Associated_Categories_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: frameworks_categories */
export type Frameworks_Categories_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "frameworks_categories" */
export enum Frameworks_Categories_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "frameworks_categories" */
export type Frameworks_Categories_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "frameworks_categories" */
export enum Frameworks_Categories_Update_Column {
  /** column name */
  Value = 'value'
}

/** unique or primary key constraints on table "frameworks" */
export enum Frameworks_Constraint {
  /** unique or primary key constraint */
  FrameworksPkey = 'frameworks_pkey'
}

/** input type for inserting data into table "frameworks" */
export type Frameworks_Insert_Input = {
  associatedLanguages?: Maybe<Frameworks_Associated_Languages_Arr_Rel_Insert_Input>;
  frameworkCategories?: Maybe<Frameworks_Associated_Categories_Arr_Rel_Insert_Input>;
  frameworkType?: Maybe<Frameworks_Types_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  release_year?: Maybe<Scalars['String']>;
  type?: Maybe<Frameworks_Types_Enum>;
};

/** aggregate max on columns */
export type Frameworks_Max_Fields = {
  __typename?: 'frameworks_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  release_year?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "frameworks" */
export type Frameworks_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  release_year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Frameworks_Min_Fields = {
  __typename?: 'frameworks_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  release_year?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "frameworks" */
export type Frameworks_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  release_year?: Maybe<Order_By>;
};

/** response of any mutation on the table "frameworks" */
export type Frameworks_Mutation_Response = {
  __typename?: 'frameworks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Frameworks>;
};

/** input type for inserting object relation for remote table "frameworks" */
export type Frameworks_Obj_Rel_Insert_Input = {
  data: Frameworks_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_On_Conflict>;
};

/** on conflict condition type for table "frameworks" */
export type Frameworks_On_Conflict = {
  constraint: Frameworks_Constraint;
  update_columns: Array<Frameworks_Update_Column>;
  where?: Maybe<Frameworks_Bool_Exp>;
};

/** Ordering options when selecting data from "frameworks". */
export type Frameworks_Order_By = {
  associatedLanguages_aggregate?: Maybe<Frameworks_Associated_Languages_Aggregate_Order_By>;
  frameworkCategories_aggregate?: Maybe<Frameworks_Associated_Categories_Aggregate_Order_By>;
  frameworkType?: Maybe<Frameworks_Types_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  release_year?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: frameworks */
export type Frameworks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "frameworks" */
export enum Frameworks_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "frameworks" */
export type Frameworks_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  release_year?: Maybe<Scalars['String']>;
  type?: Maybe<Frameworks_Types_Enum>;
};

/** columns and relationships of "frameworks_types" */
export type Frameworks_Types = {
  __typename?: 'frameworks_types';
  /** An array relationship */
  frameworks: Array<Frameworks>;
  /** An aggregate relationship */
  frameworks_aggregate: Frameworks_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "frameworks_types" */
export type Frameworks_TypesFrameworksArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};


/** columns and relationships of "frameworks_types" */
export type Frameworks_TypesFrameworks_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};

/** aggregated selection of "frameworks_types" */
export type Frameworks_Types_Aggregate = {
  __typename?: 'frameworks_types_aggregate';
  aggregate?: Maybe<Frameworks_Types_Aggregate_Fields>;
  nodes: Array<Frameworks_Types>;
};

/** aggregate fields of "frameworks_types" */
export type Frameworks_Types_Aggregate_Fields = {
  __typename?: 'frameworks_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Frameworks_Types_Max_Fields>;
  min?: Maybe<Frameworks_Types_Min_Fields>;
};


/** aggregate fields of "frameworks_types" */
export type Frameworks_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Frameworks_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "frameworks_types". All fields are combined with a logical 'AND'. */
export type Frameworks_Types_Bool_Exp = {
  _and?: Maybe<Array<Frameworks_Types_Bool_Exp>>;
  _not?: Maybe<Frameworks_Types_Bool_Exp>;
  _or?: Maybe<Array<Frameworks_Types_Bool_Exp>>;
  frameworks?: Maybe<Frameworks_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "frameworks_types" */
export enum Frameworks_Types_Constraint {
  /** unique or primary key constraint */
  FrameworksTypesPkey = 'frameworks_types_pkey'
}

export enum Frameworks_Types_Enum {
  Framework = 'FRAMEWORK',
  Infrastructure = 'INFRASTRUCTURE',
  Library = 'LIBRARY',
  Tool = 'TOOL'
}

/** Boolean expression to compare columns of type "frameworks_types_enum". All fields are combined with logical 'AND'. */
export type Frameworks_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Frameworks_Types_Enum>;
  _in?: Maybe<Array<Frameworks_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Frameworks_Types_Enum>;
  _nin?: Maybe<Array<Frameworks_Types_Enum>>;
};

/** input type for inserting data into table "frameworks_types" */
export type Frameworks_Types_Insert_Input = {
  frameworks?: Maybe<Frameworks_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Frameworks_Types_Max_Fields = {
  __typename?: 'frameworks_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Frameworks_Types_Min_Fields = {
  __typename?: 'frameworks_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "frameworks_types" */
export type Frameworks_Types_Mutation_Response = {
  __typename?: 'frameworks_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Frameworks_Types>;
};

/** input type for inserting object relation for remote table "frameworks_types" */
export type Frameworks_Types_Obj_Rel_Insert_Input = {
  data: Frameworks_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Frameworks_Types_On_Conflict>;
};

/** on conflict condition type for table "frameworks_types" */
export type Frameworks_Types_On_Conflict = {
  constraint: Frameworks_Types_Constraint;
  update_columns: Array<Frameworks_Types_Update_Column>;
  where?: Maybe<Frameworks_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "frameworks_types". */
export type Frameworks_Types_Order_By = {
  frameworks_aggregate?: Maybe<Frameworks_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: frameworks_types */
export type Frameworks_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "frameworks_types" */
export enum Frameworks_Types_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "frameworks_types" */
export type Frameworks_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "frameworks_types" */
export enum Frameworks_Types_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "frameworks" */
export enum Frameworks_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Type = 'type'
}


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account_providers" */
  delete_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.account_providers" */
  delete_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** delete data from the table: "auth.account_roles" */
  delete_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.account_roles" */
  delete_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** delete data from the table: "auth.accounts" */
  delete_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** delete single row from the table: "auth.accounts" */
  delete_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** delete data from the table: "auth.providers" */
  delete_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  delete_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** delete data from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** delete data from the table: "auth.roles" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "databases" */
  delete_databases?: Maybe<Databases_Mutation_Response>;
  /** delete data from the table: "databases_associated_types" */
  delete_databases_associated_types?: Maybe<Databases_Associated_Types_Mutation_Response>;
  /** delete single row from the table: "databases_associated_types" */
  delete_databases_associated_types_by_pk?: Maybe<Databases_Associated_Types>;
  /** delete single row from the table: "databases" */
  delete_databases_by_pk?: Maybe<Databases>;
  /** delete data from the table: "databases_types" */
  delete_databases_types?: Maybe<Databases_Types_Mutation_Response>;
  /** delete single row from the table: "databases_types" */
  delete_databases_types_by_pk?: Maybe<Databases_Types>;
  /** delete data from the table: "focus_areas" */
  delete_focus_areas?: Maybe<Focus_Areas_Mutation_Response>;
  /** delete single row from the table: "focus_areas" */
  delete_focus_areas_by_pk?: Maybe<Focus_Areas>;
  /** delete data from the table: "frameworks" */
  delete_frameworks?: Maybe<Frameworks_Mutation_Response>;
  /** delete data from the table: "frameworks_associated_categories" */
  delete_frameworks_associated_categories?: Maybe<Frameworks_Associated_Categories_Mutation_Response>;
  /** delete single row from the table: "frameworks_associated_categories" */
  delete_frameworks_associated_categories_by_pk?: Maybe<Frameworks_Associated_Categories>;
  /** delete data from the table: "frameworks_associated_languages" */
  delete_frameworks_associated_languages?: Maybe<Frameworks_Associated_Languages_Mutation_Response>;
  /** delete single row from the table: "frameworks_associated_languages" */
  delete_frameworks_associated_languages_by_pk?: Maybe<Frameworks_Associated_Languages>;
  /** delete single row from the table: "frameworks" */
  delete_frameworks_by_pk?: Maybe<Frameworks>;
  /** delete data from the table: "frameworks_categories" */
  delete_frameworks_categories?: Maybe<Frameworks_Categories_Mutation_Response>;
  /** delete single row from the table: "frameworks_categories" */
  delete_frameworks_categories_by_pk?: Maybe<Frameworks_Categories>;
  /** delete data from the table: "frameworks_types" */
  delete_frameworks_types?: Maybe<Frameworks_Types_Mutation_Response>;
  /** delete single row from the table: "frameworks_types" */
  delete_frameworks_types_by_pk?: Maybe<Frameworks_Types>;
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "profiles_spoken_languages" */
  delete_profiles_spoken_languages?: Maybe<Profiles_Spoken_Languages_Mutation_Response>;
  /** delete single row from the table: "profiles_spoken_languages" */
  delete_profiles_spoken_languages_by_pk?: Maybe<Profiles_Spoken_Languages>;
  /** delete data from the table: "profiles_types" */
  delete_profiles_types?: Maybe<Profiles_Types_Mutation_Response>;
  /** delete single row from the table: "profiles_types" */
  delete_profiles_types_by_pk?: Maybe<Profiles_Types>;
  /** delete data from the table: "programming_languages" */
  delete_programming_languages?: Maybe<Programming_Languages_Mutation_Response>;
  /** delete single row from the table: "programming_languages" */
  delete_programming_languages_by_pk?: Maybe<Programming_Languages>;
  /** delete data from the table: "spoken_languages" */
  delete_spoken_languages?: Maybe<Spoken_Languages_Mutation_Response>;
  /** delete single row from the table: "spoken_languages" */
  delete_spoken_languages_by_pk?: Maybe<Spoken_Languages>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "work_location_types" */
  delete_work_location_types?: Maybe<Work_Location_Types_Mutation_Response>;
  /** delete single row from the table: "work_location_types" */
  delete_work_location_types_by_pk?: Maybe<Work_Location_Types>;
  /** delete data from the table: "work_status_types" */
  delete_work_status_types?: Maybe<Work_Status_Types_Mutation_Response>;
  /** delete single row from the table: "work_status_types" */
  delete_work_status_types_by_pk?: Maybe<Work_Status_Types>;
  /** delete data from the table: "work_vacation_durations" */
  delete_work_vacation_durations?: Maybe<Work_Vacation_Durations_Mutation_Response>;
  /** delete single row from the table: "work_vacation_durations" */
  delete_work_vacation_durations_by_pk?: Maybe<Work_Vacation_Durations>;
  /** insert data into the table: "auth.account_providers" */
  insert_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.account_providers" */
  insert_auth_account_providers_one?: Maybe<Auth_Account_Providers>;
  /** insert data into the table: "auth.account_roles" */
  insert_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.account_roles" */
  insert_auth_account_roles_one?: Maybe<Auth_Account_Roles>;
  /** insert data into the table: "auth.accounts" */
  insert_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** insert a single row into the table: "auth.accounts" */
  insert_auth_accounts_one?: Maybe<Auth_Accounts>;
  /** insert data into the table: "auth.providers" */
  insert_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insert_auth_providers_one?: Maybe<Auth_Providers>;
  /** insert data into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  /** insert data into the table: "auth.roles" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "databases" */
  insert_databases?: Maybe<Databases_Mutation_Response>;
  /** insert data into the table: "databases_associated_types" */
  insert_databases_associated_types?: Maybe<Databases_Associated_Types_Mutation_Response>;
  /** insert a single row into the table: "databases_associated_types" */
  insert_databases_associated_types_one?: Maybe<Databases_Associated_Types>;
  /** insert a single row into the table: "databases" */
  insert_databases_one?: Maybe<Databases>;
  /** insert data into the table: "databases_types" */
  insert_databases_types?: Maybe<Databases_Types_Mutation_Response>;
  /** insert a single row into the table: "databases_types" */
  insert_databases_types_one?: Maybe<Databases_Types>;
  /** insert data into the table: "focus_areas" */
  insert_focus_areas?: Maybe<Focus_Areas_Mutation_Response>;
  /** insert a single row into the table: "focus_areas" */
  insert_focus_areas_one?: Maybe<Focus_Areas>;
  /** insert data into the table: "frameworks" */
  insert_frameworks?: Maybe<Frameworks_Mutation_Response>;
  /** insert data into the table: "frameworks_associated_categories" */
  insert_frameworks_associated_categories?: Maybe<Frameworks_Associated_Categories_Mutation_Response>;
  /** insert a single row into the table: "frameworks_associated_categories" */
  insert_frameworks_associated_categories_one?: Maybe<Frameworks_Associated_Categories>;
  /** insert data into the table: "frameworks_associated_languages" */
  insert_frameworks_associated_languages?: Maybe<Frameworks_Associated_Languages_Mutation_Response>;
  /** insert a single row into the table: "frameworks_associated_languages" */
  insert_frameworks_associated_languages_one?: Maybe<Frameworks_Associated_Languages>;
  /** insert data into the table: "frameworks_categories" */
  insert_frameworks_categories?: Maybe<Frameworks_Categories_Mutation_Response>;
  /** insert a single row into the table: "frameworks_categories" */
  insert_frameworks_categories_one?: Maybe<Frameworks_Categories>;
  /** insert a single row into the table: "frameworks" */
  insert_frameworks_one?: Maybe<Frameworks>;
  /** insert data into the table: "frameworks_types" */
  insert_frameworks_types?: Maybe<Frameworks_Types_Mutation_Response>;
  /** insert a single row into the table: "frameworks_types" */
  insert_frameworks_types_one?: Maybe<Frameworks_Types>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "profiles_spoken_languages" */
  insert_profiles_spoken_languages?: Maybe<Profiles_Spoken_Languages_Mutation_Response>;
  /** insert a single row into the table: "profiles_spoken_languages" */
  insert_profiles_spoken_languages_one?: Maybe<Profiles_Spoken_Languages>;
  /** insert data into the table: "profiles_types" */
  insert_profiles_types?: Maybe<Profiles_Types_Mutation_Response>;
  /** insert a single row into the table: "profiles_types" */
  insert_profiles_types_one?: Maybe<Profiles_Types>;
  /** insert data into the table: "programming_languages" */
  insert_programming_languages?: Maybe<Programming_Languages_Mutation_Response>;
  /** insert a single row into the table: "programming_languages" */
  insert_programming_languages_one?: Maybe<Programming_Languages>;
  /** insert data into the table: "spoken_languages" */
  insert_spoken_languages?: Maybe<Spoken_Languages_Mutation_Response>;
  /** insert a single row into the table: "spoken_languages" */
  insert_spoken_languages_one?: Maybe<Spoken_Languages>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "work_location_types" */
  insert_work_location_types?: Maybe<Work_Location_Types_Mutation_Response>;
  /** insert a single row into the table: "work_location_types" */
  insert_work_location_types_one?: Maybe<Work_Location_Types>;
  /** insert data into the table: "work_status_types" */
  insert_work_status_types?: Maybe<Work_Status_Types_Mutation_Response>;
  /** insert a single row into the table: "work_status_types" */
  insert_work_status_types_one?: Maybe<Work_Status_Types>;
  /** insert data into the table: "work_vacation_durations" */
  insert_work_vacation_durations?: Maybe<Work_Vacation_Durations_Mutation_Response>;
  /** insert a single row into the table: "work_vacation_durations" */
  insert_work_vacation_durations_one?: Maybe<Work_Vacation_Durations>;
  /** update data of the table: "auth.account_providers" */
  update_auth_account_providers?: Maybe<Auth_Account_Providers_Mutation_Response>;
  /** update single row of the table: "auth.account_providers" */
  update_auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** update data of the table: "auth.account_roles" */
  update_auth_account_roles?: Maybe<Auth_Account_Roles_Mutation_Response>;
  /** update single row of the table: "auth.account_roles" */
  update_auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** update data of the table: "auth.accounts" */
  update_auth_accounts?: Maybe<Auth_Accounts_Mutation_Response>;
  /** update single row of the table: "auth.accounts" */
  update_auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** update data of the table: "auth.providers" */
  update_auth_providers?: Maybe<Auth_Providers_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  update_auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** update data of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** update data of the table: "auth.roles" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "databases" */
  update_databases?: Maybe<Databases_Mutation_Response>;
  /** update data of the table: "databases_associated_types" */
  update_databases_associated_types?: Maybe<Databases_Associated_Types_Mutation_Response>;
  /** update single row of the table: "databases_associated_types" */
  update_databases_associated_types_by_pk?: Maybe<Databases_Associated_Types>;
  /** update single row of the table: "databases" */
  update_databases_by_pk?: Maybe<Databases>;
  /** update data of the table: "databases_types" */
  update_databases_types?: Maybe<Databases_Types_Mutation_Response>;
  /** update single row of the table: "databases_types" */
  update_databases_types_by_pk?: Maybe<Databases_Types>;
  /** update data of the table: "focus_areas" */
  update_focus_areas?: Maybe<Focus_Areas_Mutation_Response>;
  /** update single row of the table: "focus_areas" */
  update_focus_areas_by_pk?: Maybe<Focus_Areas>;
  /** update data of the table: "frameworks" */
  update_frameworks?: Maybe<Frameworks_Mutation_Response>;
  /** update data of the table: "frameworks_associated_categories" */
  update_frameworks_associated_categories?: Maybe<Frameworks_Associated_Categories_Mutation_Response>;
  /** update single row of the table: "frameworks_associated_categories" */
  update_frameworks_associated_categories_by_pk?: Maybe<Frameworks_Associated_Categories>;
  /** update data of the table: "frameworks_associated_languages" */
  update_frameworks_associated_languages?: Maybe<Frameworks_Associated_Languages_Mutation_Response>;
  /** update single row of the table: "frameworks_associated_languages" */
  update_frameworks_associated_languages_by_pk?: Maybe<Frameworks_Associated_Languages>;
  /** update single row of the table: "frameworks" */
  update_frameworks_by_pk?: Maybe<Frameworks>;
  /** update data of the table: "frameworks_categories" */
  update_frameworks_categories?: Maybe<Frameworks_Categories_Mutation_Response>;
  /** update single row of the table: "frameworks_categories" */
  update_frameworks_categories_by_pk?: Maybe<Frameworks_Categories>;
  /** update data of the table: "frameworks_types" */
  update_frameworks_types?: Maybe<Frameworks_Types_Mutation_Response>;
  /** update single row of the table: "frameworks_types" */
  update_frameworks_types_by_pk?: Maybe<Frameworks_Types>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update data of the table: "profiles_spoken_languages" */
  update_profiles_spoken_languages?: Maybe<Profiles_Spoken_Languages_Mutation_Response>;
  /** update single row of the table: "profiles_spoken_languages" */
  update_profiles_spoken_languages_by_pk?: Maybe<Profiles_Spoken_Languages>;
  /** update data of the table: "profiles_types" */
  update_profiles_types?: Maybe<Profiles_Types_Mutation_Response>;
  /** update single row of the table: "profiles_types" */
  update_profiles_types_by_pk?: Maybe<Profiles_Types>;
  /** update data of the table: "programming_languages" */
  update_programming_languages?: Maybe<Programming_Languages_Mutation_Response>;
  /** update single row of the table: "programming_languages" */
  update_programming_languages_by_pk?: Maybe<Programming_Languages>;
  /** update data of the table: "spoken_languages" */
  update_spoken_languages?: Maybe<Spoken_Languages_Mutation_Response>;
  /** update single row of the table: "spoken_languages" */
  update_spoken_languages_by_pk?: Maybe<Spoken_Languages>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "work_location_types" */
  update_work_location_types?: Maybe<Work_Location_Types_Mutation_Response>;
  /** update single row of the table: "work_location_types" */
  update_work_location_types_by_pk?: Maybe<Work_Location_Types>;
  /** update data of the table: "work_status_types" */
  update_work_status_types?: Maybe<Work_Status_Types_Mutation_Response>;
  /** update single row of the table: "work_status_types" */
  update_work_status_types_by_pk?: Maybe<Work_Status_Types>;
  /** update data of the table: "work_vacation_durations" */
  update_work_vacation_durations?: Maybe<Work_Vacation_Durations_Mutation_Response>;
  /** update single row of the table: "work_vacation_durations" */
  update_work_vacation_durations_by_pk?: Maybe<Work_Vacation_Durations>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_ProvidersArgs = {
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_RolesArgs = {
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountsArgs = {
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_ProvidersArgs = {
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_DatabasesArgs = {
  where: Databases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Databases_Associated_TypesArgs = {
  where: Databases_Associated_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Databases_Associated_Types_By_PkArgs = {
  database: Databases_Enum;
  type: Databases_Types_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Databases_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Databases_TypesArgs = {
  where: Databases_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Databases_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Focus_AreasArgs = {
  where: Focus_Areas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Focus_Areas_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_FrameworksArgs = {
  where: Frameworks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Associated_CategoriesArgs = {
  where: Frameworks_Associated_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Associated_Categories_By_PkArgs = {
  categories: Frameworks_Categories_Enum;
  framework_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Associated_LanguagesArgs = {
  where: Frameworks_Associated_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Associated_Languages_By_PkArgs = {
  framework_id: Scalars['uuid'];
  language: Programming_Languages_Enum;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_CategoriesArgs = {
  where: Frameworks_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Categories_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_TypesArgs = {
  where: Frameworks_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Frameworks_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Profiles_Spoken_LanguagesArgs = {
  where: Profiles_Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_Spoken_Languages_By_PkArgs = {
  language: Spoken_Languages_Enum;
  profile_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Profiles_TypesArgs = {
  where: Profiles_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Programming_LanguagesArgs = {
  where: Programming_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Programming_Languages_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Spoken_LanguagesArgs = {
  where: Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Spoken_Languages_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Location_TypesArgs = {
  where: Work_Location_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Location_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Status_TypesArgs = {
  where: Work_Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Vacation_DurationsArgs = {
  where: Work_Vacation_Durations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Vacation_Durations_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_ProvidersArgs = {
  objects: Array<Auth_Account_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Providers_OneArgs = {
  object: Auth_Account_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_RolesArgs = {
  objects: Array<Auth_Account_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Account_Roles_OneArgs = {
  object: Auth_Account_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_AccountsArgs = {
  objects: Array<Auth_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Accounts_OneArgs = {
  object: Auth_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_ProvidersArgs = {
  objects: Array<Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Providers_OneArgs = {
  object: Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: Maybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DatabasesArgs = {
  objects: Array<Databases_Insert_Input>;
  on_conflict?: Maybe<Databases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Databases_Associated_TypesArgs = {
  objects: Array<Databases_Associated_Types_Insert_Input>;
  on_conflict?: Maybe<Databases_Associated_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Databases_Associated_Types_OneArgs = {
  object: Databases_Associated_Types_Insert_Input;
  on_conflict?: Maybe<Databases_Associated_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Databases_OneArgs = {
  object: Databases_Insert_Input;
  on_conflict?: Maybe<Databases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Databases_TypesArgs = {
  objects: Array<Databases_Types_Insert_Input>;
  on_conflict?: Maybe<Databases_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Databases_Types_OneArgs = {
  object: Databases_Types_Insert_Input;
  on_conflict?: Maybe<Databases_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Focus_AreasArgs = {
  objects: Array<Focus_Areas_Insert_Input>;
  on_conflict?: Maybe<Focus_Areas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Focus_Areas_OneArgs = {
  object: Focus_Areas_Insert_Input;
  on_conflict?: Maybe<Focus_Areas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FrameworksArgs = {
  objects: Array<Frameworks_Insert_Input>;
  on_conflict?: Maybe<Frameworks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Associated_CategoriesArgs = {
  objects: Array<Frameworks_Associated_Categories_Insert_Input>;
  on_conflict?: Maybe<Frameworks_Associated_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Associated_Categories_OneArgs = {
  object: Frameworks_Associated_Categories_Insert_Input;
  on_conflict?: Maybe<Frameworks_Associated_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Associated_LanguagesArgs = {
  objects: Array<Frameworks_Associated_Languages_Insert_Input>;
  on_conflict?: Maybe<Frameworks_Associated_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Associated_Languages_OneArgs = {
  object: Frameworks_Associated_Languages_Insert_Input;
  on_conflict?: Maybe<Frameworks_Associated_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_CategoriesArgs = {
  objects: Array<Frameworks_Categories_Insert_Input>;
  on_conflict?: Maybe<Frameworks_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Categories_OneArgs = {
  object: Frameworks_Categories_Insert_Input;
  on_conflict?: Maybe<Frameworks_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_OneArgs = {
  object: Frameworks_Insert_Input;
  on_conflict?: Maybe<Frameworks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_TypesArgs = {
  objects: Array<Frameworks_Types_Insert_Input>;
  on_conflict?: Maybe<Frameworks_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Frameworks_Types_OneArgs = {
  object: Frameworks_Types_Insert_Input;
  on_conflict?: Maybe<Frameworks_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: Maybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: Maybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_Spoken_LanguagesArgs = {
  objects: Array<Profiles_Spoken_Languages_Insert_Input>;
  on_conflict?: Maybe<Profiles_Spoken_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_Spoken_Languages_OneArgs = {
  object: Profiles_Spoken_Languages_Insert_Input;
  on_conflict?: Maybe<Profiles_Spoken_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_TypesArgs = {
  objects: Array<Profiles_Types_Insert_Input>;
  on_conflict?: Maybe<Profiles_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_Types_OneArgs = {
  object: Profiles_Types_Insert_Input;
  on_conflict?: Maybe<Profiles_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Programming_LanguagesArgs = {
  objects: Array<Programming_Languages_Insert_Input>;
  on_conflict?: Maybe<Programming_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Programming_Languages_OneArgs = {
  object: Programming_Languages_Insert_Input;
  on_conflict?: Maybe<Programming_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spoken_LanguagesArgs = {
  objects: Array<Spoken_Languages_Insert_Input>;
  on_conflict?: Maybe<Spoken_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Spoken_Languages_OneArgs = {
  object: Spoken_Languages_Insert_Input;
  on_conflict?: Maybe<Spoken_Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Location_TypesArgs = {
  objects: Array<Work_Location_Types_Insert_Input>;
  on_conflict?: Maybe<Work_Location_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Location_Types_OneArgs = {
  object: Work_Location_Types_Insert_Input;
  on_conflict?: Maybe<Work_Location_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Status_TypesArgs = {
  objects: Array<Work_Status_Types_Insert_Input>;
  on_conflict?: Maybe<Work_Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Status_Types_OneArgs = {
  object: Work_Status_Types_Insert_Input;
  on_conflict?: Maybe<Work_Status_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Vacation_DurationsArgs = {
  objects: Array<Work_Vacation_Durations_Insert_Input>;
  on_conflict?: Maybe<Work_Vacation_Durations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Vacation_Durations_OneArgs = {
  object: Work_Vacation_Durations_Insert_Input;
  on_conflict?: Maybe<Work_Vacation_Durations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ProvidersArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  where: Auth_Account_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Account_Providers_Set_Input>;
  pk_columns: Auth_Account_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_RolesArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  where: Auth_Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Account_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Account_Roles_Set_Input>;
  pk_columns: Auth_Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_AccountsArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  where: Auth_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Accounts_By_PkArgs = {
  _append?: Maybe<Auth_Accounts_Append_Input>;
  _delete_at_path?: Maybe<Auth_Accounts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Auth_Accounts_Delete_Elem_Input>;
  _delete_key?: Maybe<Auth_Accounts_Delete_Key_Input>;
  _prepend?: Maybe<Auth_Accounts_Prepend_Input>;
  _set?: Maybe<Auth_Accounts_Set_Input>;
  pk_columns: Auth_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  where: Auth_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Providers_Set_Input>;
  pk_columns: Auth_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: Maybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DatabasesArgs = {
  _set?: Maybe<Databases_Set_Input>;
  where: Databases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Databases_Associated_TypesArgs = {
  _set?: Maybe<Databases_Associated_Types_Set_Input>;
  where: Databases_Associated_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Databases_Associated_Types_By_PkArgs = {
  _set?: Maybe<Databases_Associated_Types_Set_Input>;
  pk_columns: Databases_Associated_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Databases_By_PkArgs = {
  _set?: Maybe<Databases_Set_Input>;
  pk_columns: Databases_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Databases_TypesArgs = {
  _set?: Maybe<Databases_Types_Set_Input>;
  where: Databases_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Databases_Types_By_PkArgs = {
  _set?: Maybe<Databases_Types_Set_Input>;
  pk_columns: Databases_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Focus_AreasArgs = {
  _set?: Maybe<Focus_Areas_Set_Input>;
  where: Focus_Areas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Focus_Areas_By_PkArgs = {
  _set?: Maybe<Focus_Areas_Set_Input>;
  pk_columns: Focus_Areas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FrameworksArgs = {
  _set?: Maybe<Frameworks_Set_Input>;
  where: Frameworks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Associated_CategoriesArgs = {
  _set?: Maybe<Frameworks_Associated_Categories_Set_Input>;
  where: Frameworks_Associated_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Associated_Categories_By_PkArgs = {
  _set?: Maybe<Frameworks_Associated_Categories_Set_Input>;
  pk_columns: Frameworks_Associated_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Associated_LanguagesArgs = {
  _set?: Maybe<Frameworks_Associated_Languages_Set_Input>;
  where: Frameworks_Associated_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Associated_Languages_By_PkArgs = {
  _set?: Maybe<Frameworks_Associated_Languages_Set_Input>;
  pk_columns: Frameworks_Associated_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_By_PkArgs = {
  _set?: Maybe<Frameworks_Set_Input>;
  pk_columns: Frameworks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_CategoriesArgs = {
  _set?: Maybe<Frameworks_Categories_Set_Input>;
  where: Frameworks_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Categories_By_PkArgs = {
  _set?: Maybe<Frameworks_Categories_Set_Input>;
  pk_columns: Frameworks_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_TypesArgs = {
  _set?: Maybe<Frameworks_Types_Set_Input>;
  where: Frameworks_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Frameworks_Types_By_PkArgs = {
  _set?: Maybe<Frameworks_Types_Set_Input>;
  pk_columns: Frameworks_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: Maybe<Profiles_Inc_Input>;
  _set?: Maybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc?: Maybe<Profiles_Inc_Input>;
  _set?: Maybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_Spoken_LanguagesArgs = {
  _set?: Maybe<Profiles_Spoken_Languages_Set_Input>;
  where: Profiles_Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_Spoken_Languages_By_PkArgs = {
  _set?: Maybe<Profiles_Spoken_Languages_Set_Input>;
  pk_columns: Profiles_Spoken_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_TypesArgs = {
  _set?: Maybe<Profiles_Types_Set_Input>;
  where: Profiles_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_Types_By_PkArgs = {
  _set?: Maybe<Profiles_Types_Set_Input>;
  pk_columns: Profiles_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Programming_LanguagesArgs = {
  _set?: Maybe<Programming_Languages_Set_Input>;
  where: Programming_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Programming_Languages_By_PkArgs = {
  _set?: Maybe<Programming_Languages_Set_Input>;
  pk_columns: Programming_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Spoken_LanguagesArgs = {
  _set?: Maybe<Spoken_Languages_Set_Input>;
  where: Spoken_Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Spoken_Languages_By_PkArgs = {
  _set?: Maybe<Spoken_Languages_Set_Input>;
  pk_columns: Spoken_Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Location_TypesArgs = {
  _set?: Maybe<Work_Location_Types_Set_Input>;
  where: Work_Location_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Location_Types_By_PkArgs = {
  _set?: Maybe<Work_Location_Types_Set_Input>;
  pk_columns: Work_Location_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Status_TypesArgs = {
  _set?: Maybe<Work_Status_Types_Set_Input>;
  where: Work_Status_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Status_Types_By_PkArgs = {
  _set?: Maybe<Work_Status_Types_Set_Input>;
  pk_columns: Work_Status_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Vacation_DurationsArgs = {
  _set?: Maybe<Work_Vacation_Durations_Set_Input>;
  where: Work_Vacation_Durations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Vacation_Durations_By_PkArgs = {
  _set?: Maybe<Work_Vacation_Durations_Set_Input>;
  pk_columns: Work_Vacation_Durations_Pk_Columns_Input;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  created_at: Scalars['timestamptz'];
  driving_to_work?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  focusArea: Focus_Areas;
  focus_area?: Maybe<Focus_Areas_Enum>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  id: Scalars['uuid'];
  other_focus_area?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_type: Profiles_Types_Enum;
  /** An object relationship */
  profilesType: Profiles_Types;
  relocate_for_work?: Maybe<Scalars['Boolean']>;
  resume_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  spokenLanguages: Array<Profiles_Spoken_Languages>;
  /** An aggregate relationship */
  spokenLanguages_aggregate: Profiles_Spoken_Languages_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  visa_sponsoship?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  workLocationType: Work_Location_Types;
  /** An object relationship */
  workStatus: Work_Status_Types;
  /** An object relationship */
  workVacationDuration: Work_Vacation_Durations;
  work_location_type?: Maybe<Work_Location_Types_Enum>;
  work_status?: Maybe<Work_Status_Types_Enum>;
  work_vacation_duration?: Maybe<Work_Vacation_Durations_Enum>;
  years_of_experience?: Maybe<Scalars['numeric']>;
  zip_code?: Maybe<Scalars['String']>;
};


/** columns and relationships of "profiles" */
export type ProfilesSpokenLanguagesArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


/** columns and relationships of "profiles" */
export type ProfilesSpokenLanguages_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profiles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profiles" */
export type Profiles_Aggregate_Order_By = {
  avg?: Maybe<Profiles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Profiles_Max_Order_By>;
  min?: Maybe<Profiles_Min_Order_By>;
  stddev?: Maybe<Profiles_Stddev_Order_By>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Order_By>;
  sum?: Maybe<Profiles_Sum_Order_By>;
  var_pop?: Maybe<Profiles_Var_Pop_Order_By>;
  var_samp?: Maybe<Profiles_Var_Samp_Order_By>;
  variance?: Maybe<Profiles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profiles" */
export type Profiles_Arr_Rel_Insert_Input = {
  data: Array<Profiles_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Profiles_On_Conflict>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "profiles" */
export type Profiles_Avg_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: Maybe<Array<Profiles_Bool_Exp>>;
  _not?: Maybe<Profiles_Bool_Exp>;
  _or?: Maybe<Array<Profiles_Bool_Exp>>;
  acceptable_travel_time?: Maybe<Int_Comparison_Exp>;
  contract_compensation?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  driving_to_work?: Maybe<Boolean_Comparison_Exp>;
  focusArea?: Maybe<Focus_Areas_Bool_Exp>;
  focus_area?: Maybe<Focus_Areas_Enum_Comparison_Exp>;
  full_time_compensation?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  other_focus_area?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<String_Comparison_Exp>;
  profile_type?: Maybe<Profiles_Types_Enum_Comparison_Exp>;
  profilesType?: Maybe<Profiles_Types_Bool_Exp>;
  relocate_for_work?: Maybe<Boolean_Comparison_Exp>;
  resume_url?: Maybe<String_Comparison_Exp>;
  spokenLanguages?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  visa_sponsoship?: Maybe<Boolean_Comparison_Exp>;
  workLocationType?: Maybe<Work_Location_Types_Bool_Exp>;
  workStatus?: Maybe<Work_Status_Types_Bool_Exp>;
  workVacationDuration?: Maybe<Work_Vacation_Durations_Bool_Exp>;
  work_location_type?: Maybe<Work_Location_Types_Enum_Comparison_Exp>;
  work_status?: Maybe<Work_Status_Types_Enum_Comparison_Exp>;
  work_vacation_duration?: Maybe<Work_Vacation_Durations_Enum_Comparison_Exp>;
  years_of_experience?: Maybe<Numeric_Comparison_Exp>;
  zip_code?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  years_of_experience?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  driving_to_work?: Maybe<Scalars['Boolean']>;
  focusArea?: Maybe<Focus_Areas_Obj_Rel_Insert_Input>;
  focus_area?: Maybe<Focus_Areas_Enum>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  other_focus_area?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_type?: Maybe<Profiles_Types_Enum>;
  profilesType?: Maybe<Profiles_Types_Obj_Rel_Insert_Input>;
  relocate_for_work?: Maybe<Scalars['Boolean']>;
  resume_url?: Maybe<Scalars['String']>;
  spokenLanguages?: Maybe<Profiles_Spoken_Languages_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  visa_sponsoship?: Maybe<Scalars['Boolean']>;
  workLocationType?: Maybe<Work_Location_Types_Obj_Rel_Insert_Input>;
  workStatus?: Maybe<Work_Status_Types_Obj_Rel_Insert_Input>;
  workVacationDuration?: Maybe<Work_Vacation_Durations_Obj_Rel_Insert_Input>;
  work_location_type?: Maybe<Work_Location_Types_Enum>;
  work_status?: Maybe<Work_Status_Types_Enum>;
  work_vacation_duration?: Maybe<Work_Vacation_Durations_Enum>;
  years_of_experience?: Maybe<Scalars['numeric']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  other_focus_area?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  resume_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  years_of_experience?: Maybe<Scalars['numeric']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profiles" */
export type Profiles_Max_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other_focus_area?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  resume_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  other_focus_area?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  resume_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  years_of_experience?: Maybe<Scalars['numeric']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profiles" */
export type Profiles_Min_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other_focus_area?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  resume_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Profiles_On_Conflict>;
};

/** on conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns: Array<Profiles_Update_Column>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  driving_to_work?: Maybe<Order_By>;
  focusArea?: Maybe<Focus_Areas_Order_By>;
  focus_area?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  other_focus_area?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  profile_type?: Maybe<Order_By>;
  profilesType?: Maybe<Profiles_Types_Order_By>;
  relocate_for_work?: Maybe<Order_By>;
  resume_url?: Maybe<Order_By>;
  spokenLanguages_aggregate?: Maybe<Profiles_Spoken_Languages_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  visa_sponsoship?: Maybe<Order_By>;
  workLocationType?: Maybe<Work_Location_Types_Order_By>;
  workStatus?: Maybe<Work_Status_Types_Order_By>;
  workVacationDuration?: Maybe<Work_Vacation_Durations_Order_By>;
  work_location_type?: Maybe<Order_By>;
  work_status?: Maybe<Order_By>;
  work_vacation_duration?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  AcceptableTravelTime = 'acceptable_travel_time',
  /** column name */
  ContractCompensation = 'contract_compensation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrivingToWork = 'driving_to_work',
  /** column name */
  FocusArea = 'focus_area',
  /** column name */
  FullTimeCompensation = 'full_time_compensation',
  /** column name */
  Id = 'id',
  /** column name */
  OtherFocusArea = 'other_focus_area',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfileType = 'profile_type',
  /** column name */
  RelocateForWork = 'relocate_for_work',
  /** column name */
  ResumeUrl = 'resume_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VisaSponsoship = 'visa_sponsoship',
  /** column name */
  WorkLocationType = 'work_location_type',
  /** column name */
  WorkStatus = 'work_status',
  /** column name */
  WorkVacationDuration = 'work_vacation_duration',
  /** column name */
  YearsOfExperience = 'years_of_experience',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  driving_to_work?: Maybe<Scalars['Boolean']>;
  focus_area?: Maybe<Focus_Areas_Enum>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  other_focus_area?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  profile_type?: Maybe<Profiles_Types_Enum>;
  relocate_for_work?: Maybe<Scalars['Boolean']>;
  resume_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  visa_sponsoship?: Maybe<Scalars['Boolean']>;
  work_location_type?: Maybe<Work_Location_Types_Enum>;
  work_status?: Maybe<Work_Status_Types_Enum>;
  work_vacation_duration?: Maybe<Work_Vacation_Durations_Enum>;
  years_of_experience?: Maybe<Scalars['numeric']>;
  zip_code?: Maybe<Scalars['String']>;
};

/** columns and relationships of "profiles_spoken_languages" */
export type Profiles_Spoken_Languages = {
  __typename?: 'profiles_spoken_languages';
  language: Spoken_Languages_Enum;
  /** An object relationship */
  profile: Profiles;
  profile_id: Scalars['uuid'];
  /** An object relationship */
  spokenLanguage: Spoken_Languages;
};

/** aggregated selection of "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Aggregate = {
  __typename?: 'profiles_spoken_languages_aggregate';
  aggregate?: Maybe<Profiles_Spoken_Languages_Aggregate_Fields>;
  nodes: Array<Profiles_Spoken_Languages>;
};

/** aggregate fields of "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Aggregate_Fields = {
  __typename?: 'profiles_spoken_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profiles_Spoken_Languages_Max_Fields>;
  min?: Maybe<Profiles_Spoken_Languages_Min_Fields>;
};


/** aggregate fields of "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Profiles_Spoken_Languages_Max_Order_By>;
  min?: Maybe<Profiles_Spoken_Languages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Arr_Rel_Insert_Input = {
  data: Array<Profiles_Spoken_Languages_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Profiles_Spoken_Languages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "profiles_spoken_languages". All fields are combined with a logical 'AND'. */
export type Profiles_Spoken_Languages_Bool_Exp = {
  _and?: Maybe<Array<Profiles_Spoken_Languages_Bool_Exp>>;
  _not?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
  _or?: Maybe<Array<Profiles_Spoken_Languages_Bool_Exp>>;
  language?: Maybe<Spoken_Languages_Enum_Comparison_Exp>;
  profile?: Maybe<Profiles_Bool_Exp>;
  profile_id?: Maybe<Uuid_Comparison_Exp>;
  spokenLanguage?: Maybe<Spoken_Languages_Bool_Exp>;
};

/** unique or primary key constraints on table "profiles_spoken_languages" */
export enum Profiles_Spoken_Languages_Constraint {
  /** unique or primary key constraint */
  ProfilesSpokenLanguagesPkey = 'profiles_spoken_languages_pkey'
}

/** input type for inserting data into table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Insert_Input = {
  language?: Maybe<Spoken_Languages_Enum>;
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>;
  profile_id?: Maybe<Scalars['uuid']>;
  spokenLanguage?: Maybe<Spoken_Languages_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Profiles_Spoken_Languages_Max_Fields = {
  __typename?: 'profiles_spoken_languages_max_fields';
  profile_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Max_Order_By = {
  profile_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profiles_Spoken_Languages_Min_Fields = {
  __typename?: 'profiles_spoken_languages_min_fields';
  profile_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Min_Order_By = {
  profile_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Mutation_Response = {
  __typename?: 'profiles_spoken_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles_Spoken_Languages>;
};

/** on conflict condition type for table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_On_Conflict = {
  constraint: Profiles_Spoken_Languages_Constraint;
  update_columns: Array<Profiles_Spoken_Languages_Update_Column>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles_spoken_languages". */
export type Profiles_Spoken_Languages_Order_By = {
  language?: Maybe<Order_By>;
  profile?: Maybe<Profiles_Order_By>;
  profile_id?: Maybe<Order_By>;
  spokenLanguage?: Maybe<Spoken_Languages_Order_By>;
};

/** primary key columns input for table: profiles_spoken_languages */
export type Profiles_Spoken_Languages_Pk_Columns_Input = {
  language: Spoken_Languages_Enum;
  profile_id: Scalars['uuid'];
};

/** select columns of table "profiles_spoken_languages" */
export enum Profiles_Spoken_Languages_Select_Column {
  /** column name */
  Language = 'language',
  /** column name */
  ProfileId = 'profile_id'
}

/** input type for updating data in table "profiles_spoken_languages" */
export type Profiles_Spoken_Languages_Set_Input = {
  language?: Maybe<Spoken_Languages_Enum>;
  profile_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "profiles_spoken_languages" */
export enum Profiles_Spoken_Languages_Update_Column {
  /** column name */
  Language = 'language',
  /** column name */
  ProfileId = 'profile_id'
}

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "profiles" */
export type Profiles_Stddev_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "profiles" */
export type Profiles_Stddev_Pop_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "profiles" */
export type Profiles_Stddev_Samp_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  acceptable_travel_time?: Maybe<Scalars['Int']>;
  contract_compensation?: Maybe<Scalars['numeric']>;
  full_time_compensation?: Maybe<Scalars['numeric']>;
  years_of_experience?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "profiles" */
export type Profiles_Sum_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** columns and relationships of "profiles_types" */
export type Profiles_Types = {
  __typename?: 'profiles_types';
  /** An array relationship */
  focusArea: Array<Focus_Areas>;
  /** An aggregate relationship */
  focusArea_aggregate: Focus_Areas_Aggregate;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "profiles_types" */
export type Profiles_TypesFocusAreaArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


/** columns and relationships of "profiles_types" */
export type Profiles_TypesFocusArea_AggregateArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


/** columns and relationships of "profiles_types" */
export type Profiles_TypesProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "profiles_types" */
export type Profiles_TypesProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "profiles_types" */
export type Profiles_Types_Aggregate = {
  __typename?: 'profiles_types_aggregate';
  aggregate?: Maybe<Profiles_Types_Aggregate_Fields>;
  nodes: Array<Profiles_Types>;
};

/** aggregate fields of "profiles_types" */
export type Profiles_Types_Aggregate_Fields = {
  __typename?: 'profiles_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profiles_Types_Max_Fields>;
  min?: Maybe<Profiles_Types_Min_Fields>;
};


/** aggregate fields of "profiles_types" */
export type Profiles_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profiles_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "profiles_types". All fields are combined with a logical 'AND'. */
export type Profiles_Types_Bool_Exp = {
  _and?: Maybe<Array<Profiles_Types_Bool_Exp>>;
  _not?: Maybe<Profiles_Types_Bool_Exp>;
  _or?: Maybe<Array<Profiles_Types_Bool_Exp>>;
  focusArea?: Maybe<Focus_Areas_Bool_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles_types" */
export enum Profiles_Types_Constraint {
  /** unique or primary key constraint */
  ProfilesTypesPkey = 'profiles_types_pkey'
}

export enum Profiles_Types_Enum {
  ClientAdmin = 'CLIENT_ADMIN',
  ClientHirer = 'CLIENT_HIRER',
  SoftwareDeveloper = 'SOFTWARE_DEVELOPER',
  TechIndustry = 'TECH_INDUSTRY'
}

/** Boolean expression to compare columns of type "profiles_types_enum". All fields are combined with logical 'AND'. */
export type Profiles_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Profiles_Types_Enum>;
  _in?: Maybe<Array<Profiles_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Profiles_Types_Enum>;
  _nin?: Maybe<Array<Profiles_Types_Enum>>;
};

/** input type for inserting data into table "profiles_types" */
export type Profiles_Types_Insert_Input = {
  focusArea?: Maybe<Focus_Areas_Arr_Rel_Insert_Input>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Types_Max_Fields = {
  __typename?: 'profiles_types_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Types_Min_Fields = {
  __typename?: 'profiles_types_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profiles_types" */
export type Profiles_Types_Mutation_Response = {
  __typename?: 'profiles_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles_Types>;
};

/** input type for inserting object relation for remote table "profiles_types" */
export type Profiles_Types_Obj_Rel_Insert_Input = {
  data: Profiles_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Profiles_Types_On_Conflict>;
};

/** on conflict condition type for table "profiles_types" */
export type Profiles_Types_On_Conflict = {
  constraint: Profiles_Types_Constraint;
  update_columns: Array<Profiles_Types_Update_Column>;
  where?: Maybe<Profiles_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles_types". */
export type Profiles_Types_Order_By = {
  focusArea_aggregate?: Maybe<Focus_Areas_Aggregate_Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: profiles_types */
export type Profiles_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "profiles_types" */
export enum Profiles_Types_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "profiles_types" */
export type Profiles_Types_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "profiles_types" */
export enum Profiles_Types_Update_Column {
  /** column name */
  Value = 'value'
}

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  AcceptableTravelTime = 'acceptable_travel_time',
  /** column name */
  ContractCompensation = 'contract_compensation',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DrivingToWork = 'driving_to_work',
  /** column name */
  FocusArea = 'focus_area',
  /** column name */
  FullTimeCompensation = 'full_time_compensation',
  /** column name */
  Id = 'id',
  /** column name */
  OtherFocusArea = 'other_focus_area',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfileType = 'profile_type',
  /** column name */
  RelocateForWork = 'relocate_for_work',
  /** column name */
  ResumeUrl = 'resume_url',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  VisaSponsoship = 'visa_sponsoship',
  /** column name */
  WorkLocationType = 'work_location_type',
  /** column name */
  WorkStatus = 'work_status',
  /** column name */
  WorkVacationDuration = 'work_vacation_duration',
  /** column name */
  YearsOfExperience = 'years_of_experience',
  /** column name */
  ZipCode = 'zip_code'
}

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "profiles" */
export type Profiles_Var_Pop_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "profiles" */
export type Profiles_Var_Samp_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  acceptable_travel_time?: Maybe<Scalars['Float']>;
  contract_compensation?: Maybe<Scalars['Float']>;
  full_time_compensation?: Maybe<Scalars['Float']>;
  years_of_experience?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "profiles" */
export type Profiles_Variance_Order_By = {
  acceptable_travel_time?: Maybe<Order_By>;
  contract_compensation?: Maybe<Order_By>;
  full_time_compensation?: Maybe<Order_By>;
  years_of_experience?: Maybe<Order_By>;
};

/** columns and relationships of "programming_languages" */
export type Programming_Languages = {
  __typename?: 'programming_languages';
  /** An array relationship */
  associatedFrameworks: Array<Frameworks_Associated_Languages>;
  /** An aggregate relationship */
  associatedFrameworks_aggregate: Frameworks_Associated_Languages_Aggregate;
  release_year?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


/** columns and relationships of "programming_languages" */
export type Programming_LanguagesAssociatedFrameworksArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


/** columns and relationships of "programming_languages" */
export type Programming_LanguagesAssociatedFrameworks_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};

/** aggregated selection of "programming_languages" */
export type Programming_Languages_Aggregate = {
  __typename?: 'programming_languages_aggregate';
  aggregate?: Maybe<Programming_Languages_Aggregate_Fields>;
  nodes: Array<Programming_Languages>;
};

/** aggregate fields of "programming_languages" */
export type Programming_Languages_Aggregate_Fields = {
  __typename?: 'programming_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Programming_Languages_Max_Fields>;
  min?: Maybe<Programming_Languages_Min_Fields>;
};


/** aggregate fields of "programming_languages" */
export type Programming_Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Programming_Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "programming_languages". All fields are combined with a logical 'AND'. */
export type Programming_Languages_Bool_Exp = {
  _and?: Maybe<Array<Programming_Languages_Bool_Exp>>;
  _not?: Maybe<Programming_Languages_Bool_Exp>;
  _or?: Maybe<Array<Programming_Languages_Bool_Exp>>;
  associatedFrameworks?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
  release_year?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "programming_languages" */
export enum Programming_Languages_Constraint {
  /** unique or primary key constraint */
  ProgrammingLanguagesPkey = 'programming_languages_pkey'
}

export enum Programming_Languages_Enum {
  /** 1983 */
  Abap = 'ABAP',
  /** 1947 */
  Assembly = 'ASSEMBLY',
  /** 1989 */
  Bash = 'BASH',
  /** 2007 */
  Clojure = 'CLOJURE',
  /** 2009 */
  Coffeescript = 'COFFEESCRIPT',
  /** 1989 */
  Css = 'CSS',
  /** 1983 */
  CPlusPlus = 'C_PLUS_PLUS',
  /** 2000 */
  CSharp = 'C_SHARP',
  /** 2011 */
  Dart = 'DART',
  /** 1995 */
  Delphi = 'DELPHI',
  /** 2001 */
  DOnly = 'D_ONLY',
  /** 2012 */
  Elixir = 'ELIXIR',
  /** 2012 */
  Elm = 'ELM',
  /** 1986 */
  Erlang = 'ERLANG',
  /** 1954 */
  Fortran = 'FORTRAN',
  /** 2005 */
  FSharp = 'F_SHARP',
  /** 2009 */
  Go = 'GO',
  /** 2004 */
  Groovy = 'GROOVY',
  /** 1990 */
  Haskell = 'HASKELL',
  /** 1989 */
  Html = 'HTML',
  /** 1995 */
  Java = 'JAVA',
  /** 1995 */
  Javascript = 'JAVASCRIPT',
  /** 2012 */
  Julia = 'JULIA',
  /** 2011 */
  Kotlin = 'KOTLIN',
  /** 1959 */
  Lisp = 'LISP',
  /** 1993 */
  Lua = 'LUA',
  /** 1978 */
  Matlab = 'MATLAB',
  /** 1983 */
  ObjectiveC = 'OBJECTIVE_C',
  /** 1996 */
  Ocaml = 'OCAML',
  /** 1987 */
  Perl = 'PERL',
  /** 1995 */
  Php = 'PHP',
  /** 2006 */
  Powershell = 'POWERSHELL',
  /** 1989 */
  Python = 'PYTHON',
  /** 1995 */
  Ruby = 'RUBY',
  /** 2010 */
  Rust = 'RUST',
  /** 1993 */
  ROnly = 'R_ONLY',
  /** 2003 */
  Scala = 'SCALA',
  /** 1977 */
  Shell = 'SHELL',
  /** 1972 */
  SmallTalk = 'SMALL_TALK',
  /** 1972 */
  Sql = 'SQL',
  /** 2014 */
  Swift = 'SWIFT',
  /** 2012 */
  Typescript = 'TYPESCRIPT',
  /** 2012 */
  VisualBasic = 'VISUAL_BASIC'
}

/** Boolean expression to compare columns of type "programming_languages_enum". All fields are combined with logical 'AND'. */
export type Programming_Languages_Enum_Comparison_Exp = {
  _eq?: Maybe<Programming_Languages_Enum>;
  _in?: Maybe<Array<Programming_Languages_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Programming_Languages_Enum>;
  _nin?: Maybe<Array<Programming_Languages_Enum>>;
};

/** input type for inserting data into table "programming_languages" */
export type Programming_Languages_Insert_Input = {
  associatedFrameworks?: Maybe<Frameworks_Associated_Languages_Arr_Rel_Insert_Input>;
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Programming_Languages_Max_Fields = {
  __typename?: 'programming_languages_max_fields';
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Programming_Languages_Min_Fields = {
  __typename?: 'programming_languages_min_fields';
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "programming_languages" */
export type Programming_Languages_Mutation_Response = {
  __typename?: 'programming_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Programming_Languages>;
};

/** input type for inserting object relation for remote table "programming_languages" */
export type Programming_Languages_Obj_Rel_Insert_Input = {
  data: Programming_Languages_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Programming_Languages_On_Conflict>;
};

/** on conflict condition type for table "programming_languages" */
export type Programming_Languages_On_Conflict = {
  constraint: Programming_Languages_Constraint;
  update_columns: Array<Programming_Languages_Update_Column>;
  where?: Maybe<Programming_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "programming_languages". */
export type Programming_Languages_Order_By = {
  associatedFrameworks_aggregate?: Maybe<Frameworks_Associated_Languages_Aggregate_Order_By>;
  release_year?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: programming_languages */
export type Programming_Languages_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "programming_languages" */
export enum Programming_Languages_Select_Column {
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "programming_languages" */
export type Programming_Languages_Set_Input = {
  release_year?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "programming_languages" */
export enum Programming_Languages_Update_Column {
  /** column name */
  ReleaseYear = 'release_year',
  /** column name */
  Value = 'value'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "databases" */
  databases: Array<Databases>;
  /** fetch aggregated fields from the table: "databases" */
  databases_aggregate: Databases_Aggregate;
  /** fetch data from the table: "databases_associated_types" */
  databases_associated_types: Array<Databases_Associated_Types>;
  /** fetch aggregated fields from the table: "databases_associated_types" */
  databases_associated_types_aggregate: Databases_Associated_Types_Aggregate;
  /** fetch data from the table: "databases_associated_types" using primary key columns */
  databases_associated_types_by_pk?: Maybe<Databases_Associated_Types>;
  /** fetch data from the table: "databases" using primary key columns */
  databases_by_pk?: Maybe<Databases>;
  /** fetch data from the table: "databases_types" */
  databases_types: Array<Databases_Types>;
  /** fetch aggregated fields from the table: "databases_types" */
  databases_types_aggregate: Databases_Types_Aggregate;
  /** fetch data from the table: "databases_types" using primary key columns */
  databases_types_by_pk?: Maybe<Databases_Types>;
  /** fetch data from the table: "focus_areas" */
  focus_areas: Array<Focus_Areas>;
  /** fetch aggregated fields from the table: "focus_areas" */
  focus_areas_aggregate: Focus_Areas_Aggregate;
  /** fetch data from the table: "focus_areas" using primary key columns */
  focus_areas_by_pk?: Maybe<Focus_Areas>;
  /** fetch data from the table: "frameworks" */
  frameworks: Array<Frameworks>;
  /** fetch aggregated fields from the table: "frameworks" */
  frameworks_aggregate: Frameworks_Aggregate;
  /** fetch data from the table: "frameworks_associated_categories" */
  frameworks_associated_categories: Array<Frameworks_Associated_Categories>;
  /** fetch aggregated fields from the table: "frameworks_associated_categories" */
  frameworks_associated_categories_aggregate: Frameworks_Associated_Categories_Aggregate;
  /** fetch data from the table: "frameworks_associated_categories" using primary key columns */
  frameworks_associated_categories_by_pk?: Maybe<Frameworks_Associated_Categories>;
  /** fetch data from the table: "frameworks_associated_languages" */
  frameworks_associated_languages: Array<Frameworks_Associated_Languages>;
  /** fetch aggregated fields from the table: "frameworks_associated_languages" */
  frameworks_associated_languages_aggregate: Frameworks_Associated_Languages_Aggregate;
  /** fetch data from the table: "frameworks_associated_languages" using primary key columns */
  frameworks_associated_languages_by_pk?: Maybe<Frameworks_Associated_Languages>;
  /** fetch data from the table: "frameworks" using primary key columns */
  frameworks_by_pk?: Maybe<Frameworks>;
  /** fetch data from the table: "frameworks_categories" */
  frameworks_categories: Array<Frameworks_Categories>;
  /** fetch aggregated fields from the table: "frameworks_categories" */
  frameworks_categories_aggregate: Frameworks_Categories_Aggregate;
  /** fetch data from the table: "frameworks_categories" using primary key columns */
  frameworks_categories_by_pk?: Maybe<Frameworks_Categories>;
  /** fetch data from the table: "frameworks_types" */
  frameworks_types: Array<Frameworks_Types>;
  /** fetch aggregated fields from the table: "frameworks_types" */
  frameworks_types_aggregate: Frameworks_Types_Aggregate;
  /** fetch data from the table: "frameworks_types" using primary key columns */
  frameworks_types_by_pk?: Maybe<Frameworks_Types>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "profiles_spoken_languages" */
  profiles_spoken_languages: Array<Profiles_Spoken_Languages>;
  /** fetch aggregated fields from the table: "profiles_spoken_languages" */
  profiles_spoken_languages_aggregate: Profiles_Spoken_Languages_Aggregate;
  /** fetch data from the table: "profiles_spoken_languages" using primary key columns */
  profiles_spoken_languages_by_pk?: Maybe<Profiles_Spoken_Languages>;
  /** fetch data from the table: "profiles_types" */
  profiles_types: Array<Profiles_Types>;
  /** fetch aggregated fields from the table: "profiles_types" */
  profiles_types_aggregate: Profiles_Types_Aggregate;
  /** fetch data from the table: "profiles_types" using primary key columns */
  profiles_types_by_pk?: Maybe<Profiles_Types>;
  /** fetch data from the table: "programming_languages" */
  programming_languages: Array<Programming_Languages>;
  /** fetch aggregated fields from the table: "programming_languages" */
  programming_languages_aggregate: Programming_Languages_Aggregate;
  /** fetch data from the table: "programming_languages" using primary key columns */
  programming_languages_by_pk?: Maybe<Programming_Languages>;
  /** fetch data from the table: "spoken_languages" */
  spoken_languages: Array<Spoken_Languages>;
  /** fetch aggregated fields from the table: "spoken_languages" */
  spoken_languages_aggregate: Spoken_Languages_Aggregate;
  /** fetch data from the table: "spoken_languages" using primary key columns */
  spoken_languages_by_pk?: Maybe<Spoken_Languages>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "work_location_types" */
  work_location_types: Array<Work_Location_Types>;
  /** fetch aggregated fields from the table: "work_location_types" */
  work_location_types_aggregate: Work_Location_Types_Aggregate;
  /** fetch data from the table: "work_location_types" using primary key columns */
  work_location_types_by_pk?: Maybe<Work_Location_Types>;
  /** fetch data from the table: "work_status_types" */
  work_status_types: Array<Work_Status_Types>;
  /** fetch aggregated fields from the table: "work_status_types" */
  work_status_types_aggregate: Work_Status_Types_Aggregate;
  /** fetch data from the table: "work_status_types" using primary key columns */
  work_status_types_by_pk?: Maybe<Work_Status_Types>;
  /** fetch data from the table: "work_vacation_durations" */
  work_vacation_durations: Array<Work_Vacation_Durations>;
  /** fetch aggregated fields from the table: "work_vacation_durations" */
  work_vacation_durations_aggregate: Work_Vacation_Durations_Aggregate;
  /** fetch data from the table: "work_vacation_durations" using primary key columns */
  work_vacation_durations_by_pk?: Maybe<Work_Vacation_Durations>;
};


export type Query_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Query_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Query_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Query_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootDatabasesArgs = {
  distinct_on?: Maybe<Array<Databases_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Order_By>>;
  where?: Maybe<Databases_Bool_Exp>;
};


export type Query_RootDatabases_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Order_By>>;
  where?: Maybe<Databases_Bool_Exp>;
};


export type Query_RootDatabases_Associated_TypesArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


export type Query_RootDatabases_Associated_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


export type Query_RootDatabases_Associated_Types_By_PkArgs = {
  database: Databases_Enum;
  type: Databases_Types_Enum;
};


export type Query_RootDatabases_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootDatabases_TypesArgs = {
  distinct_on?: Maybe<Array<Databases_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Types_Order_By>>;
  where?: Maybe<Databases_Types_Bool_Exp>;
};


export type Query_RootDatabases_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Types_Order_By>>;
  where?: Maybe<Databases_Types_Bool_Exp>;
};


export type Query_RootDatabases_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFocus_AreasArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


export type Query_RootFocus_Areas_AggregateArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


export type Query_RootFocus_Areas_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFrameworksArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};


export type Query_RootFrameworks_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};


export type Query_RootFrameworks_Associated_CategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


export type Query_RootFrameworks_Associated_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


export type Query_RootFrameworks_Associated_Categories_By_PkArgs = {
  categories: Frameworks_Categories_Enum;
  framework_id: Scalars['uuid'];
};


export type Query_RootFrameworks_Associated_LanguagesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


export type Query_RootFrameworks_Associated_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


export type Query_RootFrameworks_Associated_Languages_By_PkArgs = {
  framework_id: Scalars['uuid'];
  language: Programming_Languages_Enum;
};


export type Query_RootFrameworks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFrameworks_CategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Categories_Order_By>>;
  where?: Maybe<Frameworks_Categories_Bool_Exp>;
};


export type Query_RootFrameworks_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Categories_Order_By>>;
  where?: Maybe<Frameworks_Categories_Bool_Exp>;
};


export type Query_RootFrameworks_Categories_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFrameworks_TypesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Types_Order_By>>;
  where?: Maybe<Frameworks_Types_Bool_Exp>;
};


export type Query_RootFrameworks_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Types_Order_By>>;
  where?: Maybe<Frameworks_Types_Bool_Exp>;
};


export type Query_RootFrameworks_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProfiles_Spoken_LanguagesArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


export type Query_RootProfiles_Spoken_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


export type Query_RootProfiles_Spoken_Languages_By_PkArgs = {
  language: Spoken_Languages_Enum;
  profile_id: Scalars['uuid'];
};


export type Query_RootProfiles_TypesArgs = {
  distinct_on?: Maybe<Array<Profiles_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Types_Order_By>>;
  where?: Maybe<Profiles_Types_Bool_Exp>;
};


export type Query_RootProfiles_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Types_Order_By>>;
  where?: Maybe<Profiles_Types_Bool_Exp>;
};


export type Query_RootProfiles_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootProgramming_LanguagesArgs = {
  distinct_on?: Maybe<Array<Programming_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Languages_Order_By>>;
  where?: Maybe<Programming_Languages_Bool_Exp>;
};


export type Query_RootProgramming_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Programming_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Languages_Order_By>>;
  where?: Maybe<Programming_Languages_Bool_Exp>;
};


export type Query_RootProgramming_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSpoken_LanguagesArgs = {
  distinct_on?: Maybe<Array<Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Spoken_Languages_Order_By>>;
  where?: Maybe<Spoken_Languages_Bool_Exp>;
};


export type Query_RootSpoken_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Spoken_Languages_Order_By>>;
  where?: Maybe<Spoken_Languages_Bool_Exp>;
};


export type Query_RootSpoken_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWork_Location_TypesArgs = {
  distinct_on?: Maybe<Array<Work_Location_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Location_Types_Order_By>>;
  where?: Maybe<Work_Location_Types_Bool_Exp>;
};


export type Query_RootWork_Location_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Location_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Location_Types_Order_By>>;
  where?: Maybe<Work_Location_Types_Bool_Exp>;
};


export type Query_RootWork_Location_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootWork_Status_TypesArgs = {
  distinct_on?: Maybe<Array<Work_Status_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Status_Types_Order_By>>;
  where?: Maybe<Work_Status_Types_Bool_Exp>;
};


export type Query_RootWork_Status_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Status_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Status_Types_Order_By>>;
  where?: Maybe<Work_Status_Types_Bool_Exp>;
};


export type Query_RootWork_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootWork_Vacation_DurationsArgs = {
  distinct_on?: Maybe<Array<Work_Vacation_Durations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Vacation_Durations_Order_By>>;
  where?: Maybe<Work_Vacation_Durations_Bool_Exp>;
};


export type Query_RootWork_Vacation_Durations_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Vacation_Durations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Vacation_Durations_Order_By>>;
  where?: Maybe<Work_Vacation_Durations_Bool_Exp>;
};


export type Query_RootWork_Vacation_Durations_By_PkArgs = {
  value: Scalars['String'];
};

/** columns and relationships of "spoken_languages" */
export type Spoken_Languages = {
  __typename?: 'spoken_languages';
  /** An array relationship */
  associatedProfiles: Array<Profiles_Spoken_Languages>;
  /** An aggregate relationship */
  associatedProfiles_aggregate: Profiles_Spoken_Languages_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "spoken_languages" */
export type Spoken_LanguagesAssociatedProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


/** columns and relationships of "spoken_languages" */
export type Spoken_LanguagesAssociatedProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};

/** aggregated selection of "spoken_languages" */
export type Spoken_Languages_Aggregate = {
  __typename?: 'spoken_languages_aggregate';
  aggregate?: Maybe<Spoken_Languages_Aggregate_Fields>;
  nodes: Array<Spoken_Languages>;
};

/** aggregate fields of "spoken_languages" */
export type Spoken_Languages_Aggregate_Fields = {
  __typename?: 'spoken_languages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Spoken_Languages_Max_Fields>;
  min?: Maybe<Spoken_Languages_Min_Fields>;
};


/** aggregate fields of "spoken_languages" */
export type Spoken_Languages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Spoken_Languages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "spoken_languages". All fields are combined with a logical 'AND'. */
export type Spoken_Languages_Bool_Exp = {
  _and?: Maybe<Array<Spoken_Languages_Bool_Exp>>;
  _not?: Maybe<Spoken_Languages_Bool_Exp>;
  _or?: Maybe<Array<Spoken_Languages_Bool_Exp>>;
  associatedProfiles?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "spoken_languages" */
export enum Spoken_Languages_Constraint {
  /** unique or primary key constraint */
  SpokenLanguagesPkey = 'spoken_languages_pkey'
}

export enum Spoken_Languages_Enum {
  Af = 'AF',
  Ar = 'AR',
  Bg = 'BG',
  Bs = 'BS',
  Ca = 'CA',
  Cs = 'CS',
  Cy = 'CY',
  Da = 'DA',
  De = 'DE',
  El = 'EL',
  En = 'EN',
  Es = 'ES',
  Et = 'ET',
  Fa = 'FA',
  Fi = 'FI',
  Fr = 'FR',
  He = 'HE',
  Hi = 'HI',
  Hr = 'HR',
  Hu = 'HU',
  Id = 'ID',
  It = 'IT',
  Ja = 'JA',
  Ko = 'KO',
  Lt = 'LT',
  Lv = 'LV',
  Mk = 'MK',
  Ms = 'MS',
  My = 'MY',
  Nl = 'NL',
  No = 'NO',
  Pl = 'PL',
  Pt = 'PT',
  Ro = 'RO',
  Ru = 'RU',
  Sk = 'SK',
  Sl = 'SL',
  Sq = 'SQ',
  Sv = 'SV',
  Th = 'TH',
  Tl = 'TL',
  Tr = 'TR',
  Uk = 'UK',
  Vi = 'VI',
  Zh = 'ZH'
}

/** Boolean expression to compare columns of type "spoken_languages_enum". All fields are combined with logical 'AND'. */
export type Spoken_Languages_Enum_Comparison_Exp = {
  _eq?: Maybe<Spoken_Languages_Enum>;
  _in?: Maybe<Array<Spoken_Languages_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Spoken_Languages_Enum>;
  _nin?: Maybe<Array<Spoken_Languages_Enum>>;
};

/** input type for inserting data into table "spoken_languages" */
export type Spoken_Languages_Insert_Input = {
  associatedProfiles?: Maybe<Profiles_Spoken_Languages_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Spoken_Languages_Max_Fields = {
  __typename?: 'spoken_languages_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Spoken_Languages_Min_Fields = {
  __typename?: 'spoken_languages_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "spoken_languages" */
export type Spoken_Languages_Mutation_Response = {
  __typename?: 'spoken_languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Spoken_Languages>;
};

/** input type for inserting object relation for remote table "spoken_languages" */
export type Spoken_Languages_Obj_Rel_Insert_Input = {
  data: Spoken_Languages_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Spoken_Languages_On_Conflict>;
};

/** on conflict condition type for table "spoken_languages" */
export type Spoken_Languages_On_Conflict = {
  constraint: Spoken_Languages_Constraint;
  update_columns: Array<Spoken_Languages_Update_Column>;
  where?: Maybe<Spoken_Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "spoken_languages". */
export type Spoken_Languages_Order_By = {
  associatedProfiles_aggregate?: Maybe<Profiles_Spoken_Languages_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: spoken_languages */
export type Spoken_Languages_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "spoken_languages" */
export enum Spoken_Languages_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "spoken_languages" */
export type Spoken_Languages_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "spoken_languages" */
export enum Spoken_Languages_Update_Column {
  /** column name */
  Value = 'value'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account_providers" */
  auth_account_providers: Array<Auth_Account_Providers>;
  /** fetch aggregated fields from the table: "auth.account_providers" */
  auth_account_providers_aggregate: Auth_Account_Providers_Aggregate;
  /** fetch data from the table: "auth.account_providers" using primary key columns */
  auth_account_providers_by_pk?: Maybe<Auth_Account_Providers>;
  /** fetch data from the table: "auth.account_roles" */
  auth_account_roles: Array<Auth_Account_Roles>;
  /** fetch aggregated fields from the table: "auth.account_roles" */
  auth_account_roles_aggregate: Auth_Account_Roles_Aggregate;
  /** fetch data from the table: "auth.account_roles" using primary key columns */
  auth_account_roles_by_pk?: Maybe<Auth_Account_Roles>;
  /** fetch data from the table: "auth.accounts" */
  auth_accounts: Array<Auth_Accounts>;
  /** fetch aggregated fields from the table: "auth.accounts" */
  auth_accounts_aggregate: Auth_Accounts_Aggregate;
  /** fetch data from the table: "auth.accounts" using primary key columns */
  auth_accounts_by_pk?: Maybe<Auth_Accounts>;
  /** fetch data from the table: "auth.providers" */
  auth_providers: Array<Auth_Providers>;
  /** fetch aggregated fields from the table: "auth.providers" */
  auth_providers_aggregate: Auth_Providers_Aggregate;
  /** fetch data from the table: "auth.providers" using primary key columns */
  auth_providers_by_pk?: Maybe<Auth_Providers>;
  /** fetch data from the table: "auth.refresh_tokens" */
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  /** fetch data from the table: "auth.roles" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** fetch data from the table: "databases" */
  databases: Array<Databases>;
  /** fetch aggregated fields from the table: "databases" */
  databases_aggregate: Databases_Aggregate;
  /** fetch data from the table: "databases_associated_types" */
  databases_associated_types: Array<Databases_Associated_Types>;
  /** fetch aggregated fields from the table: "databases_associated_types" */
  databases_associated_types_aggregate: Databases_Associated_Types_Aggregate;
  /** fetch data from the table: "databases_associated_types" using primary key columns */
  databases_associated_types_by_pk?: Maybe<Databases_Associated_Types>;
  /** fetch data from the table: "databases" using primary key columns */
  databases_by_pk?: Maybe<Databases>;
  /** fetch data from the table: "databases_types" */
  databases_types: Array<Databases_Types>;
  /** fetch aggregated fields from the table: "databases_types" */
  databases_types_aggregate: Databases_Types_Aggregate;
  /** fetch data from the table: "databases_types" using primary key columns */
  databases_types_by_pk?: Maybe<Databases_Types>;
  /** fetch data from the table: "focus_areas" */
  focus_areas: Array<Focus_Areas>;
  /** fetch aggregated fields from the table: "focus_areas" */
  focus_areas_aggregate: Focus_Areas_Aggregate;
  /** fetch data from the table: "focus_areas" using primary key columns */
  focus_areas_by_pk?: Maybe<Focus_Areas>;
  /** fetch data from the table: "frameworks" */
  frameworks: Array<Frameworks>;
  /** fetch aggregated fields from the table: "frameworks" */
  frameworks_aggregate: Frameworks_Aggregate;
  /** fetch data from the table: "frameworks_associated_categories" */
  frameworks_associated_categories: Array<Frameworks_Associated_Categories>;
  /** fetch aggregated fields from the table: "frameworks_associated_categories" */
  frameworks_associated_categories_aggregate: Frameworks_Associated_Categories_Aggregate;
  /** fetch data from the table: "frameworks_associated_categories" using primary key columns */
  frameworks_associated_categories_by_pk?: Maybe<Frameworks_Associated_Categories>;
  /** fetch data from the table: "frameworks_associated_languages" */
  frameworks_associated_languages: Array<Frameworks_Associated_Languages>;
  /** fetch aggregated fields from the table: "frameworks_associated_languages" */
  frameworks_associated_languages_aggregate: Frameworks_Associated_Languages_Aggregate;
  /** fetch data from the table: "frameworks_associated_languages" using primary key columns */
  frameworks_associated_languages_by_pk?: Maybe<Frameworks_Associated_Languages>;
  /** fetch data from the table: "frameworks" using primary key columns */
  frameworks_by_pk?: Maybe<Frameworks>;
  /** fetch data from the table: "frameworks_categories" */
  frameworks_categories: Array<Frameworks_Categories>;
  /** fetch aggregated fields from the table: "frameworks_categories" */
  frameworks_categories_aggregate: Frameworks_Categories_Aggregate;
  /** fetch data from the table: "frameworks_categories" using primary key columns */
  frameworks_categories_by_pk?: Maybe<Frameworks_Categories>;
  /** fetch data from the table: "frameworks_types" */
  frameworks_types: Array<Frameworks_Types>;
  /** fetch aggregated fields from the table: "frameworks_types" */
  frameworks_types_aggregate: Frameworks_Types_Aggregate;
  /** fetch data from the table: "frameworks_types" using primary key columns */
  frameworks_types_by_pk?: Maybe<Frameworks_Types>;
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table: "profiles_spoken_languages" */
  profiles_spoken_languages: Array<Profiles_Spoken_Languages>;
  /** fetch aggregated fields from the table: "profiles_spoken_languages" */
  profiles_spoken_languages_aggregate: Profiles_Spoken_Languages_Aggregate;
  /** fetch data from the table: "profiles_spoken_languages" using primary key columns */
  profiles_spoken_languages_by_pk?: Maybe<Profiles_Spoken_Languages>;
  /** fetch data from the table: "profiles_types" */
  profiles_types: Array<Profiles_Types>;
  /** fetch aggregated fields from the table: "profiles_types" */
  profiles_types_aggregate: Profiles_Types_Aggregate;
  /** fetch data from the table: "profiles_types" using primary key columns */
  profiles_types_by_pk?: Maybe<Profiles_Types>;
  /** fetch data from the table: "programming_languages" */
  programming_languages: Array<Programming_Languages>;
  /** fetch aggregated fields from the table: "programming_languages" */
  programming_languages_aggregate: Programming_Languages_Aggregate;
  /** fetch data from the table: "programming_languages" using primary key columns */
  programming_languages_by_pk?: Maybe<Programming_Languages>;
  /** fetch data from the table: "spoken_languages" */
  spoken_languages: Array<Spoken_Languages>;
  /** fetch aggregated fields from the table: "spoken_languages" */
  spoken_languages_aggregate: Spoken_Languages_Aggregate;
  /** fetch data from the table: "spoken_languages" using primary key columns */
  spoken_languages_by_pk?: Maybe<Spoken_Languages>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "work_location_types" */
  work_location_types: Array<Work_Location_Types>;
  /** fetch aggregated fields from the table: "work_location_types" */
  work_location_types_aggregate: Work_Location_Types_Aggregate;
  /** fetch data from the table: "work_location_types" using primary key columns */
  work_location_types_by_pk?: Maybe<Work_Location_Types>;
  /** fetch data from the table: "work_status_types" */
  work_status_types: Array<Work_Status_Types>;
  /** fetch aggregated fields from the table: "work_status_types" */
  work_status_types_aggregate: Work_Status_Types_Aggregate;
  /** fetch data from the table: "work_status_types" using primary key columns */
  work_status_types_by_pk?: Maybe<Work_Status_Types>;
  /** fetch data from the table: "work_vacation_durations" */
  work_vacation_durations: Array<Work_Vacation_Durations>;
  /** fetch aggregated fields from the table: "work_vacation_durations" */
  work_vacation_durations_aggregate: Work_Vacation_Durations_Aggregate;
  /** fetch data from the table: "work_vacation_durations" using primary key columns */
  work_vacation_durations_by_pk?: Maybe<Work_Vacation_Durations>;
};


export type Subscription_RootAuth_Account_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Providers_Order_By>>;
  where?: Maybe<Auth_Account_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Account_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Account_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Account_Roles_Order_By>>;
  where?: Maybe<Auth_Account_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Accounts_Order_By>>;
  where?: Maybe<Auth_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Roles_Order_By>>;
  where?: Maybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootDatabasesArgs = {
  distinct_on?: Maybe<Array<Databases_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Order_By>>;
  where?: Maybe<Databases_Bool_Exp>;
};


export type Subscription_RootDatabases_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Order_By>>;
  where?: Maybe<Databases_Bool_Exp>;
};


export type Subscription_RootDatabases_Associated_TypesArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


export type Subscription_RootDatabases_Associated_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Associated_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Associated_Types_Order_By>>;
  where?: Maybe<Databases_Associated_Types_Bool_Exp>;
};


export type Subscription_RootDatabases_Associated_Types_By_PkArgs = {
  database: Databases_Enum;
  type: Databases_Types_Enum;
};


export type Subscription_RootDatabases_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootDatabases_TypesArgs = {
  distinct_on?: Maybe<Array<Databases_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Types_Order_By>>;
  where?: Maybe<Databases_Types_Bool_Exp>;
};


export type Subscription_RootDatabases_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Databases_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Databases_Types_Order_By>>;
  where?: Maybe<Databases_Types_Bool_Exp>;
};


export type Subscription_RootDatabases_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFocus_AreasArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


export type Subscription_RootFocus_Areas_AggregateArgs = {
  distinct_on?: Maybe<Array<Focus_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Focus_Areas_Order_By>>;
  where?: Maybe<Focus_Areas_Bool_Exp>;
};


export type Subscription_RootFocus_Areas_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFrameworksArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};


export type Subscription_RootFrameworks_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Order_By>>;
  where?: Maybe<Frameworks_Bool_Exp>;
};


export type Subscription_RootFrameworks_Associated_CategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


export type Subscription_RootFrameworks_Associated_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Categories_Order_By>>;
  where?: Maybe<Frameworks_Associated_Categories_Bool_Exp>;
};


export type Subscription_RootFrameworks_Associated_Categories_By_PkArgs = {
  categories: Frameworks_Categories_Enum;
  framework_id: Scalars['uuid'];
};


export type Subscription_RootFrameworks_Associated_LanguagesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


export type Subscription_RootFrameworks_Associated_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Associated_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Associated_Languages_Order_By>>;
  where?: Maybe<Frameworks_Associated_Languages_Bool_Exp>;
};


export type Subscription_RootFrameworks_Associated_Languages_By_PkArgs = {
  framework_id: Scalars['uuid'];
  language: Programming_Languages_Enum;
};


export type Subscription_RootFrameworks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFrameworks_CategoriesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Categories_Order_By>>;
  where?: Maybe<Frameworks_Categories_Bool_Exp>;
};


export type Subscription_RootFrameworks_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Categories_Order_By>>;
  where?: Maybe<Frameworks_Categories_Bool_Exp>;
};


export type Subscription_RootFrameworks_Categories_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFrameworks_TypesArgs = {
  distinct_on?: Maybe<Array<Frameworks_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Types_Order_By>>;
  where?: Maybe<Frameworks_Types_Bool_Exp>;
};


export type Subscription_RootFrameworks_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Frameworks_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Frameworks_Types_Order_By>>;
  where?: Maybe<Frameworks_Types_Bool_Exp>;
};


export type Subscription_RootFrameworks_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProfiles_Spoken_LanguagesArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootProfiles_Spoken_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Spoken_Languages_Order_By>>;
  where?: Maybe<Profiles_Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootProfiles_Spoken_Languages_By_PkArgs = {
  language: Spoken_Languages_Enum;
  profile_id: Scalars['uuid'];
};


export type Subscription_RootProfiles_TypesArgs = {
  distinct_on?: Maybe<Array<Profiles_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Types_Order_By>>;
  where?: Maybe<Profiles_Types_Bool_Exp>;
};


export type Subscription_RootProfiles_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Types_Order_By>>;
  where?: Maybe<Profiles_Types_Bool_Exp>;
};


export type Subscription_RootProfiles_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProgramming_LanguagesArgs = {
  distinct_on?: Maybe<Array<Programming_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Languages_Order_By>>;
  where?: Maybe<Programming_Languages_Bool_Exp>;
};


export type Subscription_RootProgramming_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Programming_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Programming_Languages_Order_By>>;
  where?: Maybe<Programming_Languages_Bool_Exp>;
};


export type Subscription_RootProgramming_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSpoken_LanguagesArgs = {
  distinct_on?: Maybe<Array<Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Spoken_Languages_Order_By>>;
  where?: Maybe<Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootSpoken_Languages_AggregateArgs = {
  distinct_on?: Maybe<Array<Spoken_Languages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Spoken_Languages_Order_By>>;
  where?: Maybe<Spoken_Languages_Bool_Exp>;
};


export type Subscription_RootSpoken_Languages_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWork_Location_TypesArgs = {
  distinct_on?: Maybe<Array<Work_Location_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Location_Types_Order_By>>;
  where?: Maybe<Work_Location_Types_Bool_Exp>;
};


export type Subscription_RootWork_Location_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Location_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Location_Types_Order_By>>;
  where?: Maybe<Work_Location_Types_Bool_Exp>;
};


export type Subscription_RootWork_Location_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootWork_Status_TypesArgs = {
  distinct_on?: Maybe<Array<Work_Status_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Status_Types_Order_By>>;
  where?: Maybe<Work_Status_Types_Bool_Exp>;
};


export type Subscription_RootWork_Status_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Status_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Status_Types_Order_By>>;
  where?: Maybe<Work_Status_Types_Bool_Exp>;
};


export type Subscription_RootWork_Status_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootWork_Vacation_DurationsArgs = {
  distinct_on?: Maybe<Array<Work_Vacation_Durations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Vacation_Durations_Order_By>>;
  where?: Maybe<Work_Vacation_Durations_Bool_Exp>;
};


export type Subscription_RootWork_Vacation_Durations_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Vacation_Durations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Vacation_Durations_Order_By>>;
  where?: Maybe<Work_Vacation_Durations_Bool_Exp>;
};


export type Subscription_RootWork_Vacation_Durations_By_PkArgs = {
  value: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Auth_Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  profile?: Maybe<Profiles>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  account?: Maybe<Auth_Accounts_Bool_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  profile?: Maybe<Profiles_Bool_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: Maybe<Auth_Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  profile?: Maybe<Profiles_Obj_Rel_Insert_Input>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: Maybe<Auth_Accounts_Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  profile?: Maybe<Profiles_Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "work_location_types" */
export type Work_Location_Types = {
  __typename?: 'work_location_types';
  order?: Maybe<Scalars['String']>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "work_location_types" */
export type Work_Location_TypesProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "work_location_types" */
export type Work_Location_TypesProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "work_location_types" */
export type Work_Location_Types_Aggregate = {
  __typename?: 'work_location_types_aggregate';
  aggregate?: Maybe<Work_Location_Types_Aggregate_Fields>;
  nodes: Array<Work_Location_Types>;
};

/** aggregate fields of "work_location_types" */
export type Work_Location_Types_Aggregate_Fields = {
  __typename?: 'work_location_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Location_Types_Max_Fields>;
  min?: Maybe<Work_Location_Types_Min_Fields>;
};


/** aggregate fields of "work_location_types" */
export type Work_Location_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Location_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "work_location_types". All fields are combined with a logical 'AND'. */
export type Work_Location_Types_Bool_Exp = {
  _and?: Maybe<Array<Work_Location_Types_Bool_Exp>>;
  _not?: Maybe<Work_Location_Types_Bool_Exp>;
  _or?: Maybe<Array<Work_Location_Types_Bool_Exp>>;
  order?: Maybe<String_Comparison_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_location_types" */
export enum Work_Location_Types_Constraint {
  /** unique or primary key constraint */
  WorkLocationTypesOrderKey = 'work_location_types_order_key',
  /** unique or primary key constraint */
  WorkLocationTypesPkey = 'work_location_types_pkey'
}

export enum Work_Location_Types_Enum {
  AlwaysOnSite = 'ALWAYS_ON_SITE',
  AlwaysRemote = 'ALWAYS_REMOTE',
  SomeDaysOnSite = 'SOME_DAYS_ON_SITE',
  SomeDaysRemote = 'SOME_DAYS_REMOTE'
}

/** Boolean expression to compare columns of type "work_location_types_enum". All fields are combined with logical 'AND'. */
export type Work_Location_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Work_Location_Types_Enum>;
  _in?: Maybe<Array<Work_Location_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Work_Location_Types_Enum>;
  _nin?: Maybe<Array<Work_Location_Types_Enum>>;
};

/** input type for inserting data into table "work_location_types" */
export type Work_Location_Types_Insert_Input = {
  order?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Work_Location_Types_Max_Fields = {
  __typename?: 'work_location_types_max_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Work_Location_Types_Min_Fields = {
  __typename?: 'work_location_types_min_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "work_location_types" */
export type Work_Location_Types_Mutation_Response = {
  __typename?: 'work_location_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Location_Types>;
};

/** input type for inserting object relation for remote table "work_location_types" */
export type Work_Location_Types_Obj_Rel_Insert_Input = {
  data: Work_Location_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Location_Types_On_Conflict>;
};

/** on conflict condition type for table "work_location_types" */
export type Work_Location_Types_On_Conflict = {
  constraint: Work_Location_Types_Constraint;
  update_columns: Array<Work_Location_Types_Update_Column>;
  where?: Maybe<Work_Location_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "work_location_types". */
export type Work_Location_Types_Order_By = {
  order?: Maybe<Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: work_location_types */
export type Work_Location_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "work_location_types" */
export enum Work_Location_Types_Select_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "work_location_types" */
export type Work_Location_Types_Set_Input = {
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "work_location_types" */
export enum Work_Location_Types_Update_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "work_status_types" */
export type Work_Status_Types = {
  __typename?: 'work_status_types';
  order?: Maybe<Scalars['String']>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "work_status_types" */
export type Work_Status_TypesProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "work_status_types" */
export type Work_Status_TypesProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "work_status_types" */
export type Work_Status_Types_Aggregate = {
  __typename?: 'work_status_types_aggregate';
  aggregate?: Maybe<Work_Status_Types_Aggregate_Fields>;
  nodes: Array<Work_Status_Types>;
};

/** aggregate fields of "work_status_types" */
export type Work_Status_Types_Aggregate_Fields = {
  __typename?: 'work_status_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Status_Types_Max_Fields>;
  min?: Maybe<Work_Status_Types_Min_Fields>;
};


/** aggregate fields of "work_status_types" */
export type Work_Status_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Status_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "work_status_types". All fields are combined with a logical 'AND'. */
export type Work_Status_Types_Bool_Exp = {
  _and?: Maybe<Array<Work_Status_Types_Bool_Exp>>;
  _not?: Maybe<Work_Status_Types_Bool_Exp>;
  _or?: Maybe<Array<Work_Status_Types_Bool_Exp>>;
  order?: Maybe<String_Comparison_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_status_types" */
export enum Work_Status_Types_Constraint {
  /** unique or primary key constraint */
  WorkStatusTypesOrderKey = 'work_status_types_order_key',
  /** unique or primary key constraint */
  WorkStatusTypesPkey = 'work_status_types_pkey'
}

export enum Work_Status_Types_Enum {
  Contract = 'CONTRACT',
  FullTime = 'FULL_TIME',
  FullTimeOrContract = 'FULL_TIME_OR_CONTRACT'
}

/** Boolean expression to compare columns of type "work_status_types_enum". All fields are combined with logical 'AND'. */
export type Work_Status_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Work_Status_Types_Enum>;
  _in?: Maybe<Array<Work_Status_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Work_Status_Types_Enum>;
  _nin?: Maybe<Array<Work_Status_Types_Enum>>;
};

/** input type for inserting data into table "work_status_types" */
export type Work_Status_Types_Insert_Input = {
  order?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Work_Status_Types_Max_Fields = {
  __typename?: 'work_status_types_max_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Work_Status_Types_Min_Fields = {
  __typename?: 'work_status_types_min_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "work_status_types" */
export type Work_Status_Types_Mutation_Response = {
  __typename?: 'work_status_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Status_Types>;
};

/** input type for inserting object relation for remote table "work_status_types" */
export type Work_Status_Types_Obj_Rel_Insert_Input = {
  data: Work_Status_Types_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Status_Types_On_Conflict>;
};

/** on conflict condition type for table "work_status_types" */
export type Work_Status_Types_On_Conflict = {
  constraint: Work_Status_Types_Constraint;
  update_columns: Array<Work_Status_Types_Update_Column>;
  where?: Maybe<Work_Status_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "work_status_types". */
export type Work_Status_Types_Order_By = {
  order?: Maybe<Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: work_status_types */
export type Work_Status_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "work_status_types" */
export enum Work_Status_Types_Select_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "work_status_types" */
export type Work_Status_Types_Set_Input = {
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "work_status_types" */
export enum Work_Status_Types_Update_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "work_vacation_durations" */
export type Work_Vacation_Durations = {
  __typename?: 'work_vacation_durations';
  order?: Maybe<Scalars['String']>;
  /** An array relationship */
  profiles: Array<Profiles>;
  /** An aggregate relationship */
  profiles_aggregate: Profiles_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "work_vacation_durations" */
export type Work_Vacation_DurationsProfilesArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};


/** columns and relationships of "work_vacation_durations" */
export type Work_Vacation_DurationsProfiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Profiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profiles_Order_By>>;
  where?: Maybe<Profiles_Bool_Exp>;
};

/** aggregated selection of "work_vacation_durations" */
export type Work_Vacation_Durations_Aggregate = {
  __typename?: 'work_vacation_durations_aggregate';
  aggregate?: Maybe<Work_Vacation_Durations_Aggregate_Fields>;
  nodes: Array<Work_Vacation_Durations>;
};

/** aggregate fields of "work_vacation_durations" */
export type Work_Vacation_Durations_Aggregate_Fields = {
  __typename?: 'work_vacation_durations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Work_Vacation_Durations_Max_Fields>;
  min?: Maybe<Work_Vacation_Durations_Min_Fields>;
};


/** aggregate fields of "work_vacation_durations" */
export type Work_Vacation_Durations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Vacation_Durations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "work_vacation_durations". All fields are combined with a logical 'AND'. */
export type Work_Vacation_Durations_Bool_Exp = {
  _and?: Maybe<Array<Work_Vacation_Durations_Bool_Exp>>;
  _not?: Maybe<Work_Vacation_Durations_Bool_Exp>;
  _or?: Maybe<Array<Work_Vacation_Durations_Bool_Exp>>;
  order?: Maybe<String_Comparison_Exp>;
  profiles?: Maybe<Profiles_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_vacation_durations" */
export enum Work_Vacation_Durations_Constraint {
  /** unique or primary key constraint */
  WorkVacationDurationsOrderKey = 'work_vacation_durations_order_key',
  /** unique or primary key constraint */
  WorkVacationDurationsPkey = 'work_vacation_durations_pkey'
}

export enum Work_Vacation_Durations_Enum {
  FiveWeeks = 'FIVE_WEEKS',
  FourWeeks = 'FOUR_WEEKS',
  NoPreference = 'NO_PREFERENCE',
  OneWeek = 'ONE_WEEK',
  ThreeWeeks = 'THREE_WEEKS',
  TwoWeeks = 'TWO_WEEKS',
  Unlimited = 'UNLIMITED'
}

/** Boolean expression to compare columns of type "work_vacation_durations_enum". All fields are combined with logical 'AND'. */
export type Work_Vacation_Durations_Enum_Comparison_Exp = {
  _eq?: Maybe<Work_Vacation_Durations_Enum>;
  _in?: Maybe<Array<Work_Vacation_Durations_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Work_Vacation_Durations_Enum>;
  _nin?: Maybe<Array<Work_Vacation_Durations_Enum>>;
};

/** input type for inserting data into table "work_vacation_durations" */
export type Work_Vacation_Durations_Insert_Input = {
  order?: Maybe<Scalars['String']>;
  profiles?: Maybe<Profiles_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Work_Vacation_Durations_Max_Fields = {
  __typename?: 'work_vacation_durations_max_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Work_Vacation_Durations_Min_Fields = {
  __typename?: 'work_vacation_durations_min_fields';
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "work_vacation_durations" */
export type Work_Vacation_Durations_Mutation_Response = {
  __typename?: 'work_vacation_durations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Work_Vacation_Durations>;
};

/** input type for inserting object relation for remote table "work_vacation_durations" */
export type Work_Vacation_Durations_Obj_Rel_Insert_Input = {
  data: Work_Vacation_Durations_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Work_Vacation_Durations_On_Conflict>;
};

/** on conflict condition type for table "work_vacation_durations" */
export type Work_Vacation_Durations_On_Conflict = {
  constraint: Work_Vacation_Durations_Constraint;
  update_columns: Array<Work_Vacation_Durations_Update_Column>;
  where?: Maybe<Work_Vacation_Durations_Bool_Exp>;
};

/** Ordering options when selecting data from "work_vacation_durations". */
export type Work_Vacation_Durations_Order_By = {
  order?: Maybe<Order_By>;
  profiles_aggregate?: Maybe<Profiles_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: work_vacation_durations */
export type Work_Vacation_Durations_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "work_vacation_durations" */
export enum Work_Vacation_Durations_Select_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "work_vacation_durations" */
export type Work_Vacation_Durations_Set_Input = {
  order?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "work_vacation_durations" */
export enum Work_Vacation_Durations_Update_Column {
  /** column name */
  Order = 'order',
  /** column name */
  Value = 'value'
}

export type CreateProfileAndAssignRoleMutationVariables = Exact<{
  profileInsertInput: Profiles_Insert_Input;
  authAccountRolesInput: Auth_Account_Roles_Insert_Input;
}>;


export type CreateProfileAndAssignRoleMutation = (
  { __typename?: 'mutation_root' }
  & { profile?: Maybe<(
    { __typename?: 'profiles' }
    & Pick<Profiles, 'id'>
  )>, insert_auth_account_roles_one?: Maybe<(
    { __typename?: 'auth_account_roles' }
    & Pick<Auth_Account_Roles, 'id'>
  )> }
);

export type FocusAreasByProfileTypeQueryVariables = Exact<{
  profileType: Profiles_Types_Enum;
}>;


export type FocusAreasByProfileTypeQuery = (
  { __typename?: 'query_root' }
  & { focusAreas: Array<(
    { __typename?: 'focus_areas' }
    & Pick<Focus_Areas, 'value'>
  )> }
);

export type ProfilesTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfilesTypesQuery = (
  { __typename?: 'query_root' }
  & { profileTypes: Array<(
    { __typename?: 'profiles_types' }
    & Pick<Profiles_Types, 'value'>
  )> }
);

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = (
  { __typename?: 'query_root' }
  & { roles: Array<(
    { __typename?: 'auth_roles' }
    & Pick<Auth_Roles, 'role'>
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { user?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & { displayName: Users['display_name'], avatarUrl: Users['avatar_url'] }
    & { account?: Maybe<(
      { __typename?: 'auth_accounts' }
      & Pick<Auth_Accounts, 'id' | 'email'>
    )> }
  )> }
);

export type WorkBasisQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkBasisQuery = (
  { __typename?: 'query_root' }
  & { vacations: Array<(
    { __typename?: 'work_vacation_durations' }
    & Pick<Work_Vacation_Durations, 'value'>
  )>, workLocation: Array<(
    { __typename?: 'work_location_types' }
    & Pick<Work_Location_Types, 'value'>
  )>, workStatus: Array<(
    { __typename?: 'work_status_types' }
    & Pick<Work_Status_Types, 'value'>
  )> }
);


export const CreateProfileAndAssignRoleDocument = gql`
    mutation CreateProfileAndAssignRole($profileInsertInput: profiles_insert_input!, $authAccountRolesInput: auth_account_roles_insert_input!) {
  profile: insert_profiles_one(object: $profileInsertInput) {
    id
  }
  insert_auth_account_roles_one(object: $authAccountRolesInput) {
    id
  }
}
    `;
export type CreateProfileAndAssignRoleMutationFn = Apollo.MutationFunction<CreateProfileAndAssignRoleMutation, CreateProfileAndAssignRoleMutationVariables>;

/**
 * __useCreateProfileAndAssignRoleMutation__
 *
 * To run a mutation, you first call `useCreateProfileAndAssignRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileAndAssignRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileAndAssignRoleMutation, { data, loading, error }] = useCreateProfileAndAssignRoleMutation({
 *   variables: {
 *      profileInsertInput: // value for 'profileInsertInput'
 *      authAccountRolesInput: // value for 'authAccountRolesInput'
 *   },
 * });
 */
export function useCreateProfileAndAssignRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileAndAssignRoleMutation, CreateProfileAndAssignRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileAndAssignRoleMutation, CreateProfileAndAssignRoleMutationVariables>(CreateProfileAndAssignRoleDocument, options);
      }
export type CreateProfileAndAssignRoleMutationHookResult = ReturnType<typeof useCreateProfileAndAssignRoleMutation>;
export type CreateProfileAndAssignRoleMutationResult = Apollo.MutationResult<CreateProfileAndAssignRoleMutation>;
export type CreateProfileAndAssignRoleMutationOptions = Apollo.BaseMutationOptions<CreateProfileAndAssignRoleMutation, CreateProfileAndAssignRoleMutationVariables>;
export const FocusAreasByProfileTypeDocument = gql`
    query FocusAreasByProfileType($profileType: profiles_types_enum!) {
  focusAreas: focus_areas(
    where: {profile_type: {_eq: $profileType}}
    order_by: {value: asc}
  ) {
    value
  }
}
    `;

/**
 * __useFocusAreasByProfileTypeQuery__
 *
 * To run a query within a React component, call `useFocusAreasByProfileTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFocusAreasByProfileTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFocusAreasByProfileTypeQuery({
 *   variables: {
 *      profileType: // value for 'profileType'
 *   },
 * });
 */
export function useFocusAreasByProfileTypeQuery(baseOptions: Apollo.QueryHookOptions<FocusAreasByProfileTypeQuery, FocusAreasByProfileTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FocusAreasByProfileTypeQuery, FocusAreasByProfileTypeQueryVariables>(FocusAreasByProfileTypeDocument, options);
      }
export function useFocusAreasByProfileTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FocusAreasByProfileTypeQuery, FocusAreasByProfileTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FocusAreasByProfileTypeQuery, FocusAreasByProfileTypeQueryVariables>(FocusAreasByProfileTypeDocument, options);
        }
export type FocusAreasByProfileTypeQueryHookResult = ReturnType<typeof useFocusAreasByProfileTypeQuery>;
export type FocusAreasByProfileTypeLazyQueryHookResult = ReturnType<typeof useFocusAreasByProfileTypeLazyQuery>;
export type FocusAreasByProfileTypeQueryResult = Apollo.QueryResult<FocusAreasByProfileTypeQuery, FocusAreasByProfileTypeQueryVariables>;
export const ProfilesTypesDocument = gql`
    query ProfilesTypes {
  profileTypes: profiles_types {
    value
  }
}
    `;

/**
 * __useProfilesTypesQuery__
 *
 * To run a query within a React component, call `useProfilesTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfilesTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfilesTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfilesTypesQuery(baseOptions?: Apollo.QueryHookOptions<ProfilesTypesQuery, ProfilesTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfilesTypesQuery, ProfilesTypesQueryVariables>(ProfilesTypesDocument, options);
      }
export function useProfilesTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfilesTypesQuery, ProfilesTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfilesTypesQuery, ProfilesTypesQueryVariables>(ProfilesTypesDocument, options);
        }
export type ProfilesTypesQueryHookResult = ReturnType<typeof useProfilesTypesQuery>;
export type ProfilesTypesLazyQueryHookResult = ReturnType<typeof useProfilesTypesLazyQuery>;
export type ProfilesTypesQueryResult = Apollo.QueryResult<ProfilesTypesQuery, ProfilesTypesQueryVariables>;
export const RolesDocument = gql`
    query Roles {
  roles: auth_roles {
    role
  }
}
    `;

/**
 * __useRolesQuery__
 *
 * To run a query within a React component, call `useRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRolesQuery(baseOptions?: Apollo.QueryHookOptions<RolesQuery, RolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
      }
export function useRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RolesQuery, RolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RolesQuery, RolesQueryVariables>(RolesDocument, options);
        }
export type RolesQueryHookResult = ReturnType<typeof useRolesQuery>;
export type RolesLazyQueryHookResult = ReturnType<typeof useRolesLazyQuery>;
export type RolesQueryResult = Apollo.QueryResult<RolesQuery, RolesQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: uuid!) {
  user: users_by_pk(id: $id) {
    id
    displayName: display_name
    avatarUrl: avatar_url
    account {
      id
      email
    }
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const WorkBasisDocument = gql`
    query WorkBasis {
  vacations: work_vacation_durations(order_by: {order: asc}) {
    value
  }
  workLocation: work_location_types(order_by: {order: asc}) {
    value
  }
  workStatus: work_status_types(order_by: {order: asc}) {
    value
  }
}
    `;

/**
 * __useWorkBasisQuery__
 *
 * To run a query within a React component, call `useWorkBasisQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkBasisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkBasisQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkBasisQuery(baseOptions?: Apollo.QueryHookOptions<WorkBasisQuery, WorkBasisQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkBasisQuery, WorkBasisQueryVariables>(WorkBasisDocument, options);
      }
export function useWorkBasisLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkBasisQuery, WorkBasisQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkBasisQuery, WorkBasisQueryVariables>(WorkBasisDocument, options);
        }
export type WorkBasisQueryHookResult = ReturnType<typeof useWorkBasisQuery>;
export type WorkBasisLazyQueryHookResult = ReturnType<typeof useWorkBasisLazyQuery>;
export type WorkBasisQueryResult = Apollo.QueryResult<WorkBasisQuery, WorkBasisQueryVariables>;