import { Dispatch } from "redux";
import { registration } from "../../http/userAPI";
import {
  RegistrationAction,
  RegistrationActionTypes,
} from "../../types/registrationTypes";

export const fetchRegistration = (
  firstNameRegistration: string,
  lastNameRegistration: string,
  loginRegistration: string,
  passwordRegistration: string
) => {
  return async (dispatch: Dispatch<RegistrationAction>) => {
    try {
      dispatch({ type: RegistrationActionTypes.FETCH_REGISTRATION });
      const response = await registration(
        firstNameRegistration,
        lastNameRegistration,
        loginRegistration,
        passwordRegistration
      );
      dispatch({
        type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS,
        payload: {
          firstName: firstNameRegistration,
          lastName: lastNameRegistration,
          login: loginRegistration,
          password: passwordRegistration,
          token: response,
        },
      });
    } catch (e) {
      dispatch({
        type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
