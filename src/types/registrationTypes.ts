export interface IUserRegistration {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  token: string;
}

export interface RegistrationState {
  user: IUserRegistration
  loading: boolean;
  error: null | string;
}

export enum RegistrationActionTypes {
  FETCH_REGISTRATION = "FETCH_REGISTRATION",
  FETCH_REGISTRATION_SUCCESS = "FETCH_REGISTRATION_SUCCESS",
  FETCH_REGISTRATION_ERROR = "FETCH_REGISTRATION_ERROR",
}

interface FetchRegistrationAction {
  type: RegistrationActionTypes.FETCH_REGISTRATION
}

interface FetchRegistrationSuccessAction {
  type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS;
  payload: IUserRegistration
}

interface FetchRegistrationErrorAction {
  type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR;
  payload: string
}

export type RegistrationAction = FetchRegistrationAction
                                | FetchRegistrationSuccessAction
                                | FetchRegistrationErrorAction;