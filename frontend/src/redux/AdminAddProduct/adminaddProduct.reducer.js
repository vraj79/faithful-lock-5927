import { ADMIN_ADD_PRODUCT } from "./adminaddProduct.type";

const initialValue = {
  productData: {},
  msg: "",
};

export const adminAddProductReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_ADD_PRODUCT: {
      return {
        ...state,
        productData: payload.data,
        msg: payload.msg,
      };
    }
    default:
      return state;
  }
};
