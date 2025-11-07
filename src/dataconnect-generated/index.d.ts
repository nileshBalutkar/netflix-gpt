import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateListData {
  list_insert: List_Key;
}

export interface CreateListVariables {
  name: string;
  description: string;
  isPublic: boolean;
}

export interface GetUserListsData {
  lists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    isPublic: boolean;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & List_Key)[];
}

export interface GetUserListsVariables {
  userId: UUIDString;
}

export interface ListMovie_Key {
  listId: UUIDString;
  movieId: UUIDString;
  __typename?: 'ListMovie_Key';
}

export interface ListPublicMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    genres?: string[] | null;
  } & Movie_Key)[];
}

export interface List_Key {
  id: UUIDString;
  __typename?: 'List_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface SeedDataData {
  user_insertMany: User_Key[];
  movie_insertMany: Movie_Key[];
  watch_insertMany: Watch_Key[];
  review_insertMany: Review_Key[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface SeedDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<SeedDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<SeedDataData, undefined>;
  operationName: string;
}
export const seedDataRef: SeedDataRef;

export function seedData(): MutationPromise<SeedDataData, undefined>;
export function seedData(dc: DataConnect): MutationPromise<SeedDataData, undefined>;

interface ListPublicMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicMoviesData, undefined>;
  operationName: string;
}
export const listPublicMoviesRef: ListPublicMoviesRef;

export function listPublicMovies(): QueryPromise<ListPublicMoviesData, undefined>;
export function listPublicMovies(dc: DataConnect): QueryPromise<ListPublicMoviesData, undefined>;

interface GetUserListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListsVariables): QueryRef<GetUserListsData, GetUserListsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserListsVariables): QueryRef<GetUserListsData, GetUserListsVariables>;
  operationName: string;
}
export const getUserListsRef: GetUserListsRef;

export function getUserLists(vars: GetUserListsVariables): QueryPromise<GetUserListsData, GetUserListsVariables>;
export function getUserLists(dc: DataConnect, vars: GetUserListsVariables): QueryPromise<GetUserListsData, GetUserListsVariables>;

interface CreateListRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateListVariables): MutationRef<CreateListData, CreateListVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateListVariables): MutationRef<CreateListData, CreateListVariables>;
  operationName: string;
}
export const createListRef: CreateListRef;

export function createList(vars: CreateListVariables): MutationPromise<CreateListData, CreateListVariables>;
export function createList(dc: DataConnect, vars: CreateListVariables): MutationPromise<CreateListData, CreateListVariables>;

