import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Rights from "../../components/rights/Rights";
import Footer from "../../components/footer/Footer";
import Currentpath from "../../components/currentpath/Currentpath";
import Cart from "../../components/cart/Cart";
const CartPage = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <Cart/>
      <Footer />
      <Rights />
    </div>
  );
};

export default CartPage;
