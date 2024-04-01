import React from 'react'
import "./header.style.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='whitebar'>
        <div className='divlogo'>POPSHOP</div>
        <div className='divnav'> <Link to={"/"}>HOME</Link> <Link to={"/"}>SHOP</Link> <Link to={"/About"}>ABOUT</Link> <div className='headerforblog'>BLOG</div> <Link to={"/colections"}>SALE</Link> <Link to={"/contact-us"}>CONTACT US</Link></div>
        <div className='divprof'><PersonOutlineOutlinedIcon/> <SearchIcon/> <FavoriteBorderOutlinedIcon/> <ShoppingBagOutlinedIcon/> <div className='circleblack'>0</div></div>
    </div>
  )
}

export default Header