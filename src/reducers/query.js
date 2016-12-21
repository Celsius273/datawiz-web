// query.js
// a reducer to store the raw string query
// and the query response from the API

const initialState = {
  appState: AppState.LOGIN
};

const connectToDBSuccess = (state) => {
  // in the future we can configure the default starting screen of the user when they log in
  return Object.assign({}, state, {
    appState: AppState.QUERY_EXEC
  });
}


const changeAppState = (state, action) => {
  console.log('changed state to: ', action.newState);
  // return state;

  return Object.assign({}, state, {
    appState: action.newState
  });
}

const query = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT_DB_SUCCESS':
      return connectToDBSuccess(state);

    case 'CHANGE_APP_STATE':
      return changeAppState(state, action);

    default:
      return state;
  };
};

export default query;
