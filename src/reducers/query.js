// query.js
// a reducer to store the raw string query
// and the query response from the API

const initialState = {
  queryString: '',
  queryResult: []
};

const storeUserQuery = (state, action) => {
  return Object.assign({}, state, {
    queryString: action.query
  });
}


const storeQueryResult = (state, action) => {
  return Object.assign({}, state, {
    queryResult: action.result
  });
}

const query = (state = initialState, action) => {
  switch (action.type) {
    case 'EXECUTE_QUERY_BEGIN':
      return storeUserQuery(state, action);

    case 'EXECUTE_QUERY_COMPLETE':
      return storeQueryResult(state, action);

    default:
      return state;
  };
};

export default query;
