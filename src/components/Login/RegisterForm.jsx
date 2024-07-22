import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLock,
  FaUpload,
} from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";

const RegisterForm = ({
  handleProfilePictureChange,
  handleSubmit,
  prevPage,
  nextPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    villageName: "",
    milkType: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState(""); // State for file name

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : ""); // Update fileName state
    handleProfilePictureChange(e); // Call the prop function
  };

  const validateForm = () => {
    let formErrors = {};
    if (currentPage === 1) {
      if (!formData.fullName) formErrors.fullName = "Full name is required.";
      if (!formData.phoneNumber)
        formErrors.phoneNumber = "Phone number is required.";
      if (!formData.email) formErrors.email = "Email is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        formErrors.email = "Email is invalid.";
    }
    if (currentPage === 2) {
      if (!formData.villageName)
        formErrors.villageName = "Village name is required.";
      if (!formData.milkType) formErrors.milkType = "Milk type is required.";
      if (!formData.userType) formErrors.userType = "User type is required.";
    }
    if (currentPage === 3) {
      if (!formData.password) formErrors.password = "Password is required.";
      if (formData.password !== formData.confirmPassword)
        formErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleNextPage = () => {
    if (validateForm() && currentPage < 3) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="text-black p-4 md:p-8">
     <h2 className="text-2xl font-bold mb-5 text-center text-green-600">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaPhone className="text-gray-500 mr-2" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaEnvelope className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextPage}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowRight size={24} />
              </button>
            </div>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaMapMarkerAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="villageName"
                  value={formData.villageName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Enter your village name"
                  required
                />
              </div>
              {errors.villageName && (
                <p className="text-red-500 text-sm">{errors.villageName}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Milk Type
              </label>
              <div className="flex items-center">
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="milkType"
                    value="Cow"
                    checked={formData.milkType === "Cow"}
                    onChange={handleInputChange}
                    className={`radio radio-success ${
                      errors.milkType ? "border-red-500" : ""
                    }`}
                  />
                  Cow
                </label>
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="milkType"
                    value="Buffalo"
                    checked={formData.milkType === "Buffalo"}
                    onChange={handleInputChange}
                    className={`radio radio-success ${
                      errors.milkType ? "border-red-500" : ""
                    }`}
                  />
                  Buffalo
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="milkType"
                    value="Both"
                    checked={formData.milkType === "Both"}
                    onChange={handleInputChange}
                    className={`radio radio-success ${
                      errors.milkType ? "border-red-500" : ""
                    }`}
                  />
                  Both
                </label>
                {errors.milkType && (
                  <p className="text-red-500 text-sm ml-2">{errors.milkType}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User Type
              </label>
              <div className="flex items-center">
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="userType"
                    value="Milk Seller"
                    checked={formData.userType === "Milk Seller"}
                    onChange={handleInputChange}
                    className={`radio radio-success ${
                      errors.userType ? "border-red-500" : ""
                    }`}
                  />
                  Milk Seller
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="Dairy Owner"
                    checked={formData.userType === "Dairy Owner"}
                    onChange={handleInputChange}
                    className={`radio radio-success ${
                      errors.userType ? "border-red-500" : ""
                    }`}
                  />
                  Dairy Owner
                </label>
                {errors.userType && (
                  <p className="text-red-500 text-sm ml-2">{errors.userType}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevPage}
                className="bg-gray-500 text-white py-1 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowLeft size={24} />
              </button>
              <button
                type="button"
                onClick={handleNextPage}
                className="bg-black text-white py-1 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowRight size={24} />
              </button>
            </div>
          </>
        )}
        {currentPage === 3 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-gray-300">
                <FaLock className="text-gray-500 mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-black"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profile Picture (Optional)
              </label>
              <label
                htmlFor="profilePicture"
                className="flex items-center cursor-pointer bg-gray-100 text-black px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition duration-300"
              >
                <FaUpload className="mr-2" />
                {fileName ? fileName : "Upload File"}
                <input
                  id="profilePicture"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevPage}
                className="bg-gray-500 text-white font-medium   py-1 px-4 rounded-md hover:bg-[#00d684]  transition duration-300"
              >
                <BsArrowLeft size={24} />
              </button>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-[#00d684] transition duration-300 flex items-center justify-center space-x-2"
              >
                <MdAppRegistration className="w-6 h-6" />{" "}
                
                <p className=" font-medium  ">Register</p>{" "}
               
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
