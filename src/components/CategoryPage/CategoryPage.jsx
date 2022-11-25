import { Button } from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";

import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/category/?search=${id}`);
      const data = await res.json();
      return data;
    },
  });

  // const {bikes,category}={data}
  const BikeData = data?.bikes;
  const CategoryData = data?.category;
  // console.log("Bike DATA MONGODB", BikeData);
  // {BikeData &&
  //   BikeData.map(i=>console.log(i.bikePic))
  // }

  return (
    <>
      <section className="w-[95vw] mx-auto space-x-8 grid grid-cols-4">
        {/* Selected Cat Info Start */}
        <section className="bg-gray-200 rounded-3xl h-[100vh] hidden md:block text-gray-800">
          <p className="text-2xl m-8 font-bold">{CategoryData?.[0].brand}</p>
          <p className="text-2xl font-bold">
            Total Bikes Found {BikeData?.length}
          </p>
          <div className="flex flex-col max-w-md p-6  text-gray-900">
            <img
              src={CategoryData?.[0].brandPic}
              alt=""
              className="flex-shrink-0  object-contain h-64 rounded-md sm:h-96  aspect-square"
            />
            <div>
              <p className="p-4 -mt-8 text-justify">
                {CategoryData?.[0].about.slice(0, 200)}
              </p>
            </div>
            <Link className="m-4" to="/">
              <Button>Back TO Home</Button>
            </Link>
          </div>
        </section>
        {/* Selected Cat Info End */}

        <section className="col-span-3 w-full">
          <div className="mx-auto justify-center gap-8 items-center  grid  grid-cols-1 md:p-8 lg:grid-cols-2 md:grid-cols-1">
            {BikeData &&
              BikeData?.map((data) => (
                
                  <article
                    key={data._id}
                    className="flex flex-col p-4 rounded-3xl outline outline-1 -outline-offset-4"
                  >
                    <div className="flex justify-between">
                    <p className="">Seller name : {data?.sellername} </p>
                      <p className="text-lg font-semibold">Verified </p>
                    </div>
                    <img
                      alt=""
                      className="rounded-md object-left-bottom mx-auto  w-60 h-80 bg-gray-500"
                      src={data?.bikePic}
                    />
                    <p className=" py-2 text-lg font-semibold ">
                      {data?.model}
                    </p>

                    <p className="">Orginal Price : {data?.orginalPrice} </p>
                    <p className="text-red-600 font font-semibold">
                      Selling Price :{data?.sellingPrice}
                    </p>
                    <p className="text-lg font-semibold">
                      Location : {data?.location}
                    </p>
                    <p className="">Seller name : {data?.sellername} </p>
                    <p className="text-lg font-semibold">
                      Condition : {data?.condition}{" "}
                    </p>

                    <p className="">Purched IN {data?.purchased} </p>

                    <div className="flex justify-around items-center">
                      <p className="">Post Time : {"DOM LO"}</p>
                      <Button color="indigo" size="sm">
                        <Link to="/category/:id">Book Now</Link>
                      </Button>
                    </div>
                  </article>
                
              ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default CategoryPage;
