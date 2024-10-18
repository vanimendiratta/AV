"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { useUser } from "../../context/UserContext";
import { FaCamera } from "react-icons/fa";

const UserProfile = () => {
  const { user, setUser } = useUser();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    birthdate: "",
    profilePicture: "",
  });

  const [profileImage, setProfileImage] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const firstName = localStorage.getItem("userFirstName");
    const lastName = localStorage.getItem("userLastName");
    const email = localStorage.getItem("userEmail");
    const mobile = localStorage.getItem("userPhone");
    const address = localStorage.getItem("userAddress");
    const birthdate = localStorage.getItem("userBirthdate");

    setUserData({
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      mobile: mobile || "",
      address: address || "123 Main Street, City, Country",
      birthdate: birthdate || "1990-01-01",
      profilePicture: "", // You can also load profile picture from localStorage if needed
    });
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
      setUserData((prevData) => ({
        ...prevData,
        profilePicture: imageURL,
      }));
      // Optionally, save the image in localStorage or upload to backend
      localStorage.setItem("userProfilePicture", imageURL);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Updated user data: ", userData);

    // Update localStorage with the updated user data
    localStorage.setItem("userFirstName", userData.firstName);
    localStorage.setItem("userLastName", userData.lastName);
    localStorage.setItem("userEmail", userData.email);
    localStorage.setItem("userPhone", userData.mobile);
    localStorage.setItem("userAddress", userData.address);
    localStorage.setItem("userBirthdate", userData.birthdate);

    alert("Profile updated successfully!");

    // Optionally update user context or backend API here
    setUser(userData);
    // If connected to a backend, you would typically send a PUT request here
    // Example:
    // await fetch("/api/updateProfile", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
  };

  return (
    <>
      <Navbar isAuthButton={false} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] p-6 mt-5">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Profile</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 shadow-md">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <FaCamera size={30} />
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleImageUpload}
                  title="Upload Profile Picture"
                  accept="image/*"
                />
                <p className="absolute bottom-2 right-2 bg-gray-100 text-sm px-2 py-1 rounded-md shadow">
                  Edit
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={userData.mobile}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={userData.birthdate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleFormSubmit}
                className="w-full py-3 px-6 bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#F4A261] text-white font-bold text-lg rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:from-[#E76F51] hover:via-[#D9412C] hover:to-[#E76F51] focus:outline-none focus:ring-4 focus:ring-[#F4A261]/50"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
