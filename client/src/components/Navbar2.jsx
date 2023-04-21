import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [nav, setnav] = useState(false);
  const handleClick = () => {
    setnav(!nav);
    console.log("nav: ", nav);
  };
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-cyan-800">
        <div className=" relative flex items-center justify-between h-16 w-auto">
          <div className="w-full">
            <h1 className="text-white font-bold text-lg">React.</h1>
          </div>
          <div className="hidden md:flex flex-row ml-28 items-center ">
            {" "}
            <button class="bg-gray-900 text-white px-auto py-auto h-6 w-16 rounded-md text-sm font-medium">
              <Link to="/login">Log in</Link>
            </button>
            <button class="bg-gray-900 text-white px-auto py-auto h-6 w-16 rounded-md text-sm ml-4 font-medium">
              <Link to="/register">Sign up</Link>
            </button>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              onClick={handleClick}
              class={
                nav
                  ? "bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  : "bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 "
              }
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {nav && (
          <div className="py-2">
            <div>
              <h1 className="bg-gray-900 rounded-md px-2 py-2 text-white">
                <Link to="/login">Log in</Link>
              </h1>
            </div>
            <div>
              <h1 className="bg-gray-900 rounded-md px-2 py-2  my-1 text-white">
                <Link to="/register">Sign up</Link>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
