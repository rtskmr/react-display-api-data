import {EMPLOYEE_DETAILS}  from '../actions/displayEmployeeDetailsAction';

const initialState = {
    displayEmployeeDetails :[]
}
export default function displayEmployeeDetailsReducer  (state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_DETAILS:
      return {...state, displayEmployeeDetails:action.payload};
    default:
      return state;
  }
}
