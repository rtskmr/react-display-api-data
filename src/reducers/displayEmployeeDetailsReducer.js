import {EMPLOYEE_DETAILS,LIST_SEARCH}  from '../actions/displayEmployeeDetailsAction';

const initialState = {
    displayEmployeeDetails :[],
    filteredDisplayEmployeeDetails: []
}
export default function displayEmployeeDetailsReducer  (state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_DETAILS:
      return {...state, displayEmployeeDetails:action.payload, filteredDisplayEmployeeDetails: action.payload};
      case LIST_SEARCH:
      let data = [...state.displayEmployeeDetails];
      let filteredData = filterBySearch(data, 'employee_name', action.payload)
      
      return {...state, filteredDisplayEmployeeDetails:filteredData};
    default:
      return state;
  }
}

function filterBySearch(array, key, value) {
  const arrayResult = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][key].toLowerCase().includes(value.toLowerCase())) {
      arrayResult.push(array[i]);
    }
  }
  return arrayResult;
} 

