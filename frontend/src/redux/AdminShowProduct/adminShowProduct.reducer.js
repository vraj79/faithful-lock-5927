import {
  ADMIN_DELETE_PRODUCT,
  ADMIN_PRODUCT,
  ADMIN_SHOW_PRODUCT,
  ADMIN_SOWONE_PRODUCT,
  ADMIN_UPDATE_PRODUCT,
} from "./adminShowProduct.type";

const initialValue = {
  adminProduct: [],
  adminallProduct: [],
  oneProduct: [],
  productData: {},
  product: 0,
  deletemsg: null,
  updatemsg: null,
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
    case ADMIN_DELETE_PRODUCT: {
      return {
        ...state,
        deletemsg: payload.msg,
      };
    }
    case ADMIN_UPDATE_PRODUCT: {
      return {
        ...state,
        productData: payload.data,
        updatemsg: payload.msg,
      };
    }
    case ADMIN_SOWONE_PRODUCT: {
      return {
        ...state,
        oneProduct: payload.data,
      };
    }
    case ADMIN_PRODUCT: {
      return {
        ...state,
        adminallProduct: payload.product,
      };
    }
    default:
      return state;
  }
};
