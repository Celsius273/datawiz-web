import AppState from '../constants/AppState';

/*
  context.js: A reducer that keeps track of the user's current settings/context in the application
  this reducer should ONLY be used for frontend state
*/

const initialState = {
  currentEmotion: '',
  intendedEmotion: '',
  appState: AppState.LOGIN
};

const connectToDBSuccess = (state) => {
  // in the future we can configure the default starting screen of the user when they log in
  return Object.assign({}, state, {
    appState: AppState.CONNECTED
  });
}


const changeAppState = (state, action) => {
  console.log('changed state to: ', action.newState);
  // return state;

  return Object.assign({}, state, {
    appState: action.newState
  });
}

const context = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT_DB_SUCCESS':
      return connectToDBSuccess(state);

    case 'CHANGE_APP_STATE':
      return changeAppState(state, action);

    default:
      return state;
  };
};

export default context;
