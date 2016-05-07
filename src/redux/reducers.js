import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import table from './modules/table';

export default combineReducers({
  table,
  routing: routerReducer,
  form: formReducer
});
