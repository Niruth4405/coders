import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import image from "../images/authPageSide.png";

const SignUp = () => {
  return (
    <div className="mx-auto container w-screen min-h-screen flex flex-col md:flex-row items-center justify-between gap-5 px-6 md:px-16 py-10">
      {/* Left Side - Form Section */}
      <div className="left w-full md:w-1/2 lg:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
        <img className="w-32 md:w-48" src={logo} alt="Logo" />
        <form className="w-full mt-10" action="">
          <div className="inputBox mb-4">
            <input
              required
              type="text"
              placeholder="Username"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="inputBox mb-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="inputBox mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="inputBox mb-4">
            <input
              required
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <p className="text-gray-500 text-sm">
            Already have an account? {" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>

          <button className="btnBlue w-full mt-6 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all">
            Sign Up
          </button>
        </form>
      </div>

      {/* Right Side - Image Section */}
      <div className="right w-full md:w-1/2 lg:w-2/3 hidden md:flex items-center justify-center mt-10 md:mt-0">
        <img className="w-full max-h-[500px] object-cover rounded-lg" src={image} alt="SignUp" />
      </div>
    </div>
  );
};

export default SignUp;
