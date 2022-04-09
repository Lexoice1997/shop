import { Dispatch } from "redux";
import { getUserInfo, login } from "../../http/userAPI";
import { LoginAction, LoginActionTypes } from "../../types/loginTypes";

export const fetchLogin = (loginAccount: string, passwordAccount: string) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      dispatch({ type: LoginActionTypes.FETCH_LOGIN });
      const response = await login(loginAccount, passwordAccount);
      dispatch({
        type: LoginActionTypes.FETCH_LOGIN_SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: LoginActionTypes.FETCH_LOGIN_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};

export const fetchUserInfo = () => {
  return async (dispatch: Dispatch<LoginAction>) => {
    try {
      const response = await getUserInfo();
      dispatch({ type: LoginActionTypes.FETCH_USER_INFO, payload: response});
    } catch (e) {
      dispatch({
        type: LoginActionTypes.FETCH_LOGIN_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};

export const setIsLogin = (log: boolean): LoginAction => {
  return { type: LoginActionTypes.SET_IS_LOGIN, payload: log };
};
