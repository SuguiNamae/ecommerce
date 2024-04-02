import React from "react";
import "./SideMenu.style.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const SideMenu = () => {
  return (
    <div className="sidemenuforall">
      <div className="sidemenucollechover">
        <p>COLLECTIONS</p>
        <ChevronRightOutlinedIcon />
      </div>
      <div className="sidemenucomphover">
        <p>COMPANY</p>
        <ChevronRightOutlinedIcon />
      </div>
      <div>
        <p>PRODUCTS</p>
      </div>
    </div>
  );
};

export default SideMenu;
