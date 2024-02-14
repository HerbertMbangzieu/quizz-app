import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ForgotPassword,
  Home,
  HomeAdmin,
  HomeUser,
  OTPpage,
  SignIn,
  SignUp,
} from "./pages";

const App = () => {
  return (
    <div className="p-4 font-quicksand">
      <Routes>
        <Route path="/" element={<Home />} />

        {/**
         * Routes For Signing In or Up
         */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPpage />} />

        <Route path="/home-user" element={<HomeUser />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
      </Routes>
    </div>
  );
};

export default App;
