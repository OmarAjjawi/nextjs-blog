import React from "react";
import Announcment from "../../componenets/UI/Announcment";
import Navbar from "../../componenets/UI/Navbar";
import ProductList from "../../componenets/Products/ProductList";
import Products from "../../componenets/Products/Products";
import Footer from "../../componenets/UI/Footer";

const index = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <ProductList />
      <Products />
      <Footer />
    </>
  );
};

export default index;
