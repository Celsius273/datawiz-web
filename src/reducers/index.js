// the ONE store that combines all reducers
// this is then passed to the Provider wrapper for the top level component
// and allows lower level components to connect to the store and read its state

import { combineReducers } from 'redux';
import user from './user';
import context from './context';
import query from './query';

const index = combineReducers({
  user, context, query
});

export default index;
