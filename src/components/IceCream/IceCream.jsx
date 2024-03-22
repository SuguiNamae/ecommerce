import React from "react";
import "./IceCream.style.scss";
import ButtonShopNow from '../ButtonShopNow/ButtonShopNow'
const IceCream = () => {
  return (
    <div className="containallpage">
      <img src="/assets/images/img_15.png" alt="" />
      <div className="secondarydiv">
        <p className="txt1">
          ICE CREAMS
          <br /> & SORBETS
        </p>
        <p className="txt2">
          New! Miss Gla'gla Sorbet Ispahan Rose,
          <br /> Litchi & Raspberry - $6.90
        </p>
        <ButtonShopNow/>
      </div>
    </div>
  );
};

export default IceCream;
