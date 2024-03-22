import React from "react";
import "./Footer.style.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="footerall">
      <div className="basicinfo">
        <p className="pop1">POPSHOP</p>
        <p className="footertxt">
          Welcome to one of the biggest and the
          <br /> sweetest sweet stores all over the country!
        </p>
        <div className="forphonfooter">
          <LocalPhoneOutlinedIcon /> <p>Call Us:800-123-4567</p>
        </div>
        <div className="foremailfooter">
          <EmailIcon /> <p>Send us an email</p>
        </div>
      </div>
      <div className="forgrid">
        <div>
          <p>COMPANY</p>
          <p>About us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>INFORMATION</p>
          <p>FAQ's</p>
          <p>Terms</p>
          <p>Refund Policy</p>
        </div>
        <div>
          <p>ORDER</p>
          <p>My Account</p>
          <p>View Cart</p>
          <p>Checkout</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
