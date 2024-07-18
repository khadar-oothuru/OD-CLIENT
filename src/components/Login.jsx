import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full max-w-md">
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isLogin ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm">
              Don't have an account?{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 underline"
              >
                Register
              </button>
            </p>
          </div>
        </div>
        <div
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isLogin ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-sm">
              Already have an account?{" "}
              <button
                onClick={toggleAuthMode}
                className="text-blue-500 underline"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
