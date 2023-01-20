import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./AdminLogin/adminLogin.reducer";

const rootReducer = combineReducers({
  adminAuth: adminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
