import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

const LoginForm = ({ toggleAuthMode }) => {
  return (
    <div className="text-black p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-5 text-center text-green-700">
        Login
      </h2>
      <form>
        <div className="mb-4 flex items-center border-b-2 border-white">
          <FaUser className="text-white mr-2" />
          <input
            type="text"
            className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
            placeholder="Enter your number or email"
            required
          />
        </div>
        <div className="mb-4 flex items-center border-b-2 border-white">
          <FaLock className="text-white mr-2" />
          <input
            type="password"
            className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black font-semibold text-white py-2 rounded-md hover:bg-[#00d684] transition duration-300 flex items-center justify-center space-x-2"
        >
          <span className="font-semibold">Login</span>
          <MdLogin className="w-6 h-6 text-white" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
