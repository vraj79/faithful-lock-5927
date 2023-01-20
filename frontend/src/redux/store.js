import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminAddProductReducer } from "./AdminAddProduct/adminaddProduct.reducer";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/adminShowProduct.reducer";

const rootReducer = combineReducers({
  adminAuth: adminReducer,
  adminAddProduct: adminAddProductReducer,
  adminShowProduct: adminShowProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
