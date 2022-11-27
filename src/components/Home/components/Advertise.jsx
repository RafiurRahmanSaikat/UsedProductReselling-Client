import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../../common/Loading";
const Advertise = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(`https://dream-bike-theta.vercel.app/advertise`);
      const data = await res.json();
      return data;
    },
  });


  const DATA = data?.filter((items) => !items.sold);

  return ( isLoading ? <Loading></Loading>:
    <>
      {DATA && DATA.length > 0 && (
        <section className="py-6 sm:py-12  text-gray-800">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Trending Items </h2>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {DATA &&
                DATA.length > 0 &&
                DATA.map((bike) => (
                  <article key={bike._id} className="flex flex-col bg-gray-50">
                    <Link
                     to={`/category/${bike?.brand}`}
                      aria-label="Te nulla oportere reprimique his dolorum"
                    >
                      <img
                        alt={bike?.bikePic}
                        className="object-cover w-full h-52 bg-gray-500"
                        src={bike?.bikePic}
                      />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                      <p
                       
                        className="text-lg tracking-wider uppercase hover:underline text-sky-600"
                      >
                        {bike?.model}
                      </p>
                      <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                        Condition : {bike?.condition}{" "}
                        <p className="text-center text-red-700 ">
                          Price {bike?.sellingPrice} TK
                        </p>
                      </h3>
                      <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                        <span>{bike?.posted}</span>
                        <span>{bike?.brand}</span>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Advertise;
