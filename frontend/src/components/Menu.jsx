import React from "react";

const Menu = ({ auth }) => {
  return (
    <div className="px-4">
      <div className="flex justify-between border-b-[1px] border-b-slate-500 pb-3">
        <div className="text-xl lg:text-2xl font-bold">
          <span className="text-green-600">Quizz-</span>
          <span className="text-orange-600">App</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
