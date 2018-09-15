/**
 * Combined reducer
 */

import { combineReducers } from 'redux';
import displayEmployeeDetailsReducer from './displayEmployeeDetailsReducer';

export default combineReducers({
    displayEmployeeDetailsReducer,
});
