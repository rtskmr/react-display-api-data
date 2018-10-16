import loaderUtils from '../api/loaderUtils';

export const EMPLOYEE_DETAILS = 'EMPLOYEE_DETAILS';
export const LIST_SEARCH = 'LIST_SEARCH';

export const displayEmployeeDetailsAction = () => async (dispatch) => {
  try {
    const data = await loaderUtils.loadPropertyCodes();
    dispatch({ type: EMPLOYEE_DETAILS, payload: data });
  } catch (e) {
    throw e;
  }
}

export const onSearchAction = (data) => async (dispatch) => {
  try {
    debugger
    dispatch({ type: LIST_SEARCH, payload: data });
  } catch (e) {
    throw e;
  }
}