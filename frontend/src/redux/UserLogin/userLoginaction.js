import axios from "axios";
import {
  LOGOUT_USER_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./userLogin.type";
const Url = "https://dailybackend.onrender.com";

export const Userlogin = (creds) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    let res = await axios.post(`${Url}/user/login`, creds);
    if (res.data.msg === "Login Done") {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    } else {
      dispatch({ type: USER_LOGIN_ERROR });
    }
  } catch (err) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS });
}