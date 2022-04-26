import ls from "localstorage-slim";
import API from "../lib/axios";

ls.config.encrypt = true;

export const loggedIn = () => {
  const token = ls.get("@wg_usertoken");
  return token ? true : false;
};

export const personalInfo = async () => {
  const { data } = await API.get(`/wg/users/${ls.get("@wg_username")}`);
  return data.Personal ? true : false;
};

export const ACC_TOKEN = "@wg_usertoken";
export const getToken = () => ls.get(ACC_TOKEN);

export const login = (token) => {
  ls.set(ACC_TOKEN, token);
};

export const initWelcome = () => {
  const userWelcome = ls.get("@wg_welcome");
  return userWelcome ? true : false;
};

export const logout = () => {
  ls.remove(ACC_TOKEN);
};
