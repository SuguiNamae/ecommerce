import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import DiffrentProducts from "../../components/DiffrentProducts/DiffrentProducts";

const Sale = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <DiffrentProducts/>
      <Footer />
      <Rights />
    </div>
  );
};

export default Sale;
