import React from "react";
import "./SideMenu.style.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const SideMenu = () => {
  return (
    <div className="sidemenuforall">
      <div>
        <p>COLLECTIONS</p>
        <ChevronRightOutlinedIcon />
      </div>
      <div>
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
