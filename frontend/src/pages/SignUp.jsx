import React, { useState } from "react";
import Menu from "../components/Menu";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import {
  OTPgenerator,
  match,
  sendEmail,
  setMessage,
} from "../functions/functions.js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    !EmailValidator.validate(email) &&
      errors.push("The email format is not valid");

    !match(password, confirmPassword) &&
      errors.push("Password and Confirmation must match");

    if (errors.length > 0) {
      setAlertMessage(setMessage(errors));
      setAlertType("danger");
      setShowAlert(true);
    } else {
      const OTP = OTPgenerator();
      const data = {
        sendername: "Quizz App",
        to: email,
        message: OTP,
        replyto: "",
        subject: "OTP code for registration",
      };
      sendEmail(data);
      const user = { email, username, password, type: "user" };
      navigate("/OTP", { state: { OTP, user } });
    }
  };

  return (
    <div>
      <Menu auth={false} />
      {showAlert && (
        <div className="cursor-pointer" onClick={() => setShowAlert(false)}>
          <Alert show={true} message={alertMessage} type={alertType} />
        </div>
      )}
      <div className="my-4">
        <div className="text-2xl md:text-3xl lg:text-4xl font-nunito font-semibold">
          Create an account
        </div>
      </div>

      <form
        className="w-full lg:w-3/5 border-[1px] rounded px-2 lg:px-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="my-4 px-2 flex flex-col gap-2">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className="border-[1px] rounded px-3"
            required={true}
            placeholder="Enter your email ..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-4 px-2 flex flex-col gap-2">
          <label className="font-semibold">Username</label>
          <input
            type="text"
            className="border-[1px] rounded px-3"
            required={true}
            placeholder="Enter your username ..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="my-4 px-2 flex flex-col gap-2">
          <label className="font-semibold">Password</label>
          <input
            type="password"
            className="border-[1px] rounded px-3"
            required={true}
            placeholder="Enter your password ..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-4 px-2 flex flex-col gap-2">
          <label className="font-semibold">Confirm Password</label>
          <input
            type="password"
            className="border-[1px] rounded px-3"
            required={true}
            placeholder="Enter your password again ..."
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="my-3 w-full text-white py-2 rounded-md font-semibold bg-gradient-to-b from-orange-700 to-orange-400 hover:from-orange-500 hover:to-orange-300 hover:text-orange-950 active:scale-95">
          Sign Up
        </button>
        <div className="my-2 text-center">
          You already have an account ?
          <Link to={"/sign-in"} className="text-blue-700 font-semibold mx-2">
            Log in an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
