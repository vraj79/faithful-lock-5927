import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import NewProduct from "../components/Product/NewProduct";
import AdminRequireAuth from "../hoc/AdminRequireAuth";
import AdminDshboardPage from "./AdminPage/AdminDshboardPage";
import AdminLogin from "./AdminPage/AdminLogin";
import AdminShowCart from "./AdminPage/AdminShowCart";
import AdminShowProduct from "./AdminPage/AdminShowProduct";
import AdminShowUser from "./AdminPage/AdminShowUser";
import Homepage from "../components/Homepage/Homepage";
 

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/newarrival" element={<NewProduct/>}/>
      <Route
        path="/admin"
        element={
          <AdminRequireAuth>
            <AdminDshboardPage />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/product"
        element={
          <AdminRequireAuth>
            <AdminShowProduct />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/user"
        element={
          <AdminRequireAuth>
            <AdminShowUser />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/cart"
        element={
          <AdminRequireAuth>
            <AdminShowCart />
          </AdminRequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
