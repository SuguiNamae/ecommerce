import React from "react";
import "./slideshow.style.scss";
import { useState } from "react";
import Slideshow_Component from "../slideshow.component/slideshow.component";

const Slideshow = () => {
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
      <Slideshow_Component
        LableTag={"CHOCOLATE"}
        ImgSrc={"/assets/images/img_12_370x489_crop_center.png.jpg"}
      />,
      <Slideshow_Component
        LableTag={"CARAMELS"}
        ImgSrc="/assets/images/img_13_370x489_crop_center.png.jpg"

      />,
      <Slideshow_Component
        LableTag={"COOKIES"}
        ImgSrc="/assets/images/img_14_370x489_crop_center.png.jpg"
      />,
      <Slideshow_Component
        LableTag={"BAKERY"}
        ImgSrc="/assets/images/img_24_370x.jpg"

      />,
      <Slideshow_Component
        LableTag={"ICE-CREAM"}
        ImgSrc="/assets/images/img_25_370x489_crop_center.png.jpg"
      />,
    ];
    return [components[startIndex], components[startIndex+1], components[startIndex+2]];
  };
  console.log(startIndex);

  return (
    <div className="fornow">
      <button onClick={previousSlide}>Previous</button>
      {renderComponents()}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
