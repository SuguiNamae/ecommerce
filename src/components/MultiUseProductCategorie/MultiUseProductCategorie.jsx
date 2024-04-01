import React from "react";
import "./MultiUseProductCategorie.style.scss";
import { ImageBackground} from "react-native";
const MultiUseProductCategorie = (props) => {
  return (
    <div className="Multiusecategorieforall">
      <ImageBackground source={props.backimage}>
        <p>{props.catetype}</p>
        <p>{props.productnumber} products</p>
      </ImageBackground>
    </div>
  );
};

export default MultiUseProductCategorie;
