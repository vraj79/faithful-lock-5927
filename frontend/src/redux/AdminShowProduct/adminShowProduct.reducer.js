import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_SHOW_PRODUCT,
} from "./adminShowProduct.type";

const initialValue = {
  adminProduct: [],
  product: 0,
};

export const adminShowProductReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_SHOW_PRODUCT: {
      return {
        ...state,
        adminProduct: payload.products,
        product: payload.totalProduct,
      };
    }
    // case ADMIN_DELETE_PRODUCT: {
    //   return {
    //     ...state,
    //     adminProduct: payload.product,
    //   };
    // }
    default:
      return state;
  }
};
