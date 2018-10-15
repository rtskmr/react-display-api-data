/**
 * Combined reducer
 */

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import displayEmployeeDetailsReducer from './displayEmployeeDetailsReducer';
export default combineReducers({
    loginReducer,
    displayEmployeeDetailsReducer
});
