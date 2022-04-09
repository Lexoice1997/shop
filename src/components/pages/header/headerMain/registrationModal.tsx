import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Formik } from "formik";
import React, { FC, useRef, useState } from "react";
import * as yup from "yup";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ModalComponent from "../../../UI/modal/modal";
// @ts-ignore
import styles from "./headerMain.module.scss";

interface IRegistrationModal {
  registrationModalActive: boolean;
  setRegistrationModalActive: (registrationModalActive: boolean) => void;
}

const RegistrationModal: FC<IRegistrationModal> = ({
  registrationModalActive,
  setRegistrationModalActive,
}) => {
  const [showPassword, setShowPassword] = useState<any>(false);
  const passwordRef = useRef<any>(null);

  const { fetchRegistration } = useAction();
  const { user, error, loading } = useTypedSelector(
    (state) => state.registration
  );

  const showHidePassword = () => {
    if (showPassword) {
      passwordRef.current.setAttribute("type", "password");
      setShowPassword(false);
    } else {
      passwordRef.current.setAttribute("type", "text");
      setShowPassword(true);
    }
  };

  const handleIsRegistration = (
    firstName: string,
    lastName: string,
    log: string,
    pass: string
  ) => {
    fetchRegistration(firstName, lastName, log, pass);
    setRegistrationModalActive(false);
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Слишком короткий")
      .max(50, "Слишком длинный")
      .required("Обязательно"),
    lastName: yup
      .string()
      .min(2, "Слишком короткий")
      .max(50, "Слишком длинный")
      .required("Обязательно"),
    login: yup.string().email("Не валидный mail").required("Обязательно"),
    password: yup.string().required("Обязательно"),
  });

  console.log(user);

  return (
    <ModalComponent
      active={registrationModalActive}
      setActive={setRegistrationModalActive}
    >
      <div className={styles.authCard}>
        <h2>Регистрация</h2>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            login: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) =>
            handleIsRegistration(
              values.firstName,
              values.lastName,
              values.login,
              values.password
            )
          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputComponent}>
                <label htmlFor="firstName" className={styles.label}>
                  Имя
                </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </div>

                {touched.firstName && errors.firstName && (
                  <p className={styles.errors}>{errors.firstName}</p>
                )}

                <label htmlFor="lastName" className={styles.label}>
                  Фамилия
                </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </div>

                {touched.lastName && errors.lastName && (
                  <p className={styles.errors}>{errors.lastName}</p>
                )}

                <label htmlFor="login" className={styles.label}>
                  Логин
                </label>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login}
                  />
                </div>

                {touched.login && errors.login && (
                  <p className={styles.errors}>{errors.login}</p>
                )}

                <label htmlFor="password" className={styles.label}>
                  Пароль
                </label>
                <div className={styles.input}>
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <div className={styles.svg} onClick={showHidePassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </div>
                </div>

                {touched.password && errors.password && (
                  <p className={styles.errors}>{errors.password}</p>
                )}
                <div className={styles.buttons}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={!isValid && !dirty}
                  >
                    Зарегестрироватся
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ModalComponent>
  );
};

export default RegistrationModal;
