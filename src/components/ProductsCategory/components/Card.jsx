import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { brandPic, brand } = data;

  return (
    <>
      <article className="flex flex-col p-4 rounded-3xl outline outline-1 -outline-offset-4">
        <img
          alt=""
          className="rounded-md object-contain p-4 w-full h-52 bg-gray-400"
          src={brandPic}
        />

        <div className="flex flex-col flex-1 p-6">
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
           {brand}
          </h3>
          <Link to={`/category/${brand}`}>
            <Button color="amber" size="lg">
              See All bikes
            </Button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default Card;
