import React from 'react'
import "./ButtonShopNow.style.scss"
import { Link } from 'react-router-dom';

const ButtonShopNow = () => {
  return (
    <Link className='ReuseButton' to={"/shopping"}>SHOP NOW</Link>
  )
}

export default ButtonShopNow