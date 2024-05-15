import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import SideMenu from "../../components/SideMenu/SideMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import Products from "../../components/products/Products";

const Shop = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <SearchBar />
      <SideMenu />
      <Products />
      <Footer />
      <Rights />
    </div>
  );
};

export default Shop;
