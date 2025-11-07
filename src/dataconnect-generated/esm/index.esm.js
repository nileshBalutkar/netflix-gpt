import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'netflix-gpt',
  location: 'us-east4'
};

export const seedDataRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SeedData');
}
seedDataRef.operationName = 'SeedData';

export function seedData(dc) {
  return executeMutation(seedDataRef(dc));
}

export const listPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicMovies');
}
listPublicMoviesRef.operationName = 'ListPublicMovies';

export function listPublicMovies(dc) {
  return executeQuery(listPublicMoviesRef(dc));
}

export const getUserListsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserLists', inputVars);
}
getUserListsRef.operationName = 'GetUserLists';

export function getUserLists(dcOrVars, vars) {
  return executeQuery(getUserListsRef(dcOrVars, vars));
}

export const createListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateList', inputVars);
}
createListRef.operationName = 'CreateList';

export function createList(dcOrVars, vars) {
  return executeMutation(createListRef(dcOrVars, vars));
}

