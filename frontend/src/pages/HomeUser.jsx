import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import DashboardCard from "../components/DashboardCard";

const HomeUser = () => {
  const location = useLocation();
  const user = location.state.user;
  return (
    <div>
      <Menu auth={true} username={user.username} usertype={user.type} />

      <div className="my-3 md:my-4 lg:my-8 text-xl md:text-2xl lg:text-4xl font-nunito font-semibold">
        Welcome {user.username}
      </div>

      <div className="mx-2 md-12 lg:mx-5 my-2 md:my-4 lg:my-12 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <DashboardCard
          textTop={["Categories", "answered"]}
          number={5}
          bgColor={"bg-lime-900"}
          textColor={"text-orange-600"}
        />

        <DashboardCard
          textTop={["Questions", "answered"]}
          number={72}
          bgColor={"bg-orange-700"}
          textColor={"text-green-700"}
        />

        <DashboardCard
          textTop={["Score", "Highest"]}
          number={49}
          bgColor={"bg-lime-900"}
          textColor={"text-orange-600"}
        />
      </div>
    </div>
  );
};

export default HomeUser;
