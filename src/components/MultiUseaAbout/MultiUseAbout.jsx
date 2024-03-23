import React from "react";
import "./MultiUseAbout.style.scss";
const MultiUseAbout = (props) => {
  const isGoal = props.directio;
  if (isGoal) {
    return (
      <div className="multiusecomp">
        <img src="/assets/images/img_21_300x300.png" alt="" />
        <div className="multiusetxt">
          <p className="multititle">About Us</p>
          <p className="multiusenormaltxt">
            Our company is dedicated to creating unique and
            <br /> comfortable clothing for men and women. Since our
            <br /> establishment in 2010, Fashion's activity has extended from
            <br /> developing designer clothes to training new designers and
            <br /> stylists at our school, participation of our trainees at the
            <br /> world's leading fashion shows and writing articles about
            <br /> fashion.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="multiusecomp">
      <div className="multiusetxt">
        <p className="multititle">Our Story</p>
        <p className="multiusenormaltxt">
          Our store is more than just another average online retailer. We sell
          <br /> not only top quality products, but give our customers a
          positive
          <br /> online shopping experience.
          <br /> <br />
          Forget about struggling to do everything at once: taking care of the
          <br /> family, running your business, walking your dog, cleaning the
          house,
          <br /> doing the shopping, etc.
        </p>
      </div>
      <img src="/assets/images/img_21_300x300.png" alt="" />
    </div>
  );
};

export default MultiUseAbout;
