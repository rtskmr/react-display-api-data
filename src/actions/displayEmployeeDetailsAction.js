import loaderUtils from '../api/loaderUtils';

export const EMPLOYEE_DETAILS = 'EMPLOYEE_DETAILS';

//Method 1
export const displayEmployeeDetailsAction = () => async (dispatch) => {
  try {
    debugger;
    const data = await loaderUtils.loadPropertyCodes();
    debugger
    dispatch({ type: EMPLOYEE_DETAILS, payload: data });
  } catch (e) {
    throw e;
  }
}
