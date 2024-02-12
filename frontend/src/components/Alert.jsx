import React, { useEffect, useState } from "react";

const Alert = ({ message, type, show }) => {
  const [bgColor, setBgColor] = useState("bg-gray-400");
  const [translate, setTranslate] = useState("-translate-y-full top-0 right-0");

  useEffect(() => {
    switch (type) {
      case "info":
        setBgColor("bg-sky-700");
        break;
      case "danger":
        setBgColor("bg-red-700");
        break;
      case "warning":
        setBgColor("bg-orange-500");
        break;
      case "success":
        setBgColor("bg-green-700");
        break;
      default:
        setBgColor("bg-gray-700");
        break;
    }

    show
      ? setTranslate("translate-y-2 top-2 right-2")
      : setTranslate("-translate-y-full top-0 right-0");
  }, []);
  return (
    <div
      className={`absolute transition ease-in-out duration-300 px-10 md:px-20 lg:px-28 rounded py-4 md:py-4 lg:py-8 text-center text-white font-medium ${translate} ${bgColor}`}
    >
      {message}
    </div>
  );
};

export default Alert;
