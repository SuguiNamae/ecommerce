import React, { useEffect, useState } from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import SideMenu from "../../components/SideMenu/SideMenu";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductsGrid from "../../components/productsGrid/ProductsGrid";

const Shop = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "10dvh",
        }}
      >
        <div>
          <SearchBar />
          <SideMenu />
        </div>
        <ProductsGrid />
      </div>

      <Footer />
      <Rights />
    </div>
  );
};

export default Shop;
