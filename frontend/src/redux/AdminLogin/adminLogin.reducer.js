import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGOUT,
  ISLoding,
} from "./adminLogin.type";

const token = localStorage.getItem("AdminToken");
const data = JSON.parse(localStorage.getItem("AdminData")) || {};

const initialValue = {
  isAuth: !!token,
  token: token,
  data: data,
  error: false,
  isErrorMsg: null,
  isLoading: false,
};

export const adminReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN: {
      localStorage.setItem("AdminToken", payload.token);
      localStorage.setItem("AdminData", JSON.stringify(payload.admin));
      return {
        ...state,
        isAuth: true,
        token: payload,
        data: payload,
        error: false,
        isLoading: false,
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        isAuth: false,
        token: payload,
        isErrorMsg: payload.msg,
        data: payload,
        error: true,
        isLoading: false,
      };
    }
    case ISLoding: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADMIN_LOGOUT: {
      localStorage.removeItem("AdminToken");
      localStorage.removeItem("AdminData");
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
