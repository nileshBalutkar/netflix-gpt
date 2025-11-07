import { SeedDataData, ListPublicMoviesData, GetUserListsData, GetUserListsVariables, CreateListData, CreateListVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useSeedData(options?: useDataConnectMutationOptions<SeedDataData, FirebaseError, void>): UseDataConnectMutationResult<SeedDataData, undefined>;
export function useSeedData(dc: DataConnect, options?: useDataConnectMutationOptions<SeedDataData, FirebaseError, void>): UseDataConnectMutationResult<SeedDataData, undefined>;

export function useListPublicMovies(options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;
export function useListPublicMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicMoviesData>): UseDataConnectQueryResult<ListPublicMoviesData, undefined>;

export function useGetUserLists(vars: GetUserListsVariables, options?: useDataConnectQueryOptions<GetUserListsData>): UseDataConnectQueryResult<GetUserListsData, GetUserListsVariables>;
export function useGetUserLists(dc: DataConnect, vars: GetUserListsVariables, options?: useDataConnectQueryOptions<GetUserListsData>): UseDataConnectQueryResult<GetUserListsData, GetUserListsVariables>;

export function useCreateList(options?: useDataConnectMutationOptions<CreateListData, FirebaseError, CreateListVariables>): UseDataConnectMutationResult<CreateListData, CreateListVariables>;
export function useCreateList(dc: DataConnect, options?: useDataConnectMutationOptions<CreateListData, FirebaseError, CreateListVariables>): UseDataConnectMutationResult<CreateListData, CreateListVariables>;
