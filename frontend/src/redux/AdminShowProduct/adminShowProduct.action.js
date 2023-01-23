import axios from "axios";
import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT,
  ADMIN_SHOW_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
} from "./adminShowProduct.type";

const mainUrl = "https://dailybackend.onrender.com";
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

// get all product
export const adminProduct = () => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/products/get/all`, config);
    dispatch({ type: ADMIN_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error.massage);
  }
};
// delete product
export const adminDeleteProduct = (id, page) => async (dispatch) => {
  try {
    let res = await axios.delete(`${mainUrl}/products/delete/${id}`, config);
    dispatch({ type: ADMIN_DELETE_PRODUCT, payload: res.data });
    dispatch(adminShowProducts(page));
  } catch (error) {
    console.log(error);
  }
};

// one product
export const adminShowOneProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${mainUrl}/products/get/getone/${id}`, config);
    dispatch({ type: ADMIN_UPDATE_PRODUCT, payload: res.data });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// update product
export const adminUpdateData = (id, data) => async (dispatch) => {
  try {
    let res = await axios.patch(
      `${mainUrl}/products/update/${id}`,
      data,
      config
    );
    dispatch({ type: ADMIN_UPDATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
