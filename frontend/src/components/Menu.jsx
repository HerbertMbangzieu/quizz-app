import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Menu = ({ auth, username, usertype }) => {
  return (
    <div className="px-0">
      <div className="flex justify-between border-b-[1px] border-b-slate-500 pb-3">
        <div className="text-xl lg:text-2xl font-bold font-nunito">
          <span className="text-green-600">Quizz-</span>
          <span className="text-orange-600">App</span>
        </div>
        {auth && (
          <div className="flex justify-end">
            <div className="hidden lg:flex gap-x-6 font-semibold">
              {usertype === "user" ? (
                <Link className="mt-2 mx-2 hover:mt-0"> Answer Quizz </Link>
              ) : (
                <div>
                  <Link className="mt-2 mx-2 hover:mt-0"> Manage users </Link>
                  <Link className="mt-2 mx-2 hover:mt-0">
                    {" "}
                    Manage questions
                  </Link>
                  <Link className="mt-2 mx-2 hover:mt-0">
                    {" "}
                    Manage categories{" "}
                  </Link>
                </div>
              )}
              <button className="bg-red-700 -mt-2 px-4 py-1 text-white rounded-md active:scale-95 hover:shadow-md hover:shadow-gray-600 hover:bg-white hover:text-red-700">
                {" "}
                Logout{" "}
              </button>
            </div>
            <div className="lg:hidden text-2xl">
              <FaBars />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
