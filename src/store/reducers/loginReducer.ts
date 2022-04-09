import {
  LoginAction,
  LoginActionTypes,
  LoginState,
} from "../../types/loginTypes";

const initialState: LoginState = {
  user: {
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  },
  userInfo: {},
  loading: false,
  isLogin: false,
  error: null,
};

export const loginReducer = (
  state = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case LoginActionTypes.FETCH_LOGIN:
      return { ...state, loading: true };
    case LoginActionTypes.FETCH_LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LoginActionTypes.FETCH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: { login: "", password: "" },
      };
    case LoginActionTypes.SET_USER_LOGIN:
      return {
        ...state,
        user: { login: action.payload, password: state.user.password },
      };
    case LoginActionTypes.SET_USER_PASSWORD:
      return {
        ...state,
        user: { password: action.payload, login: state.user.login },
      };
    case LoginActionTypes.SET_IS_LOGIN:
      return { ...state, isLogin: true };
    case LoginActionTypes.FETCH_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
