import React from "react";
import { Route, Routes } from "react-router-dom";
import { ForgotPassword, Home, OTPpage, SignIn, SignUp } from "./pages";

const App = () => {
  return (
    <div className="p-4 font-quicksand">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPpage />} />
      </Routes>
    </div>
  );
};

export default App;
