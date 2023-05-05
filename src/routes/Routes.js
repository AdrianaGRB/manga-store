import React from "react";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Checkout from "../Pages/Checkout/Checkout";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo={"/register"}>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="*" element={"Error 404"} />




    </ReactDomRoutes>
  );
};

export default Routes;
