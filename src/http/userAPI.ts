  import jwt_decode from "jwt-decode";
  import { $authHost, $host } from "./index";

  export const registration = async (
    firstName: string,
    lastName: string,
    login: string,
    password: string
  ): Promise<string> => {
    const { data } = await $host.post("users/register", {
      firstName,
      lastName,
      login,
      password,
    });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  };

  export const login = async (
    login: string,
    password: string
  ): Promise<string> => {
    const { data } = await $host.post("users/login", { login, password });
    localStorage.setItem("token", data.token);
    return jwt_decode(data.token);
  };

  export const getUserInfo = async (): Promise<any> => {
    const { data } = await $authHost.get("users/userInfo");
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  };
