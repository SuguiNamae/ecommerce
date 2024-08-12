import React from "react";
import "./Products.style.scss";
import { ImageBackground } from "react-native";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from 'react-redux';
import { addItem } from '../../state/cartSlice'

const Products = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const item = {
      label: props.LableTag,
      price: props.price,
      imgSrc: props.ImgSrc,
    };
    dispatch(addItem(item));
  };
  return (
    <Link className="productsall" to={"/shopping"}>
      <ImageBackground className="SlideShowCompImg" source={props.ImgSrc}>
        <p>{props.LableTag}</p>
        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
          <span>{props.price}</span>
          <div onClick={handleAddToCart} style={{ width: "3rem" }}>
            <ShoppingCartIcon />
          </div>
        </div>
      </ImageBackground>
    </Link>
  );
};

export default Products;
