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
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-xl p-10 bg-white rounded-lg shadow-lg border border-gray-400">
        {isLogin ? (
          <>
            <LoginForm toggleAuthMode={toggleAuthMode} />

            <div className="text-center mt-4">
              <p className="text-sm font-medium">
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
              <p className="text-sm font-medium">
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
