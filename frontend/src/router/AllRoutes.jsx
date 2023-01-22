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
// import UserRequireAuth from "../hoc/UserRequireAuth";
import SingleProduct from "../components/Product/SingleProduct";
import AdminUpdateProduct from "./AdminPage/AdminUpdateProduct";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import CreditCard from "../components/Card/CreditCard";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HomeNavbar />
            <Homepage />
          </>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <>
            <HomeNavbar />
            <Login />
          </>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <>
            <HomeNavbar />
            <Signup />
          </>
        }
      ></Route>
      <Route
        path="/admin-login"
        element={
          <>
            <HomeNavbar />
            <AdminLogin />
          </>
        }
      ></Route>
      <Route
        path="/newarrival"
        element={
          <>
            <HomeNavbar />
            <NewProduct />
          </>
        }
      />
      <Route
        path="/bag"
        element={
          <>
            <HomeNavbar />
            <Bag />
          </>
        }
      />
      <Route
        path="/card"
        element={
          <>
            <HomeNavbar />
            <CreditCard />
          </>
        }
      />

      <Route
        path="/wallet"
        element={
          <>
            <HomeNavbar />
            <Wallet />
          </>
        }
      />
      <Route
        path="/desks"
        element={
          <>
            <HomeNavbar />
            <Desk />
          </>
        }
      />
      <Route
        path="/watch"
        element={
          <>
            <HomeNavbar />
            <Watch />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <HomeNavbar />
            <Cart />
          </>
        }
      />
      <Route
        path="/sale"
        element={
          <>
            <HomeNavbar />
            <Sales />
          </>
        }
      />
      <Route
        path="/products/:id"
        element={
          <>
            <HomeNavbar />
            <SingleProduct />
          </>
        }
      />
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
