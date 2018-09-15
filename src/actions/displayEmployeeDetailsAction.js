import loaderUtils from '../api/loaderUtils';

export const EMPLOYEE_DETAILS = 'EMPLOYEE_DETAILS';

export const displayEmployeeDetailsAction = () => async (dispatch) => {
  try {
    const data = await loaderUtils.loadPropertyCodes();
    dispatch({ type: EMPLOYEE_DETAILS, payload: data });
  } catch (e) {
    throw e;
  }
}
