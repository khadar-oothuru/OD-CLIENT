import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setCurrentPage(1); // Reset page to 1 when toggling
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/photorealistic-view-cows-grazing-nature-outdoors_23-2151294197.jpg?t=st=1721728006~exp=1721731606~hmac=10be476e8fd69487ad0e7f22c2abfb57fdd4a4b73af6581592bfd23485191323&w=2000)",
      }}
    >
      <div className="w-full max-w-xl p-10 bg-white bg-opacity-30 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 "  >
        {isLogin ? (
          <>
            <LoginForm toggleAuthMode={toggleAuthMode} />
            <div className="text-center mt-4">
              <p className="text-sm font-medium text-white">
                Don't have an account?{" "}
                <button
                  onClick={toggleAuthMode}
                  className="text-[#00d684] underline"
                >
                  Register
                </button>
              </p>
            </div>
          </>
        ) : (
          <>
            <RegisterForm
              handleProfilePictureChange={handleProfilePictureChange}
              handleSubmit={handleSubmit}
              prevPage={() => setCurrentPage(currentPage - 1)}
              nextPage={() => setCurrentPage(currentPage + 1)}
            />
            <div className="text-center mt-4">
              <p className="text-sm font-medium text-white">
                Already have an account?{" "}
                <button
                  onClick={toggleAuthMode}
                  className="text-[#00d684] underline"
                >
                  Go to Login
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
