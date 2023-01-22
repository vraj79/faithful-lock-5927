import { ADMIN_GET_ALL_USER } from "./AdminShowUser.type";

const initialValue = {
  adminAlluser: [],
  page: 1,
};
export const adminShowAllUserReducer = (
  state = initialValue,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_GET_ALL_USER: {
      return {
        ...state,
        adminAlluser: payload.user,
      };
    }

    default:
      return state;
  }
};
