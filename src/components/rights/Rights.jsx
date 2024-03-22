import React from "react";
import "./Rights.style.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Rights = () => {
  return (
    <div className="rightsall">
      <p>© 2024 - popshop . All rights reserved</p>
      <div className="fortags"><InstagramIcon/> <FacebookIcon/> <YouTubeIcon/> <LinkedInIcon/> <PinterestIcon/></div>
    </div>
  );
};

export default Rights;
