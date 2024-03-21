import React from 'react'
import "./header.style.scss"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Header = () => {
  return (
    <div className='whitebar'>
        <div className='divlogo'>POPSHOP</div>
        <div className='divnav'> <div>HOME</div> <div>SHOP</div> <div>ABOUT</div> <div>BLOG</div> <div>SALE</div> <div>CONTACT US</div></div>
        <div className='divprof'><PersonOutlineOutlinedIcon/> <SearchIcon/> <FavoriteBorderOutlinedIcon/> <ShoppingBagOutlinedIcon/> <div className='circleblack'>0</div></div>
    </div>
  )
}

export default Header