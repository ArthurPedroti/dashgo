import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Department = {
  __typename?: 'Department';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type DepartmentUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type DepartmentEntity = {
  __typename?: 'DepartmentEntity';
  attributes?: Maybe<Department>;
  id?: Maybe<Scalars['ID']>;
};

export type DepartmentEntityResponse = {
  __typename?: 'DepartmentEntityResponse';
  data?: Maybe<DepartmentEntity>;
};

export type DepartmentEntityResponseCollection = {
  __typename?: 'DepartmentEntityResponseCollection';
  data: Array<DepartmentEntity>;
  meta: ResponseCollectionMeta;
};

export type DepartmentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DepartmentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DepartmentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DepartmentFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type DepartmentInput = {
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type Downtime = {
  __typename?: 'Downtime';
  createdAt?: Maybe<Scalars['DateTime']>;
  datetime_end: Scalars['DateTime'];
  datetime_start: Scalars['DateTime'];
  department?: Maybe<DepartmentEntityResponse>;
  obs: Scalars['String'];
  process?: Maybe<ProcessEntityResponse>;
  stop_type?: Maybe<StopTypeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
  workstation?: Maybe<WorkstationEntityResponse>;
};

export type DowntimeEntity = {
  __typename?: 'DowntimeEntity';
  attributes?: Maybe<Downtime>;
  id?: Maybe<Scalars['ID']>;
};

export type DowntimeEntityResponse = {
  __typename?: 'DowntimeEntityResponse';
  data?: Maybe<DowntimeEntity>;
};

export type DowntimeEntityResponseCollection = {
  __typename?: 'DowntimeEntityResponseCollection';
  data: Array<DowntimeEntity>;
  meta: ResponseCollectionMeta;
};

export type DowntimeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DowntimeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  datetime_end?: InputMaybe<DateTimeFilterInput>;
  datetime_start?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<DepartmentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<DowntimeFiltersInput>;
  obs?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<DowntimeFiltersInput>>>;
  process?: InputMaybe<ProcessFiltersInput>;
  stop_type?: InputMaybe<StopTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  workstation?: InputMaybe<WorkstationFiltersInput>;
};

export type DowntimeInput = {
  datetime_end?: InputMaybe<Scalars['DateTime']>;
  datetime_start?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['ID']>;
  obs?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['ID']>;
  stop_type?: InputMaybe<Scalars['ID']>;
  users_permissions_user?: InputMaybe<Scalars['ID']>;
  workstation?: InputMaybe<Scalars['ID']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = Department | Downtime | I18NLocale | PoTime | Process | ProductionOrder | StandartTime | StopType | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Workstation;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment?: Maybe<DepartmentEntityResponse>;
  createDowntime?: Maybe<DowntimeEntityResponse>;
  createPoTime?: Maybe<PoTimeEntityResponse>;
  createProcess?: Maybe<ProcessEntityResponse>;
  createProductionOrder?: Maybe<ProductionOrderEntityResponse>;
  createStandartTime?: Maybe<StandartTimeEntityResponse>;
  createStopType?: Maybe<StopTypeEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWorkstation?: Maybe<WorkstationEntityResponse>;
  deleteDepartment?: Maybe<DepartmentEntityResponse>;
  deleteDowntime?: Maybe<DowntimeEntityResponse>;
  deletePoTime?: Maybe<PoTimeEntityResponse>;
  deleteProcess?: Maybe<ProcessEntityResponse>;
  deleteProductionOrder?: Maybe<ProductionOrderEntityResponse>;
  deleteStandartTime?: Maybe<StandartTimeEntityResponse>;
  deleteStopType?: Maybe<StopTypeEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWorkstation?: Maybe<WorkstationEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateDepartment?: Maybe<DepartmentEntityResponse>;
  updateDowntime?: Maybe<DowntimeEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updatePoTime?: Maybe<PoTimeEntityResponse>;
  updateProcess?: Maybe<ProcessEntityResponse>;
  updateProductionOrder?: Maybe<ProductionOrderEntityResponse>;
  updateStandartTime?: Maybe<StandartTimeEntityResponse>;
  updateStopType?: Maybe<StopTypeEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWorkstation?: Maybe<WorkstationEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentInput;
};


export type MutationCreateDowntimeArgs = {
  data: DowntimeInput;
};


export type MutationCreatePoTimeArgs = {
  data: PoTimeInput;
};


export type MutationCreateProcessArgs = {
  data: ProcessInput;
};


export type MutationCreateProductionOrderArgs = {
  data: ProductionOrderInput;
};


export type MutationCreateStandartTimeArgs = {
  data: StandartTimeInput;
};


export type MutationCreateStopTypeArgs = {
  data: StopTypeInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkstationArgs = {
  data: WorkstationInput;
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDowntimeArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePoTimeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProcessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductionOrderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStandartTimeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStopTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkstationArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentInput;
  id: Scalars['ID'];
};


export type MutationUpdateDowntimeArgs = {
  data: DowntimeInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdatePoTimeArgs = {
  data: PoTimeInput;
  id: Scalars['ID'];
};


export type MutationUpdateProcessArgs = {
  data: ProcessInput;
  id: Scalars['ID'];
};


export type MutationUpdateProductionOrderArgs = {
  data: ProductionOrderInput;
  id: Scalars['ID'];
};


export type MutationUpdateStandartTimeArgs = {
  data: StandartTimeInput;
  id: Scalars['ID'];
};


export type MutationUpdateStopTypeArgs = {
  data: StopTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWorkstationArgs = {
  data: WorkstationInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PoTime = {
  __typename?: 'PoTime';
  createdAt?: Maybe<Scalars['DateTime']>;
  datetime_end?: Maybe<Scalars['DateTime']>;
  datetime_start?: Maybe<Scalars['DateTime']>;
  department?: Maybe<DepartmentEntityResponse>;
  process?: Maybe<ProcessEntityResponse>;
  production_order?: Maybe<ProductionOrderEntityResponse>;
  standart_time?: Maybe<StandartTimeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
  workstation?: Maybe<WorkstationEntityResponse>;
};

export type PoTimeEntity = {
  __typename?: 'PoTimeEntity';
  attributes?: Maybe<PoTime>;
  id?: Maybe<Scalars['ID']>;
};

export type PoTimeEntityResponse = {
  __typename?: 'PoTimeEntityResponse';
  data?: Maybe<PoTimeEntity>;
};

export type PoTimeEntityResponseCollection = {
  __typename?: 'PoTimeEntityResponseCollection';
  data: Array<PoTimeEntity>;
  meta: ResponseCollectionMeta;
};

export type PoTimeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PoTimeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  datetime_end?: InputMaybe<DateTimeFilterInput>;
  datetime_start?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<DepartmentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PoTimeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PoTimeFiltersInput>>>;
  process?: InputMaybe<ProcessFiltersInput>;
  production_order?: InputMaybe<ProductionOrderFiltersInput>;
  standart_time?: InputMaybe<StandartTimeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  workstation?: InputMaybe<WorkstationFiltersInput>;
};

export type PoTimeInput = {
  datetime_end?: InputMaybe<Scalars['DateTime']>;
  datetime_start?: InputMaybe<Scalars['DateTime']>;
  department?: InputMaybe<Scalars['ID']>;
  process?: InputMaybe<Scalars['ID']>;
  production_order?: InputMaybe<Scalars['ID']>;
  standart_time?: InputMaybe<Scalars['ID']>;
  users_permissions_user?: InputMaybe<Scalars['ID']>;
  workstation?: InputMaybe<Scalars['ID']>;
};

export type PoTimeRelationResponseCollection = {
  __typename?: 'PoTimeRelationResponseCollection';
  data: Array<PoTimeEntity>;
};

export type Process = {
  __typename?: 'Process';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProcessEntity = {
  __typename?: 'ProcessEntity';
  attributes?: Maybe<Process>;
  id?: Maybe<Scalars['ID']>;
};

export type ProcessEntityResponse = {
  __typename?: 'ProcessEntityResponse';
  data?: Maybe<ProcessEntity>;
};

export type ProcessEntityResponseCollection = {
  __typename?: 'ProcessEntityResponseCollection';
  data: Array<ProcessEntity>;
  meta: ResponseCollectionMeta;
};

export type ProcessFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProcessFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProcessFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProcessFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProcessInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ProcessRelationResponseCollection = {
  __typename?: 'ProcessRelationResponseCollection';
  data: Array<ProcessEntity>;
};

export type ProductionOrder = {
  __typename?: 'ProductionOrder';
  createdAt?: Maybe<Scalars['DateTime']>;
  obs?: Maybe<Scalars['String']>;
  part_number?: Maybe<Scalars['String']>;
  po_times?: Maybe<PoTimeRelationResponseCollection>;
  qty: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ProductionOrderPo_TimesArgs = {
  filters?: InputMaybe<PoTimeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ProductionOrderEntity = {
  __typename?: 'ProductionOrderEntity';
  attributes?: Maybe<ProductionOrder>;
  id?: Maybe<Scalars['ID']>;
};

export type ProductionOrderEntityResponse = {
  __typename?: 'ProductionOrderEntityResponse';
  data?: Maybe<ProductionOrderEntity>;
};

export type ProductionOrderEntityResponseCollection = {
  __typename?: 'ProductionOrderEntityResponseCollection';
  data: Array<ProductionOrderEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductionOrderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductionOrderFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductionOrderFiltersInput>;
  obs?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ProductionOrderFiltersInput>>>;
  part_number?: InputMaybe<StringFilterInput>;
  po_times?: InputMaybe<PoTimeFiltersInput>;
  qty?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductionOrderInput = {
  obs?: InputMaybe<Scalars['String']>;
  part_number?: InputMaybe<Scalars['String']>;
  po_times?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  qty?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  department?: Maybe<DepartmentEntityResponse>;
  departments?: Maybe<DepartmentEntityResponseCollection>;
  downtime?: Maybe<DowntimeEntityResponse>;
  downtimes?: Maybe<DowntimeEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  poTime?: Maybe<PoTimeEntityResponse>;
  poTimes?: Maybe<PoTimeEntityResponseCollection>;
  process?: Maybe<ProcessEntityResponse>;
  processes?: Maybe<ProcessEntityResponseCollection>;
  productionOrder?: Maybe<ProductionOrderEntityResponse>;
  productionOrders?: Maybe<ProductionOrderEntityResponseCollection>;
  standartTime?: Maybe<StandartTimeEntityResponse>;
  standartTimes?: Maybe<StandartTimeEntityResponseCollection>;
  stopType?: Maybe<StopTypeEntityResponse>;
  stopTypes?: Maybe<StopTypeEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  workstation?: Maybe<WorkstationEntityResponse>;
  workstations?: Maybe<WorkstationEntityResponseCollection>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentsArgs = {
  filters?: InputMaybe<DepartmentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDowntimeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDowntimesArgs = {
  filters?: InputMaybe<DowntimeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPoTimeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPoTimesArgs = {
  filters?: InputMaybe<PoTimeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProcessArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProcessesArgs = {
  filters?: InputMaybe<ProcessFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryProductionOrderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryProductionOrdersArgs = {
  filters?: InputMaybe<ProductionOrderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStandartTimeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStandartTimesArgs = {
  filters?: InputMaybe<StandartTimeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStopTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryStopTypesArgs = {
  filters?: InputMaybe<StopTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWorkstationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWorkstationsArgs = {
  filters?: InputMaybe<WorkstationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StandartTime = {
  __typename?: 'StandartTime';
  createdAt?: Maybe<Scalars['DateTime']>;
  part_number?: Maybe<Scalars['String']>;
  process?: Maybe<ProcessEntityResponse>;
  time_in_minutes: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StandartTimeEntity = {
  __typename?: 'StandartTimeEntity';
  attributes?: Maybe<StandartTime>;
  id?: Maybe<Scalars['ID']>;
};

export type StandartTimeEntityResponse = {
  __typename?: 'StandartTimeEntityResponse';
  data?: Maybe<StandartTimeEntity>;
};

export type StandartTimeEntityResponseCollection = {
  __typename?: 'StandartTimeEntityResponseCollection';
  data: Array<StandartTimeEntity>;
  meta: ResponseCollectionMeta;
};

export type StandartTimeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StandartTimeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<StandartTimeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StandartTimeFiltersInput>>>;
  part_number?: InputMaybe<StringFilterInput>;
  process?: InputMaybe<ProcessFiltersInput>;
  time_in_minutes?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StandartTimeInput = {
  part_number?: InputMaybe<Scalars['String']>;
  process?: InputMaybe<Scalars['ID']>;
  time_in_minutes?: InputMaybe<Scalars['Float']>;
};

export type StopType = {
  __typename?: 'StopType';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StopTypeEntity = {
  __typename?: 'StopTypeEntity';
  attributes?: Maybe<StopType>;
  id?: Maybe<Scalars['ID']>;
};

export type StopTypeEntityResponse = {
  __typename?: 'StopTypeEntityResponse';
  data?: Maybe<StopTypeEntity>;
};

export type StopTypeEntityResponseCollection = {
  __typename?: 'StopTypeEntityResponseCollection';
  data: Array<StopTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type StopTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StopTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StopTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StopTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StopTypeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  department?: Maybe<DepartmentEntityResponse>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<DepartmentFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  department?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Workstation = {
  __typename?: 'Workstation';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  processes?: Maybe<ProcessRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WorkstationProcessesArgs = {
  filters?: InputMaybe<ProcessFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WorkstationEntity = {
  __typename?: 'WorkstationEntity';
  attributes?: Maybe<Workstation>;
  id?: Maybe<Scalars['ID']>;
};

export type WorkstationEntityResponse = {
  __typename?: 'WorkstationEntityResponse';
  data?: Maybe<WorkstationEntity>;
};

export type WorkstationEntityResponseCollection = {
  __typename?: 'WorkstationEntityResponseCollection';
  data: Array<WorkstationEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkstationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkstationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WorkstationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkstationFiltersInput>>>;
  processes?: InputMaybe<ProcessFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WorkstationInput = {
  name?: InputMaybe<Scalars['String']>;
  processes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDepartmentsQuery = { __typename?: 'Query', departments?: { __typename?: 'DepartmentEntityResponseCollection', data: Array<{ __typename?: 'DepartmentEntity', id?: string | null, attributes?: { __typename?: 'Department', name: string } | null }> } | null };


export const GetDepartmentsDocument = gql`
    query GetDepartments {
  departments {
    data {
      id
      attributes {
        name
      }
    }
  }
}
    `;

/**
 * __useGetDepartmentsQuery__
 *
 * To run a query within a React component, call `useGetDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDepartmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, options);
      }
export function useGetDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, options);
        }
export type GetDepartmentsQueryHookResult = ReturnType<typeof useGetDepartmentsQuery>;
export type GetDepartmentsLazyQueryHookResult = ReturnType<typeof useGetDepartmentsLazyQuery>;
export type GetDepartmentsQueryResult = Apollo.QueryResult<GetDepartmentsQuery, GetDepartmentsQueryVariables>;