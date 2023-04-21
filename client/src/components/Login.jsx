import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/auth";

export default function Login() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userDetails);
    const response = await login(userDetails);
    console.log("response: ", response);
  };

  return (
    <div className="relative max-w-7xl flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100 mx-auto">
      <div className="flex flex-col p-6 m-auto bg-white rounded-md shadow-md lg:max-w-7xl w-full md:w-1/2">
        <div className="mx-auto">
          <div className="ml-24">
            {" "}
            <h1 className="text-3xl font-semibold text-centerw text-purple-700 underline ">
              Sign in
            </h1>
          </div>

          <div className="text-center">
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email:
                  <input
                    className="  px-4 py-2 mt-2  ml-5 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                    className=" px-4 py-2 mt-2  text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </label>
              </div>
              <button className="mt-2 ml-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </form>
            <div className="flex flex-row justify-center">
              {" "}
              <Link
                to="/password"
                className="text-xs text-purple-600 hover:underline"
              >
                forget password?
              </Link>
              <Link
                to="/delete"
                className="text-xs text-purple-600 hover:underline"
              >
                want to Delete your acc?
              </Link>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Don't have an account?
              <Link
                to="/register"
                className="font-medium text-purple-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
