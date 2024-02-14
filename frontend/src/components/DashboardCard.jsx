import React, { useEffect, useState } from "react";

const DashboardCard = ({ bgColor, textTop, textColor, number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === number) {
        return;
      }
      setCount(count + 1);
    }, Math.floor(3000 / number));
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="w-full rounded-md p-2 md:p-3 lg:p-4 border-[1px] my-4">
      <div className="flex justify-between w-full">
        <div className={`text-lg lg:text-xl font-semibold ${textColor}`}>
          {textTop[0]}
        </div>
        <div className={`px-3 text-gray-300 py-1 ${bgColor} rounded-full`}>
          {textTop[1]} : 2
        </div>
      </div>
      <div className="w-full text-center text-2xl md:text-4xl lg:text-[72px] py-3 md:py-5 lg:py-10 font-bold">
        {count}
      </div>
    </div>
  );
};

export default DashboardCard;
