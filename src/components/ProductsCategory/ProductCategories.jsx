import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../common/Loading";

import Card from "./components/Card";

const ProductCategories = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`https://dream-bike-theta.vercel.app/category`);
      const data = await res.json();
      return data;
    },
  });

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <section className="w-[90vw] mx-auto">
      <h2 className="text-3xl m-4  p-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 text-white  font-extrabold rounded-full w-[30vw] mx-auto">
        Category
      </h2>

      <div className="grid gap-8  lg:grid-cols-3 md:grid-cols-2 justify-center items-center">
        {data?.map((items) => (
          <Card key={items._id} data={items}></Card>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
