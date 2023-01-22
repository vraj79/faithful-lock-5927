import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminAddProductReducer } from "./AdminAddProduct/adminaddProduct.reducer";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";
import { adminShowProductReducer } from "./AdminShowProduct/adminShowProduct.reducer";
// import { sortReducer } from "./Sort/reducer";
import { LoginReducer } from "./UserLogin/userLoginreducer";
import { reducer as product } from "./Product/reducer";
import { adminShowAllUserReducer } from "./AdminShowUser/AdminShowUser.reducer";
const rootReducer = combineReducers({
  adminAuth: adminReducer,
  adminAddProduct: adminAddProductReducer,
  adminShowProduct: adminShowProductReducer,
  loginAuth: LoginReducer,
  productReducer: product,
  getUser: adminShowAllUserReducer,
  // sortReducer:sortReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
