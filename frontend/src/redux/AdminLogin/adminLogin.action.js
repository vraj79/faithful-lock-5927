import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT,
  ISLoding,
} from "./adminLogin.type";
import axios from "axios";

const mainUrl = "https://dailybackend.onrender.com";

export const adminLogin = (cred) => async (dispatch) => {
  dispatch({ type: ISLoding });
  try {
    let res = await axios.post(`${mainUrl}/admin/login`, cred);
    dispatch({ type: ADMIN_LOGIN, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_ERROR });
  }
};
export const adminLogout = () => ({ type: ADMIN_LOGOUT });
