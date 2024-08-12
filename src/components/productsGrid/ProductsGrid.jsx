import React, { useState } from "react";
import "./ProductsGrid.style.scss";
import Products from "./../products/Products";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const ProductsGrid = () => {
  const allProducts = [
    {
      label: "peeps marshmallow",
      imgSrc: "/assets/images/img_02_533x.png",
      price: "2.00$",
    },
    {
      label: "nom nom delight",
      imgSrc: "/assets/images/img_04_533x.png",
      price: "25.00$",
    },
    {
      label: "gourmet fudge candy",
      imgSrc: "/assets/images/img_05_533x.png",
      price: "34.00$",
    },
    {
      label: "godiva dark chocolate",
      imgSrc:
        "/assets/images/godiva_dark_chocolate_with_raspberry_bar_1_533x.png",
      price: "42.20$",
    },
    {
      label: "godiva chocolatier",
      imgSrc: "/assets/images/img_03_533x.png",
      price: "5.00$",
    },
    {
      label: "godiva classic",
      imgSrc:
        "/assets/images/godiva_chocolatier_classic_gold_ballotin_1_533x.png",
      price: "20.00$",
    },
    {
      label: "fairy tail brownie",
      imgSrc:
        "/assets/images/fairytale_brownies_home_sweet_home_morsel_36_gift_box_01_533x.png",
      price: "95.00$",
    },
    {
      label: "fairy tail cookie",
      imgSrc:
        "/assets/images/fairytale_brownies_home_sweet_home_deluxe_cookie_and_sprite_1_720x.png",
      price: "105.00$",
    },
    {
      label: "godiva classic v.2.3",
      imgSrc:
        "/assets/images/godiva_chocolatier_classic_gold_ballotin_1_533x.png",
      price: "28.00$",
    },
    {
      label: "fairy tail v.2",
      imgSrc:
        "/assets/images/fairytale_brownies_home_sweet_home_morsel_36_gift_box_01_533x.png",
      price: "9.00$",
    },
    {
      label: "fairy tail cookie v.2",
      imgSrc:
        "/assets/images/fairytale_brownies_home_sweet_home_deluxe_cookie_and_sprite_1_720x.png",
      price: "1.00$",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalpages = Math.ceil(allProducts.length / productsPerPage);

  const handleLoadMore = () => {
    if (currentPage >= 0 && currentPage < totalpages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleLoadLess = () => {
    if (currentPage > 0 && currentPage < totalpages) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const displayedProducts = allProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <div className="product-grid">
      <div
        className="forfrid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        {displayedProducts.map(({ label, imgSrc, price }) => (
          <div  className="product-item">
            <Products LableTag={label} ImgSrc={imgSrc} price={price} />
          </div>
        ))}
      </div>

      <div className="arrow-buttons">
        <ArrowLeftIcon
          onClick={handleLoadLess}
          className="load-more-button"
          style={{
            visibility: currentPage > 0 ? "visible" : "hidden",
            fontSize: "5rem",
            transition: "350ms",
          }} // Hide if on the first page
        />
        <ArrowRightIcon
          onClick={handleLoadMore}
          className="load-more-button"
          style={{
            visibility:
              displayedProducts.length === productsPerPage &&
              displayedProducts.length < allProducts.length
                ? "visible"
                : "hidden",
            fontSize: "5rem",
            transition: "350ms",
          }} // Hide if no more products to load
        />
      </div>
    </div>
  );
};

export default ProductsGrid;
