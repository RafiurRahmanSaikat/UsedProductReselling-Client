import React from "react";
import ProductCategories from "../ProductsCategory/ProductCategories";
import Advertise from "./components/Advertise";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

const Home = () => {
  return (
    <section className="">
      <Hero></Hero>
      {/* <Advertise></Advertise> */}
      <ProductCategories></ProductCategories>
      <Newsletter></Newsletter>
    </section>
  );
};

export default Home;
