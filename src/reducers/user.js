/*
  user.js: A reducer that keeps track of user information
  this includes the user's name and potentially any authentication information
  this reducer should ONLY include user information returned from the API
*/

// define the initial state of the reducer

/*
sample existing user:
username/email: test
password: test
*/

/*
"history": [
  {
    "desiredMood": "happy",
    "originalMood": "sad",
    "date": "2016-11-16T17:31:29.674Z",
    "_id": "582c97f15809476c914863d1"
  },
  {
    "desiredMood": "happy",
    "originalMood": "mad",
    "date": "2016-11-16T18:31:29.674Z",
    "_id": "582c97f15809476c914863d1"
  }
]
*/

const initialState = {
  email: '',
  name: '',
  authToken: '',
  limit: 0,
  history: []
};

// action handler to change/set the name of the user
const submitName = (state, action) => {
  return Object.assign({}, state, {
    name: action.name
  });
};

// action handler to update the username and authToken of the current user
const loadUser = (state, action) => {
  return Object.assign({}, state, {
    email: action.email,
    name: action.nickName,
    authToken: action.token,
    limit: action.resultLimit
  });
};


const updateHistory = (state, action) => {
  return Object.assign({}, state, {
    history: action.history
  });
};

// action handler to log out the current user

// setting up the reducer
// here we have a switch statement to direct the right type of action
// to the right handler
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_NAME':
      return submitName(state, action);

    case 'LOAD_USER':
      return loadUser(state, action);

    case 'UPDATE_HISTORY':
      return updateHistory(state, action);

    default:
      return state;
  };
};

export default user;
