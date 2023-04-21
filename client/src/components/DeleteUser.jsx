import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteuser } from "../api/auth";

const DeleteUser = () => {
  const [userDetails, setuserDetails] = useState({
    email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setuserDetails((prevuserDetails) => ({
      ...prevuserDetails,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await deleteuser(userDetails);
    console.log("response: ", response);
    if (response?.error) return console.log(response.error);
  };
  return (
    <div className="h-screen w-screen">
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">React.</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={handleChange}
                    value={userDetails.email}
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
                  Delete acc
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
