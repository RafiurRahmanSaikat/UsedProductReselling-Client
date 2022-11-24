import { Button } from "@material-tailwind/react";
import React from "react";

const Card = ({}) => {
  return (
    <>
      <article className="flex flex-col p-4 rounded-3xl outline outline-1 -outline-offset-4">
        <img
          alt=""
          className="rounded-md object-cover w-full h-52 bg-gray-500"
          src="https://source.unsplash.com/200x200/?fashion?1"
        />

        <div className="flex flex-col flex-1 p-6">
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            Cat name
          </h3>
          <Button color="amber" size="lg">
            See All bikes
          </Button>
        </div>
      </article>
    </>
  );
};

export default Card;
