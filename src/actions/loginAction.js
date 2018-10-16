import loaderUtils from '../api/loaderUtils';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginAction = () => async (dispatch) => {
  try {
    const data = await loaderUtils.getLoginAuth();
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (e) {
    throw e;
  }
}
