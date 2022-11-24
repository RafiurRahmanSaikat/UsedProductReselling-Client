import React from "react";
import Card from "./components/Card";

const ProductCategories = () => {
  return (
    <section className="w-[90vw] mx-auto">
      <p className="m-4 bg-gradient-to-r from-cyan-500 to-blue-500  w-40 p-4 font-bold text-3xl text-white rounded-full mx-auto items-center justify-center">
        Category
      </p>
      <div className="grid gap-8  lg:grid-cols-3 md:grid-cols-2 justify-center items-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default ProductCategories;
