// the ONE store that combines all reducers
// this is then passed to the Provider wrapper for the top level component
// and allows lower level components to connect to the store and read its state

import { combineReducers } from 'redux';
import user from './user';
import context from './context';
// import content from './content';
// import analyze from './analyze';

const index = combineReducers({
  // user, context, content, analyze
  user, context
});

export default index;
