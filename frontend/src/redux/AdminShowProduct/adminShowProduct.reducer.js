import { ADMIN_SHOW_PRODUCT } from "./adminShowProduct.type";

const initialValue = {
  adminProduct: [],
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
      };
    }
    default:
      return state;
  }
};
