import React from "react";
import "./GiftIdeas.style.scss";
import ButtonShopNow from "../ButtonShopNow/ButtonShopNow";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
const GiftIdeas = () => {
  return (
    <div className="mainflexdiv">
      <div className="squarediv">
        <CardGiftcardIcon />
        <p>
          GIFT
          <br />
          IDEAS
        </p>
      </div>
      <div className="squaredivsecond">
        <p>
        DEAL OF THE DAY
        </p>
        <p>
        SAVE UP TO 20% OFF<br/> ON JELLY SWEETS
        </p>
        <ButtonShopNow />
      </div>
    </div>
  );
};

export default GiftIdeas;
