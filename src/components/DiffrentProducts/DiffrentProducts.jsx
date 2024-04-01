import React from "react";
import "./DiffrentProducts.style.scss";
import MultiUseProductCategorie from "../MultiUseProductCategorie/MultiUseProductCategorie";
const DiffrentProducts = () => {
  return (
    <div className="diffprocutsforall">
      <p>Collections</p>
      <div className="diffprocutsforgrid">
        <MultiUseProductCategorie
          catetype="Bakery"
          productnumber="10"
          backimage="/assets/images/img_24_370x.jpg"
        />
        <MultiUseProductCategorie
          catetype="Caramels"
          productnumber="10"
          backimage="/assets/images/img_13_370x489_crop_center.png.jpg"
        />
        <MultiUseProductCategorie
          catetype="Chocolate"
          productnumber="10"
          backimage="/assets/images/img_12_370x489_crop_center.png.jpg"
        />
        <MultiUseProductCategorie
          catetype="Cookies"
          productnumber="10"
          backimage="/assets/images/img_14_370x489_crop_center.png.jpg"
        />
        <MultiUseProductCategorie
          catetype="Ice-Cream"
          productnumber="10"
          backimage="/assets/images/img_25_370x489_crop_center.png.jpg"
        />
        <MultiUseProductCategorie
          catetype="Sale"
          productnumber="13"
          backimage="/assets/images/img_15.png"
        />
      </div>
    </div>
  );
};

export default DiffrentProducts;
