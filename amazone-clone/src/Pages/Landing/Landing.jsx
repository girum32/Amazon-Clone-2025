import React from "react";
import Layout from "../../components/Layout/Layout.jsx";
import CarouselEffect from "../../components/Carousel/Carousel.jsx";
import Category from "../../components/Category/Category.jsx";
import Product from "../../components/Product/Product.jsx";

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
