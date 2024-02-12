import React from "react";
import Menu from "../components/Menu";
import Alert from "../components/Alert";

const Home = () => {
  return (
    <div>
      <Menu auth={false} />
      <Alert type={"success"} message={"Voici une alerte"} show={true} />
    </div>
  );
};

export default Home;
