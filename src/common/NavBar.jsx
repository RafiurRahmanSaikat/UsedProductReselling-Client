import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  const menu = (
    <>
      <li className="">
        <Link>Dashboard</Link>
      </li>
      <li className="">
        <Link>Blogs</Link>
      </li>
      <li className="">
        <Link>Blogs</Link>
      </li>
    </>
  );

  return (
    <div>
      <nav className="bg-white w-full top-0 z-20">
        <div className="items-center  px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <a href=" ">
              <img
                src="https://www.floatui.com/logo.svg"
                width={120}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div className="flex-1">
              <ul className="justify-end items-center space-y-3 lg:flex lg:space-x-6 lg:space-y-0">
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;