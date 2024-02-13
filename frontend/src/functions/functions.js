import emailjs from "emailjs-com";
import { SERVICEID, TEMPLATEID, USERID } from "./.emailEnv.js";

const OTPgenerator = () => {
  let OTP = "";
  while (OTP.length < 6) {
    OTP += Math.floor(Math.random() * 10).toString();
  }
  return OTP;
};

const match = (a, b) => {
  return a === b;
};

const setMessage = (data) => {
  if (!Array.isArray(data)) {
    return data;
  }
  let message = "<ul>";
  data.forEach((item) => (message += `<li>${item}</li>`));
  message += "</ul>";
  return message;
};

const sendEmail = async (params) => {
  emailjs.init(USERID);
  let sent = false;
  await emailjs
    .send(SERVICEID, TEMPLATEID, params)
    .then((res) => {
      alert("Sent");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { OTPgenerator, setMessage, match, sendEmail };
