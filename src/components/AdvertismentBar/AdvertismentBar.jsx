import React from 'react'
import "./AdvertismentBar.style.scss"
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';


const AdvertismentBar = () => {
  return (
    <div className='blue-upper-heading'>
        <div className='btns1'><LocalPhoneOutlinedIcon/> <p>+3(800)2345-67897</p> <p>ALL WEEK FROM 9 AM TO 7 PM  </p></div>
        <div className='btns2'><InstagramIcon/> <FacebookIcon/> <YouTubeIcon/> <LinkedInIcon/> <PinterestIcon/> </div>
    </div>

    )
}

export default AdvertismentBar