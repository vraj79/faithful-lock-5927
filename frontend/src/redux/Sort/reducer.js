import {
  Addoriginal,
  Querybag,
  Querywallet,
  Querywatch,
  SortHTL,
  SortLTH,
  SortRST,
} from "./actionType";
const initailState = { data1: [], orignal: [] };
export const sortReducer = (state = initailState, action) => {
  switch (action.type) {
    case SortHTL:
      return {
        ...state,
        data1: state.orignal.sort((a, b) => b.price - a.price),
      };
    case SortLTH:
      return {
        ...state,
        data1: state.orignal.sort((a, b) => a.price - b.price),
      };
    case SortRST:
      return { ...state, data1: state.orignal };
    case Querybag:
      return {
        ...state,
        data1: state.orignal.filter((elem) => elem.category === Querybag),
      };
    case Querywallet:
      return {
        ...state,
        data1: state.orignal.filter((elem) => elem.category === Querywallet),
      };
    case Querywatch:
      return {
        ...state,
        data1: state.orignal.filter((elem) => elem.category === Querywatch),
      };
    case Addoriginal:
      return { ...state, original: action.payload,data1:action.payload };
    default:
      return state;
  }
};
