import React from "react";

const Hero = () => {
  return (
    <section className="mx-6">
      <div className="bg-gradient-to-r  from-cyan-500 via-purple-500 to-blue-500 rounded-3xl ">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
            Buy Your Dream Bike !!
          </h1>
          <p className="mt-6 font-semibold mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
            Dream Bike is a buy & sell website where you can buy any used bikes in a reasonable price .
          </p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1624870420774-8b3b08b7db0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
        alt=""
        className=" object-contain mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
    </section>
  );
};

export default Hero;
