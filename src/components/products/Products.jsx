import React from 'react'
import "./Products.style.scss"
import { ImageBackground } from "react-native";

const Products = (props) => {
  return (
    <div className='productsall'>
      <ImageBackground className="SlideShowCompImg" source={props.ImgSrc}>
        <p>{props.LableTag}</p>
      </ImageBackground>
    </div>
  )
}

export default Products