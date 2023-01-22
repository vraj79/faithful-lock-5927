import {
  Addoriginal,
  Querybag,
  Querywallet,
  Querywatch,
  SortHTL,
  SortLTH,
  SortRST,
} from "./actionType";

export const handleSortLTH = () => {
  return { type: SortLTH };
};
export const handleSortHTL = () => {
  return { type: SortHTL };
};
export const handleSortRST = () => {
  return { type: SortRST };
};
export const handleQuerybag = () => {
  return { type: Querybag };
};
export const handleQuerywallet = () => {
  return { type: Querywallet };
};
export const handleQuerywatch = () => {
  return { type: Querywatch };
};
export const handleAddoriginal = (payload) => {
  return { type: Addoriginal, payload };
};
