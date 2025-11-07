# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPublicMovies*](#listpublicmovies)
  - [*GetUserLists*](#getuserlists)
- [**Mutations**](#mutations)
  - [*SeedData*](#seeddata)
  - [*CreateList*](#createlist)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPublicMovies
You can execute the `ListPublicMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicMovies(): QueryPromise<ListPublicMoviesData, undefined>;

interface ListPublicMoviesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicMoviesData, undefined>;
}
export const listPublicMoviesRef: ListPublicMoviesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicMovies(dc: DataConnect): QueryPromise<ListPublicMoviesData, undefined>;

interface ListPublicMoviesRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicMoviesData, undefined>;
}
export const listPublicMoviesRef: ListPublicMoviesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicMoviesRef:
```typescript
const name = listPublicMoviesRef.operationName;
console.log(name);
```

### Variables
The `ListPublicMovies` query has no variables.
### Return Type
Recall that executing the `ListPublicMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicMoviesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListPublicMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
    genres?: string[] | null;
  } & Movie_Key)[];
}
```
### Using `ListPublicMovies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicMovies } from '@dataconnect/generated';


// Call the `listPublicMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicMovies(dataConnect);

console.log(data.movies);

// Or, you can use the `Promise` API.
listPublicMovies().then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `ListPublicMovies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicMoviesRef } from '@dataconnect/generated';


// Call the `listPublicMoviesRef()` function to get a reference to the query.
const ref = listPublicMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicMoviesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## GetUserLists
You can execute the `GetUserLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserLists(vars: GetUserListsVariables): QueryPromise<GetUserListsData, GetUserListsVariables>;

interface GetUserListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListsVariables): QueryRef<GetUserListsData, GetUserListsVariables>;
}
export const getUserListsRef: GetUserListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserLists(dc: DataConnect, vars: GetUserListsVariables): QueryPromise<GetUserListsData, GetUserListsVariables>;

interface GetUserListsRef {
  ...
  (dc: DataConnect, vars: GetUserListsVariables): QueryRef<GetUserListsData, GetUserListsVariables>;
}
export const getUserListsRef: GetUserListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserListsRef:
```typescript
const name = getUserListsRef.operationName;
console.log(name);
```

### Variables
The `GetUserLists` query requires an argument of type `GetUserListsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserListsVariables {
  userId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUserLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserLists, GetUserListsVariables } from '@dataconnect/generated';

// The `GetUserLists` query requires an argument of type `GetUserListsVariables`:
const getUserListsVars: GetUserListsVariables = {
  userId: ..., 
};

// Call the `getUserLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserLists(getUserListsVars);
// Variables can be defined inline as well.
const { data } = await getUserLists({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserLists(dataConnect, getUserListsVars);

console.log(data.lists);

// Or, you can use the `Promise` API.
getUserLists(getUserListsVars).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

### Using `GetUserLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserListsRef, GetUserListsVariables } from '@dataconnect/generated';

// The `GetUserLists` query requires an argument of type `GetUserListsVariables`:
const getUserListsVars: GetUserListsVariables = {
  userId: ..., 
};

// Call the `getUserListsRef()` function to get a reference to the query.
const ref = getUserListsRef(getUserListsVars);
// Variables can be defined inline as well.
const ref = getUserListsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserListsRef(dataConnect, getUserListsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.lists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.lists);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## SeedData
You can execute the `SeedData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
seedData(): MutationPromise<SeedDataData, undefined>;

interface SeedDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<SeedDataData, undefined>;
}
export const seedDataRef: SeedDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
seedData(dc: DataConnect): MutationPromise<SeedDataData, undefined>;

interface SeedDataRef {
  ...
  (dc: DataConnect): MutationRef<SeedDataData, undefined>;
}
export const seedDataRef: SeedDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the seedDataRef:
```typescript
const name = seedDataRef.operationName;
console.log(name);
```

### Variables
The `SeedData` mutation has no variables.
### Return Type
Recall that executing the `SeedData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `SeedDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface SeedDataData {
  user_insertMany: User_Key[];
  movie_insertMany: Movie_Key[];
  watch_insertMany: Watch_Key[];
  review_insertMany: Review_Key[];
}
```
### Using `SeedData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, seedData } from '@dataconnect/generated';


// Call the `seedData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await seedData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await seedData(dataConnect);

console.log(data.user_insertMany);
console.log(data.movie_insertMany);
console.log(data.watch_insertMany);
console.log(data.review_insertMany);

// Or, you can use the `Promise` API.
seedData().then((response) => {
  const data = response.data;
  console.log(data.user_insertMany);
  console.log(data.movie_insertMany);
  console.log(data.watch_insertMany);
  console.log(data.review_insertMany);
});
```

### Using `SeedData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, seedDataRef } from '@dataconnect/generated';


// Call the `seedDataRef()` function to get a reference to the mutation.
const ref = seedDataRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = seedDataRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insertMany);
console.log(data.movie_insertMany);
console.log(data.watch_insertMany);
console.log(data.review_insertMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insertMany);
  console.log(data.movie_insertMany);
  console.log(data.watch_insertMany);
  console.log(data.review_insertMany);
});
```

## CreateList
You can execute the `CreateList` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createList(vars: CreateListVariables): MutationPromise<CreateListData, CreateListVariables>;

interface CreateListRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateListVariables): MutationRef<CreateListData, CreateListVariables>;
}
export const createListRef: CreateListRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createList(dc: DataConnect, vars: CreateListVariables): MutationPromise<CreateListData, CreateListVariables>;

interface CreateListRef {
  ...
  (dc: DataConnect, vars: CreateListVariables): MutationRef<CreateListData, CreateListVariables>;
}
export const createListRef: CreateListRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createListRef:
```typescript
const name = createListRef.operationName;
console.log(name);
```

### Variables
The `CreateList` mutation requires an argument of type `CreateListVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateListVariables {
  name: string;
  description: string;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreateList` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateListData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateListData {
  list_insert: List_Key;
}
```
### Using `CreateList`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createList, CreateListVariables } from '@dataconnect/generated';

// The `CreateList` mutation requires an argument of type `CreateListVariables`:
const createListVars: CreateListVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createList()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createList(createListVars);
// Variables can be defined inline as well.
const { data } = await createList({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createList(dataConnect, createListVars);

console.log(data.list_insert);

// Or, you can use the `Promise` API.
createList(createListVars).then((response) => {
  const data = response.data;
  console.log(data.list_insert);
});
```

### Using `CreateList`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createListRef, CreateListVariables } from '@dataconnect/generated';

// The `CreateList` mutation requires an argument of type `CreateListVariables`:
const createListVars: CreateListVariables = {
  name: ..., 
  description: ..., 
  isPublic: ..., 
};

// Call the `createListRef()` function to get a reference to the mutation.
const ref = createListRef(createListVars);
// Variables can be defined inline as well.
const ref = createListRef({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createListRef(dataConnect, createListVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.list_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.list_insert);
});
```

