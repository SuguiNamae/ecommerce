import React from "react";
import "./slideshow.component.style.scss";
import { ImageBackground } from "react-native";
import { Link } from "react-router-dom";
const Slideshow_Component = (props) => {
  return (
    <Link className="slideshowcompforall" to={"/shopping"}>
      <ImageBackground className="SlideShowCompImg" source={props.ImgSrc}>
        <p>{props.LableTag}</p>
      </ImageBackground>
    </Link>
  );
};

export default Slideshow_Component;
