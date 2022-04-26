import axios from "axios";
import settings from "../configs/settings.json";
import { getToken } from "../utils/auth";

const api = axios.create({
  baseURL: settings.apiUrl,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.auth = token;
  }
  return config;
});

api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default api;
