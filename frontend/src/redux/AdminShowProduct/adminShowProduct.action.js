import axios from "axios";
import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_SHOW_PRODUCT,
} from "./adminShowProduct.type";

const mainUrl = "http://localhost:8080";
const token = localStorage.getItem("AdminToken");
const config = {
  headers: {
    admintoken: token,
  },
};
export const adminShowProducts = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/products`);
    dispatch({ type: ADMIN_SHOW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.massage);
  }
};

export const adminDeleteProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/delete${id}`, config);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
