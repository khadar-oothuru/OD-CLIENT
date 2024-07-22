import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-white p-4 sm:px-20 border-b border-gray-500">
      <div className="navbar-start">
        <div className="dropdown relative">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li className="mb-4 transform transition-transform duration-300 hover:scale-105">
              <Link
                to="/about"
                className="text-black hover:text-[#00d684] font-medium text-lg"
              >
                About Us
              </Link>
            </li>
            <li className="mb-4 transform transition-transform duration-300 hover:scale-105">
              <Link
                to="/feed"
                className="text-black hover:text-[#00d684] font-medium text-lg"
              >
                Feed suggestions
              </Link>
            </li>
            <li className="mb-4 transform transition-transform duration-300 hover:scale-105">
              <Link
                to="/market"
                className="text-black hover:text-[#00d684] font-medium text-lg"
              >
                Market Price
              </Link>
            </li>
            <li className="mb-4 transform transition-transform duration-300 hover:scale-105">
              <Link
                to="/news"
                className="text-black hover:text-[#00d684] font-medium text-lg"
              >
                Latest News
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          // className="btn btn-ghost text-4xl font-bold"
          className="text-4xl font-bold"
          style={{
            color: "#00a264",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          OurDiary
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-10">
          <li className="transform transition-transform duration-300 hover:scale-105">
            <Link
              to="/about"
              className="text-black hover:text-[#00d684] font-medium"
            >
              About Us
            </Link>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-105">
            <Link
              to="/feed"
              className="text-black hover:text-[#00d684] font-medium"
            >
              Feed suggestions
            </Link>
          </li>
          <li className="transform transition-transform duration-300 hover:scale-105">
            <Link
              to="/market"
              className="text-black hover:text-[#00d684] font-medium"
            >
              Market Price
            </Link>
          </li>
          <li className=" transform transition-transform duration-300 hover:scale-105">
            <Link
              to="/news"
              className="text-black hover:text-[#00d684] font-medium"
            >
              Latest News
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link
          to="/login"
          className="btn hover:bg-[#00d684] hover:text-white text-white flex items-center"
        >
          <span className="ml-2">Login / Register</span>

          <MdLogin className="w-6 h-6" />
        </Link>
      </div>
      <div className="navbar-end flex lg:hidden">
        <Link
          to="/login"
          className="btn hover:bg-[#00d684] hover:text-white text-white flex items-center"
        >
          <span className="ml-2">Login / Register</span>
          <MdLogin className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
