import React from "react";
import "./slideshow.component.style.scss";
import { ImageBackground } from "react-native";

const Slideshow_Component = (props) => {
  return (
    <div className="slideshowcompforall">
      <ImageBackground className="SlideShowCompImg" source={props.ImgSrc}>
        <p>{props.LableTag}</p>
      </ImageBackground>
    </div>
  );
};

export default Slideshow_Component;
