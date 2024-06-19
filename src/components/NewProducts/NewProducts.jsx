import React from "react";
import "./NewProducts.style.scss";
import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import Products from "../products/Products";

const NewProducts = () => {
  const components = [
    <Products
      LableTag={"peeps marshmalow"}
      ImgSrc={"/assets/images/img_02_533x.png"}
      price={"2$"}
    />,
    <Products
      LableTag={"nom nom delight"}
      ImgSrc="/assets/images/img_04_533x.png"
      price={"25$"}

    />,
    <Products
      LableTag={"gormet fudge candy"}
      ImgSrc="/assets/images/img_05_533x.png"
      price={"34$"}

    />,
    <Products
      LableTag={"godvia dark chocolate"}
      ImgSrc="/assets/images/godiva_dark_chocolate_with_rasperry_bar_1_533x.png"
      price={"42.2$"}

    />,
    <Products
      LableTag={"godvia chocolatier"}
      ImgSrc="/assets/images/img_03_533x.png"
      price={"5$"}

    />,
    <Products
      LableTag={"godvia classic"}
      ImgSrc="/assets/images/godiva_chocolatier_classic_gold_ballotin_1_533x.png"
      price={"20$"}

    />,
    <Products
      LableTag={"fairy tail brwonie"}
      ImgSrc="/assets/images/fairytale_brownies_home_sweet_home_morsel_36_gift_box_01_533x.png"
      price={"95$"}

    />,
    <Products
      LableTag={"fairy tail cookie"}
      ImgSrc="/assets/images/fairytale_brownies_home_sweet_home_deluxe_cookie_and_sprite_1_720x.png"
      price={"105$"}

    />,
  ];
  const totalComponents = components.length;
  const [startIndex, setStartIndex] = useState(0);
  const nextSlide = () => {
    if (startIndex + 3 < totalComponents) {
      setStartIndex(startIndex + 1);
    }
  };
  const previousSlide = () => {
    if (startIndex >= 1) {
      setStartIndex(startIndex - 1);
    }
  };
  const renderComponents = () => {
    return [
      components[startIndex],
      components[(startIndex + 1) ],
      components[(startIndex + 2) ],
    ];
  };

  return (
    <div className="newslideshow">
      <div className="fortext">
        <p>New Products</p>
      </div>
      <div className="newslideforflex">
        <button onClick={previousSlide}>
          <ArrowBackIosNewOutlinedIcon />
        </button>
        {renderComponents()}
        <button onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default NewProducts;
