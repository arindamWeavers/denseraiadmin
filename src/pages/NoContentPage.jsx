import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoContentPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Hello");
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    if (user?.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return <div></div>;
};

export default NoContentPage;
