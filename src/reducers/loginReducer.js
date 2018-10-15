import {LOGIN_SUCCESS}  from '../actions/loginAction';

const initialState = {
    loginDetails :[]
}
export default function loginReducer  (state = initialState, action) {
    debugger;
  switch (action.type) {
    case LOGIN_SUCCESS:
    debugger;
      return {...state, loginDetails:action.payload};
    default:
      return state;
  }
}
