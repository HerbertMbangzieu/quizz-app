import React from "react";
import Menu from "../components/Menu";
import Alert from "../components/Alert";
import DashboardCard from "../components/DashboardCard";

const Home = () => {
  return (
    <div>
      <Menu auth={false} />
      <Alert type={"success"} message={"Voici une alerte"} show={true} />
      <div className="mt-12"></div>
      <DashboardCard
        textTop={["Categories", "answered"]}
        number={5}
        bgColor={"bg-lime-900"}
        textColor={"text-orange-600"}
      />
    </div>
  );
};

export default Home;
