import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import MultiUseAbout from "../../components/MultiUseaAbout/MultiUseAbout";

const About = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <MultiUseAbout/>
      <Footer />
      <Rights/>
    </div>
  );
};

export default About;
