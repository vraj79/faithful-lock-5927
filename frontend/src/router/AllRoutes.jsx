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
import AdminAddPoductPage from "./AdminPage/AdminAddPoductPage";
import Bag from "../components/Product/Bag";
import Wallet from "../components/Product/Wallet";
import Desk from "../components/Product/Desk";
import Watch from "../components/Product/Watch";
import PageNotFound from "../components/Product/404";
import Cart from "../components/pages/Cart/Cart";

import Sales from "../components/Product/Sales";

import UserRequireAuth from "../hoc/UserRequireAuth";
import SingleProduct from "../components/Product/SingleProduct";
import AdminUpdateProduct from "./AdminPage/AdminUpdateProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/newarrival" element={<NewProduct />} />
      <Route path="/bag" element={<Bag/>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/desks" element={<Desk/>}/>
      <Route path="/watch" element={<Watch/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route
        path="/bag"
        element={
          <UserRequireAuth>
            <Bag />
          </UserRequireAuth>
        }
      />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/desks" element={<Desk />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/sale" element={<Sales />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="*" element={<PageNotFound />} />
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
      <Route
        path="/admin/addProduct"
        element={
          <AdminRequireAuth>
            <AdminAddPoductPage />
          </AdminRequireAuth>
        }
      ></Route>
      <Route
        path="/admin/update/:id"
        element={
          <AdminRequireAuth>
            <AdminUpdateProduct />
          </AdminRequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
