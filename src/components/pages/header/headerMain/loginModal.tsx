import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Formik } from "formik";
import React, { FC, useRef, useState } from "react";
import * as yup from "yup";
import { useAction } from "../../../../hooks/loginAction";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { getUserInfo } from "../../../../http/userAPI";
import ModalComponent from "../../../UI/modal/modal";
// @ts-ignore
import styles from "./headerMain.module.scss";

interface ILoginModal {
  loginModalActive: boolean;
  setLoginModalActive: (loginModalActive: boolean) => void;
  onHandlerModal: () => void;
}

const LoginModal: FC<ILoginModal> = ({
  loginModalActive,
  setLoginModalActive,
  onHandlerModal,
}) => {
  const [showPassword, setShowPassword] = useState<any>(false);
  const passwordRef = useRef<any>(null);

  const { fetchLogin, setIsLogin } = useAction();
  const { user, error, loading, isLogin } = useTypedSelector(
    (state) => state.login
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

  const handleIsLogin = (log: string, pass: string) => {
    fetchLogin(log, pass);
    getUserInfo();
    setIsLogin(true);
    setLoginModalActive(false);
  };

  const validationSchema = yup.object().shape({
    login: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательно"),
  });

  return (
    <ModalComponent active={loginModalActive} setActive={setLoginModalActive}>
      <div className={styles.authCard}>
        <h2>Вход</h2>

        <Formik
          initialValues={{ login: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleIsLogin(values.login, values.password)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.inputComponent}>
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

                {errors.login && touched.login && errors.login}

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

                {errors.password && touched.password && errors.password}
                <div className={styles.buttons}>
                  <Button variant="contained" type="submit">
                    Войти
                  </Button>
                </div>
              </div>

              <div className={styles.buttons}>
                <button className={styles.regBtn} onClick={onHandlerModal}>
                  Регистрация
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </ModalComponent>
  );
};

export default LoginModal;
