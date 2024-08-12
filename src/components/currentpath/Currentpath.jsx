import React from "react";
import "./CurrentPath.style.scss";
import { useLocation } from "react-router-dom";
const Currentpath = () => {
  const location = useLocation();
  const pathWithoutSlash = location.pathname.replace(/^\/+/, '');
  return <div className="currentpathdiv">you are at: {pathWithoutSlash} </div>;
};

export default Currentpath;
