import React from "react";

const Newsletter = () => {
  return (
    <section className="items-center mt-12 max-w-screen-xl bg-white  mx-auto px-4 gap-4 md:flex xl:px-8 xl:gap-12">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl  text-gray-800 font-semibold lg:text-3xl">
        Get Notification About US
        </h1>
        <p className="text-gray-800 text-base leading-relaxed">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      <div className="mt-5 flex-1">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="items-center justify-center sm:flex"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-800 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
          />
          <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
