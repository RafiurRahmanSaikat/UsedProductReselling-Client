import { Button } from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import verifiedSeller from "../../assets/verified.png";
import Loading from "../../common/Loading";
import BookingModal from "../ProductsCategory/components/BookingModal";

const CategoryPage = () => {
  const { id } = useParams();
  const [selectedBike, setSelectedBike] = useState("nai");
  const { data, isLoading } = useQuery({
    queryKey: ["category", id],
    queryFn: async () => {
      const res = await fetch(
        `https://dream-bike-theta.vercel.app/category/?search=${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const REPORT = (id) => {
    fetch(`https://dream-bike-theta.vercel.app/updatestatus/?id=${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ reported: true }),
    })
      .then((res) => toast.info("Reported Items"))
      .catch((error) => {
        toast.error(error, error.massage);
        console.error(error);
      });
  };

  const BikeData = data?.bikes;
  const CategoryData = data?.category;
  const DATA = BikeData?.filter((bike) => !bike?.sold);

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <section className="w-[95vw] mx-auto space-x-8 grid grid-cols-4">
        {/* Selected Cat Info Start */}
        <section className="bg-gray-200 rounded-3xl h-[100vh] hidden md:block text-gray-800">
          <p className="text-2xl m-8 font-bold">{CategoryData?.[0].brand}</p>
          <p className="text-2xl font-bold">Total Bikes Found {DATA?.length}</p>
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
            {DATA && DATA.length === 0 ? (
              <p className="text-5xl text-center ">
                Opps Sorry !! <br /> <br /> NO BIKES FOUND FOR SALE
              </p>
            ) : (
              DATA?.map((data) => (
                <article
                  key={data._id}
                  className="flex flex-col p-4 rounded-3xl outline outline-1 -outline-offset-4"
                >
                  <div className="flex m-4 justify-between">
                    <p>
                      <span className="font-bold ">Seller name</span> :{" "}
                      {data?.sellername}{" "}
                    </p>

                    {data?.sellerVerified && (
                      <>
                        <span className=" font-bold">Verified Seller</span>{" "}
                        <img className="w-8" src={verifiedSeller} alt="" />
                      </>
                    )}
                  </div>
                  <img
                    alt=""
                    className="rounded-md object-left-bottom mx-auto  w-60 h-80 bg-gray-500"
                    src={data?.bikePic}
                  />
                  <p className=" py-2 text-lg font-semibold ">{data?.model}</p>
                  <p className="  font-semibold">Location : {data?.location}</p>

                  <p className="  font-semibold">
                    Condition : {data?.condition}
                  </p>

                  <p className="">
                    <span className="font-bold ">Orginal Price :</span>{" "}
                    {data?.orginalPrice}{" "}
                  </p>
                  <p className="text-red-600 font font-semibold">
                    Selling Price :{data?.sellingPrice}
                  </p>

                  <p>Used About {data?.used} Year </p>
                  <p>Purched Time : {data?.used} Year Ago </p>

                  <div className="flex gap-2 flex-wrap m-2 justify-around items-center">
                    <p>Post Time : {data?.posted}</p>
                    <button
                      onClick={() => REPORT(data._id)}
                      className="btn btn-warning btn-sm "
                    >
                      Report To Admin
                    </button>
                    <label
                      onClick={() => setSelectedBike(data)}
                      htmlFor="my-modal-3"
                      className="btn btn-primary btn-sm  "
                    >
                      Book Now
                    </label>
                  </div>
                </article>
              ))
            )}

            <BookingModal data={selectedBike}></BookingModal>
          </div>
        </section>
      </section>
    </>
  );
};

export default CategoryPage;
