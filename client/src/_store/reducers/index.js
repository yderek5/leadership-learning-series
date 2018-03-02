import {combineReducers} from 'redux';
import customerReducer from './customer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';

export default combineReducers({
  customers: customerReducer,
  form: formReducer,
  auth: authReducer
});
