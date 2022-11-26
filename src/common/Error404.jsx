import { ErrorResponse } from "@remix-run/router";
import React from "react";
import { Link } from "react-router-dom";
import ERRORPIC from "../assets/404.gif";
const Error404 = () => {
  return (
    <div>
        
      <section className="flex items-center h-[100vh] w-[100vw] text-gray-800">
        
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Link className="px-8 py-3  font-semibold rounded bg-red-600 text-gray-50">
            Back to homepage
          </Link>
          <img src={ERRORPIC} alt="" />
         
        </div>
      </section>
    </div>
  );
};

export default Error404;
