import { StoreData } from "./action.type";
const initailState = {
    Reset: []
}
export const reducer = (state = initailState, action) => {
    switch (action.type) {
        case StoreData: return { ...state, Reset: action.payload };
        default:return state
    }
}