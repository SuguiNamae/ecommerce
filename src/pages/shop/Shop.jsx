import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import SideMenu from "../../components/SideMenu/SideMenu";
import SearchBar from "../../components/SearchBar/SearchBar";

const Shop = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <SearchBar/>
      <SideMenu/>
      <Footer />
      <Rights />
    </div>
  );
};

export default Shop;
