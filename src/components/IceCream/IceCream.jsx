import React from "react";
import "./IceCream.style.scss";
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
        <button className="btnicecream">SHOP NOW</button>
      </div>
    </div>
  );
};

export default IceCream;
