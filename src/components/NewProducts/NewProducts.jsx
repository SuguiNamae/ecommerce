import React from 'react'
import "./NewProducts.style.scss"
import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Products from "../products/Products";

const NewProducts = () => {
  const totalComponents = 5;
  const [startIndex, setStartIndex] = useState(1);
  const nextSlide = () => {
    setStartIndex((startIndex + 1) % totalComponents);
  };
  const previousSlide = () => {
    setStartIndex((startIndex - 1 + totalComponents) % totalComponents);
  };
  const renderComponents = () => {
    const components = [
      <Products
        LableTag={"CHOCOLATE"}
        ImgSrc={"/assets/images/img_03_533x.png"}
      />,
      <Products
        LableTag={"CARAMELS"}
        ImgSrc="/assets/images/img_13_370x489_crop_center.png.jpg"

      />,
      <Products
        LableTag={"COOKIES"}
        ImgSrc="/assets/images/img_14_370x489_crop_center.png.jpg"
      />,
      <Products
        LableTag={"BAKERY"}
        ImgSrc="/assets/images/img_24_370x.jpg"

      />,
      <Products
        LableTag={"ICE-CREAM"}
        ImgSrc="/assets/images/img_25_370x489_crop_center.png.jpg"
      />,
    ];
    return [components[(startIndex)], components[(startIndex+1)%components.length], components[(startIndex+2)%components.length]];
  };

  return (
    <div className="newslideshow">
      <div className='fortext'><p>New Products</p></div>
      <div className='newslideforflex'>
      <button onClick={previousSlide}><ArrowBackIosNewOutlinedIcon/></button>
      {renderComponents()}
      <button onClick={nextSlide}><ArrowForwardIosOutlinedIcon/></button></div>
    </div>
  );
}

export default NewProducts
