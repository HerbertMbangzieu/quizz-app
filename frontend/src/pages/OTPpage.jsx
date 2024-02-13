import React, { useState } from "react";
import Menu from "../components/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { match } from "../functions/functions";
import Alert from "../components/Alert";
import axios from "axios";

const OTPpage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [input, setInput] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const location = useLocation();
  const OTP = location.state.OTP;
  const user = location.state.user;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!match(OTP, input)) {
      setAlertMessage("Your OTP is not correct, Try again");
      setAlertType("warning");
      setShowAlert(true);
    } else {
      axios
        .post("http://localhost:5555/users", user)
        .then(() => {
          setAlertMessage("The User was successfully created");
          setAlertType("success");
          setShowAlert(true);
          setTimeout(() => {
            navigate("/sign-in");
          }, 4000);
        })
        .catch((error) => {
          setAlertMessage("The Saving of a user Failed");
          setAlertType("danger");
          setShowAlert(true);
          console.log(error.message);
        });
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
      <div className="my-2 md:my-3 lg:my-4 font-nunito text-xl md:text-2xl lg:text-4xl font-semibold">
        OTP Confirmation
      </div>
      <div className="lg:my-4 text-md">
        Enter below the six figures OTP Number you received in your email
      </div>
      <div className="my-8">
        <form
          action=""
          className="flex flex-col w-full md:w-2/3 lg:w-2/5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="border-slate-600 rounded border-[1px] w-full text-3xl md:px-5 py-1"
          />
          <button className="my-3 w-full text-white py-2 rounded-md font-semibold bg-gradient-to-b from-green-700 to-green-400 hover:from-green-300 hover:to-green-500 hover:text-green-950 active:scale-95">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPpage;
