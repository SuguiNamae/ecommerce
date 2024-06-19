import React from "react";
import { useState } from "react";
import Products from "../products/Products";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./BestSellers.style.scss";

const BestSellers = () => {
  const components = [
    <Products
      LableTag={"godvia chocolatier"}
      ImgSrc={"/assets/images/img_03_533x.png"}
      price={"2$"}
    />,
    <Products
      LableTag={"organic gluten free cookie"}
      ImgSrc="/assets/images/organic_gluten_free_vegan_cookies_1_533x.png"
      price={"25$"}
    />,
    <Products
      LableTag={"fairy tale brownie sweet"}
      ImgSrc="/assets/images/img_10_533x.png"
      price={"34$"}
    />,
    <Products
      LableTag={"golden state fruit savory"}
      ImgSrc="/assets/images/img_06_533x.png"
      price={"42.2$"}
    />,
    <Products
      LableTag={"peeps marshmallow"}
      ImgSrc="/assets/images/img_02_533x.png"
      price={"5$"}
    />,
    <Products
      LableTag={"lindt lindor chocholate"}
      ImgSrc="/assets/images/lindt_lindor_dark_chocolate_truffles_1_533x.png"
      price={"20$"}
    />,
    <Products
      LableTag={"godvia dark chocolate"}
      ImgSrc="/assets/images/godiva_dark_chocolate_with_rasperry_bar_1_533x.png"
      price={"95$"}
    />,
    <Products
      LableTag={"godvia chocolatier"}
      ImgSrc="/assets/images/img_03_533x.png"
      price={"105$"}
    />,
    <Products
      LableTag={"godvia classic"}
      ImgSrc="/assets/images/godiva_chocolatier_classic_gold_ballotin_1_533x.png"
      price={"105$"}
    />,
    <Products
      LableTag={"fairytale brownie sweet"}
      ImgSrc="/assets/images/fairytale_brownies_home_sweet_home_deluxe_cookie_and_sprite_1_533x.png"
      price={"105$"}
    />,
    <Products
      LableTag={"dulcets gourmet chocolate"}
      ImgSrc="/assets/images/dulcets_gourmet_chocolate_birthday_sampler_celebratio_1_533x.png"
      price={"105$"}
    />,
    <Products
      LableTag={"broadway basketeers"}
      ImgSrc="/assets/images/broadway_basketeers_happy_birthday_gift_tower_01_533x.png"
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
      components[startIndex + 1],
      components[startIndex + 2],
    ];
  };

  return (
    <div className="temposellers">
      <div className="fortext">
        <p>our best sellers:</p>
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

export default BestSellers;
