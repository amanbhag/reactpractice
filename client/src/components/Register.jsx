import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { createUser } from "../api/auth";

const Register = () => {
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setuserDetails({ ...userDetails, [name]: value });
  };

  const { name, email, password } = userDetails;

  let handleSubmit = async (e) => {
    let { name, value } = e.target;
    e.preventDefault();

    const response = await createUser(userDetails);
    console.log("response: ", response);
    if (response.error) return console.log(response.error);
  };

  return (
    <div className="h-screen">
      <div className="h-full max-w-7xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row min-h-screen">
          <div class="shrink-1 mb-12 grow-0 basis-auto  md:mb-0  md:shrink-0 lg:w-6/12 xl:w-6/12 md:w-2/3">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div className="h-screen w-screen">
            <div>
              <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                  <a href="/">
                    <h3 className="text-4xl font-bold text-purple-600">
                      React.
                    </h3>
                  </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Name
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="text"
                          name="name"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          onChange={handleChange}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Email
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="email"
                          name="email"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          onChange={handleChange}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 undefined"
                      >
                        Password
                      </label>
                      <div className="flex flex-col items-start">
                        <input
                          type="password"
                          name="password"
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          onChange={handleChange}
                          value={password}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                      <Link
                        className="text-sm text-gray-600 underline hover:text-gray-900"
                        to="/login"
                      >
                        Already registered?
                      </Link>

                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
