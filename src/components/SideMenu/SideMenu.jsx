import React from "react";
import "./SideMenu.style.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MenuItem from "@mui/material/MenuItem";

const SideMenu = () => {
  const [toggle1, settoggle1] = React.useState(false);
  const [toggle2, settoggle2] = React.useState(false);

  return (
    <div className="sidemenuforall">
      <div className="sidemenucollechover">
        <button
          onClick={() => (toggle1 ? settoggle1(false) : settoggle1(true))}
        >
          <p>COLLECTIONS</p>
          <ChevronRightOutlinedIcon />
        </button>
        {toggle1 ? (
          <div>
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </div>
        ) : null}
      </div>

      <div className="sidemenucomphover">
        <button
          onClick={() => (toggle2 ? settoggle2(false) : settoggle2(true))}
        >
          <p>COMPANY</p>
          <ChevronRightOutlinedIcon />
        </button>

        {toggle2 ? (
          <div>
            <MenuItem>Profile2</MenuItem>
            <MenuItem>My account2</MenuItem>
            <MenuItem>Logout2</MenuItem>
          </div>
        ) : null}
      </div>
      <div>
        <p>PRODUCTS</p>
      </div>
    </div>
  );
};

export default SideMenu;
