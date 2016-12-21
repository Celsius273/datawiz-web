const initialState = {
  primary: '',
  secondary: '',
  uri: ''
};

// action handler to save connection details once it is open
const updateConnection = (state, action) => {
  const {primary, secondary, uri} = action;

  console.log('connection updated in store', action)

  return Object.assign({}, state, {
    primary,
    secondary,
    uri
  });
};


const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CONNECT_DB_SUCCESS':
      return updateConnection(state, action);

    default:
      return state;
  };
};

export default user;
