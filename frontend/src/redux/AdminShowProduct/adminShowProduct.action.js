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
export const adminShowProducts = (page) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/products?page=${page}`);
    dispatch({ type: ADMIN_SHOW_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.massage);
  }
};

export const adminDeleteProduct = (id,page) => async (dispatch) => {
  try {
    await axios.delete(`${mainUrl}/products/delete/${id}`, config);
    dispatch({ type: ADMIN_DELETE_PRODUCT });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};
