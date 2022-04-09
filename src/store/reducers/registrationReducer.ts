import {RegistrationAction, RegistrationActionTypes, RegistrationState} from "../../types/registrationTypes";

const initialState: RegistrationState = {
  user: {
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    token: ""
  },
  loading: false,
  error: null
}

export const registrationReducer = (state = initialState, action: RegistrationAction): RegistrationState => {
  switch (action.type) {
    case RegistrationActionTypes.FETCH_REGISTRATION:
      return {...state, loading: true}
    case RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS:
      return {...state, loading: false, user: action.payload}
    case RegistrationActionTypes.FETCH_REGISTRATION_ERROR:
      return {...state, loading: false, error: action.payload, user: {firstName: '', lastName: '', login: '', password: '', token: ''}}
    default:
      return state;
  }
}