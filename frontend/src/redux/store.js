import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminAddProductReducer } from "./AdminAddProduct/adminaddProduct.reducer";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/adminShowProduct.reducer";
import { adminShowAllUserReducer } from "./AdminShowUser/AdminShowUser.reducer";
// import { sortReducer } from "./Sort/reducer";
import { LoginReducer } from "./UserLogin/userLoginreducer";
import { reducer as product } from "./Product/reducer";
const rootReducer = combineReducers({
  adminAuth: adminReducer,
  adminAddProduct: adminAddProductReducer,
  adminShowProduct: adminShowProductReducer,
  getUser: adminShowAllUserReducer,
  loginAuth: LoginReducer,
  productReducer: product,
  // sortReducer:sortReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
