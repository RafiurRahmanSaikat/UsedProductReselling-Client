import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../common/Loading";

import Card from "./components/Card";

const ProductCategories = () => {

  const {
    data,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/category`);
      const data = await res.json();
      return data;
    },
  });

  return (
    isLoading ? <Loading></Loading>:
    <section className="w-[90vw] mx-auto">
      <p className="m-4 bg-gradient-to-r from-cyan-500 to-blue-500  w-40 p-4 font-bold text-3xl text-white rounded-full mx-auto items-center justify-center">
        Category
      </p>
      <div className="grid gap-8  lg:grid-cols-3 md:grid-cols-2 justify-center items-center">
        {data?.map((items) => (
          <Card key={items._id} data={items}></Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
