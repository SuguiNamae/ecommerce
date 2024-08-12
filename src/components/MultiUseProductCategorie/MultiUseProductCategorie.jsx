import React from "react";
import "./MultiUseProductCategorie.style.scss";
import { ImageBackground} from "react-native";
import { Link } from "react-router-dom";
const MultiUseProductCategorie = (props) => {
  return (
    <Link className="Multiusecategorieforall" to={"/shopping"}>
      <ImageBackground source={props.backimage}>
        <p>{props.catetype}</p>
        <p>{props.productnumber} products</p>
      </ImageBackground>
    </Link>
  );
};

export default MultiUseProductCategorie;
