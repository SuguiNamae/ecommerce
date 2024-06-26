import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Carousel from "../../components/carousel/carousel";
import TextAd from "../../components/TextAd/TextAd";
import Slideshow from "../../components/slideshow/slideshow";
import Handmade from "../../components/handmade/handmade";
import NewProducts from "../../components/NewProducts/NewProducts";
import IceCream from "../../components/IceCream/IceCream";
import GiftIdeas from "../../components/GiftIdeas/GiftIdeas";
import BestSellers from "../../components/BestSellers/BestSellers";
import Sells from "../../components/Sells/Sells";
import Brands from "../../components/Brands/Brands";
import Rights from "../../components/rights/Rights";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Carousel />
      <TextAd />
      <Slideshow />
      <Handmade />
      <NewProducts />
      <IceCream />
      <GiftIdeas />
      <BestSellers />
      <Sells />
      <Brands />
      <Footer />
      <Rights />
    </div>
  );
};

export default Home;
