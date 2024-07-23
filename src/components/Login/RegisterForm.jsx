import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLock,
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
    <div className="text-white p-4 md:p-8">
      <h2 className="text-2xl font-semibold mb-5 text-center text-white">
        Register
      </h2>
      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaUser className="text-white mr-2" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              {errors.fullName && (
                <p className="text-[#ff7b7b] text-sm font-semibold">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaPhone className="text-white mr-2" />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-[#B71C1C] text-sm font-semibold">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaEnvelope className="text-white mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Enter your email"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-[#f56c6c] text-sm font-semibold">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextPage}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowRight size={24} className="text-white" />
              </button>
            </div>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaMapMarkerAlt className="text-white mr-2" />
                <input
                  type="text"
                  name="villageName"
                  value={formData.villageName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Enter your village name"
                  required
                />
              </div>
              {errors.villageName && (
                <p className="text-[#B71C1C] text-sm font-semibold">
                  {errors.villageName}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2">
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
                    className="text-white"
                  />
                  <span className="text-white ml-2">Cow</span>
                </label>
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="milkType"
                    value="Buffalo"
                    checked={formData.milkType === "Buffalo"}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white ml-2">Buffalo</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="milkType"
                    value="Both"
                    checked={formData.milkType === "Both"}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white ml-2">Both</span>
                </label>
                {errors.milkType && (
                  <p className="text-[#B71C1C] text-sm font-semibold ml-2">
                    {errors.milkType}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2">
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
                    className="text-white"
                  />
                  <span className="text-white ml-2">Milk Seller</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="Dairy Owner"
                    checked={formData.userType === "Dairy Owner"}
                    onChange={handleInputChange}
                    className="text-white"
                  />
                  <span className="text-white ml-2">Dairy Owner</span>
                </label>
                {errors.userType && (
                  <p className="text-[#B71C1C] text-sm font-semibold ml-2">
                    {errors.userType}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevPage}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowLeft size={24} className="text-white" />
              </button>
              <button
                type="button"
                onClick={handleNextPage}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowRight size={24} className="text-white" />
              </button>
            </div>
          </>
        )}
        {currentPage === 3 && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaLock className="text-white mr-2" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-[#B71C1C] text-sm font-semibold">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2 border-b-2 border-white">
                <FaLock className="text-white mr-2" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-transparent border-none outline-none text-white placeholder-white"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-[#B71C1C] text-sm font-semibold">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-semibold mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="text-white bg-transparent border-none outline-none"
              />
              {fileName && (
                <p className="text-white text-sm mt-2">{fileName}</p>
              )}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevPage}
                className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
              >
                <BsArrowLeft size={24} className="text-white" />
              </button>

              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-green-500 transition duration-300"
              >
                <MdAppRegistration size={24} className="text-white" />
                <span className="text-white font-semibold">Register</span>
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
