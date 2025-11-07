const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'netflix-gpt',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const seedDataRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'SeedData');
}
seedDataRef.operationName = 'SeedData';
exports.seedDataRef = seedDataRef;

exports.seedData = function seedData(dc) {
  return executeMutation(seedDataRef(dc));
};

const listPublicMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicMovies');
}
listPublicMoviesRef.operationName = 'ListPublicMovies';
exports.listPublicMoviesRef = listPublicMoviesRef;

exports.listPublicMovies = function listPublicMovies(dc) {
  return executeQuery(listPublicMoviesRef(dc));
};

const getUserListsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserLists', inputVars);
}
getUserListsRef.operationName = 'GetUserLists';
exports.getUserListsRef = getUserListsRef;

exports.getUserLists = function getUserLists(dcOrVars, vars) {
  return executeQuery(getUserListsRef(dcOrVars, vars));
};

const createListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateList', inputVars);
}
createListRef.operationName = 'CreateList';
exports.createListRef = createListRef;

exports.createList = function createList(dcOrVars, vars) {
  return executeMutation(createListRef(dcOrVars, vars));
};
