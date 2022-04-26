import ls from "localstorage-slim";
import { getToken } from "../utils/auth";

export const userconfig = {
  username: ls.get("@wg_username"),
  userid: ls.get("@wg_userid"),
  auth: { headers: { auth: getToken() } },
};
