import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as necessary
// import Navbar from './Navbar'; // Adjust the path as necessary

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Main content goes here */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search the milk seller"
              className="p-2 border border-gray-500 w-full"
            />
          </div>
          <div className="border border-gray-500 p-4">
            <div className="mb-2 font-bold">User 1</div>
            <div className="mb-2">Names render here and here select the user after selection he render to that seller's data then he can enter the milk data or render according to ID of that seller</div>
            <div className="mb-2 font-bold">User 2</div>
            <div className="font-bold">User 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
