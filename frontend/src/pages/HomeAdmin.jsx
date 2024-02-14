import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";

const HomeAdmin = () => {
  const location = useLocation();
  const user = location.state.user;
  return (
    <div>
      <Menu auth={true} username={user.username} />
      
    </div>
  );
};

export default HomeAdmin;
