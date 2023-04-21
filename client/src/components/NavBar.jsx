import React from "react";

const NavBar = () => {
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0">
              <span class="text-white font-bold text-lg">React</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="hidden sm:block">
              <button class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </button>
              <button class="ml-4 bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign Up
              </button>
            </div>
            <div class="-mr-2 flex sm:hidden">
              <button
                class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
        </div>
      </div>
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </a>
          <a
            href="#"
            class="mt-1 bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
