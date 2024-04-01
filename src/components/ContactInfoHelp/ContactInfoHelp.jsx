import React from "react";
import "./ContactInfoHelp.style.scss";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
const ContactInfoHelp = () => {
  return (
    <div className="contactinfohelpforall">
      <div className="contactinfohelpfortxts">
        <p>We're here to help you!</p>
        <p>
          Have a question, comment, or brilliant idea you'd like to share?<br/> Send
          us a little note below - we love to hear from you and will always
          reply!
        </p>
      </div>
      <div className="contactinfohelpfourdivs">
        <div>
          <LocalPhoneOutlinedIcon />
          <p>Phone Number</p>
          <p>Call Us: 800-123-4567</p>
        </div>
        <div>
          <EmailOutlinedIcon />
          <p>Email:</p>
          <p>demo@demo.com</p>
        </div>
        <div>
          <LocationOnOutlinedIcon />
          <p>Location</p>
          <p>2972 Westheimer Rd.<br/> Santa Ana, Illinois 85486</p>
        </div>
        <div>
          <AccessTimeOutlinedIcon />
          <p>Opening Hours</p>
          <p>
            Mon-Fri: 9:00 am - 6:00 pm Sat: 9:00 am - 4:00 pm Sun: 9:00 am -
            2:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoHelp;
