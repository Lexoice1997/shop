export interface IUserLogin {
  firstName?: string;
  lastName?: string;
  login: string;
  password: string;
  token?: string;
}

export interface LoginState {
  user: IUserLogin;
  userInfo: any;
  loading: boolean;
  error: null | string;
  isLogin: boolean;
}

export enum LoginActionTypes {
  FETCH_LOGIN = "FETCH_LOGIN",
  FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS",
  FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR",
  SET_USER_LOGIN = "SET_USER_LOGIN",
  SET_USER_PASSWORD = "SET_USER_PASSWORD",
  SET_IS_LOGIN = "SET_IS_LOGIN",
  FETCH_USER_INFO = "FETCH_USER_INFO",
}

interface FetchLoginAction {
  type: LoginActionTypes.FETCH_LOGIN;
}

interface FetchLoginSuccessAction {
  type: LoginActionTypes.FETCH_LOGIN_SUCCESS;
}

interface FetchLoginErrorAction {
  type: LoginActionTypes.FETCH_LOGIN_ERROR;
  payload: string;
}

interface SetUserLogin {
  type: LoginActionTypes.SET_USER_LOGIN;
  payload: string;
}

interface SetPasswordLogin {
  type: LoginActionTypes.SET_USER_PASSWORD;
  payload: string;
}

interface SetIsLogin {
  type: LoginActionTypes.SET_IS_LOGIN;
  payload: boolean;
}

interface FetchUserInfo {
  type: LoginActionTypes.FETCH_USER_INFO;
  payload: any;
}

export type LoginAction =
  | FetchLoginAction
  | FetchLoginSuccessAction
  | FetchLoginErrorAction
  | SetUserLogin
  | SetPasswordLogin
  | SetIsLogin
  | FetchUserInfo;
