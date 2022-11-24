import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  return (
    <>
      <section className="w-[95vw] mx-auto space-x-8 grid grid-cols-4">
        {/* Selected Cat Info Start */}

        <section className="bg-gray-200 rounded-3xl h-[100vh] hidden md:block text-gray-800">
          <p className="text-2xl m-8 font-bold">Category Name</p>
          <div className="flex flex-col max-w-md p-6  text-gray-800">
            <img
              src="https://source.unsplash.com/200x200/?portrait?2"
              alt=""
              className="flex-shrink-0  object-cover h-64 rounded-md sm:h-96  aspect-square"
            />
            <div>
              <p className="p-4 m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <p>Brand Name</p>
              <p className="text-2xl font-bold">Total Bikes 01</p>
            </div>
            <Link className="m-4" to="/">
              <Button>Back TO Home</Button>
            </Link>
          </div>
        </section>

        {/* Selected Cat Info End */}

        <section className="col-span-3 w-full">
          <div className="mx-auto justify-center gap-8 items-center  grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            <article className="flex flex-col p-4 rounded-3xl outline outline-1 -outline-offset-4">
              <div className="flex justify-between">
                <p className="">Seller name : TOM </p>
                <p className="text-lg font-semibold">Verified </p>
              </div>
              <img
                alt=""
                className="rounded-md object-cover w-full h-52 bg-gray-500"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
              <p className=" py-2 text-lg font-semibold ">Bike name</p>

              <p className="">Orginal Price : 50 </p>
              <p className="text-red-600 font font-semibold">
                Selling Price : 5000</p>
              <p className="text-lg font-semibold">Location : Ugand </p>
              <p className="text-lg font-semibold">Condition :Good </p>

              <p className="">Purched IN 1997 </p>

             <div className="flex justify-around items-center">
             <p className="">Post Time : 12 AM</p>
             <Button color="indigo" size="sm">
                <Link to="/category/:id">Book Now</Link>
              </Button>
              
             </div>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};

export default CategoryPage;
