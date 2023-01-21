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
<<<<<<< HEAD
import Sales from "../components/Product/Sales";
import LodingPage from "../components/Product/LodingPage";
=======
import UserRequireAuth from "../hoc/UserRequireAuth";
>>>>>>> 8a01163d994fb74780bad4f99409aef5ba02cc3c

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/admin-login" element={<AdminLogin />}></Route>
      <Route path="/newarrival" element={<NewProduct />} />
      <Route path="/bag" element={<UserRequireAuth><Bag/></UserRequireAuth>}/>
      <Route path="/wallet" element={<Wallet/>}/>
      <Route path="/desks" element={<Desk/>}/>
      <Route path="/watch" element={<Watch/>}/>
      <Route path="/sale" element={<Sales/>}/>
      <Route path="/lod" element={<LodingPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
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
    </Routes>
  );
};

export default AllRoutes;
