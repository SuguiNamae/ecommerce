import React from "react";
import "./Sells.style.scss";
import ButtonShopNow from "../ButtonShopNow/ButtonShopNow";

const Sells = () => {
  return (
    <div className="twodivs">
      <div className="sells1">
        <p>
          BUY 2 ITEMS
          <br /> GET 1 FOR FREE
        </p>
        <ButtonShopNow />
      </div>
      <div className="sells2">
        <p>
          GET 10% OFF
          <br /> ON CHOCOLATE
        </p>
        <ButtonShopNow />
      </div>
    </div>
  );
};

export default Sells;
