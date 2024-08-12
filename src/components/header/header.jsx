import React, { useState } from "react";
import "./header.style.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <div className="whitebar">
      <div className="divlogo">
        <Link to={"/"}>POPSHOP</Link>
      </div>
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavVisible ? "Hide Menu" : "Show Menu"}
      </button>
      <div className={`divnav ${isNavVisible ? "visible" : ""}`}>
        <Link to="/">HOME</Link>
        <Link to="/shopping">SHOP</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/colections">SALE</Link>
        <Link to="/contact-us">CONTACT US</Link>
      </div>
      <div className="divprof">
        <PersonOutlineOutlinedIcon /> <SearchIcon />{" "}
        <FavoriteBorderOutlinedIcon />{" "}
        <Link to={"/Cart"}>
          <ShoppingBagOutlinedIcon />
        </Link>{" "}
        <div className="circleblack">{cartItems.length}</div>
      </div>
    </div>
  );
};

export default Header;
