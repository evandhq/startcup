import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import table from './reducers/table';

export default combineReducers({
  table,
  routing: routerReducer
});
