"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { signUp, login, googleLogin } from "../api/auth"; // Adjust the import path as necessary
import svg from "../../public/svgsignup.svg";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpForm = ({ isVisible, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        console.log("Token Response:", tokenResponse); // Log the entire token response

        const { credential } = tokenResponse; // Directly access credential

        if (!credential) {
          setError("Google Sign-In failed. No credential received.");
          return;
        }

        // Assuming credential is the tokenId you need
        const response = await googleLogin({
          tokenId: credential, // Send the ID token (credential) to the backend
        });

        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("isLoggedIn", true);
          setSuccess("Logged in successfully with Google!");
          onClose();
          window.location.reload();
        } else {
          setError("Google Sign-In failed. Please try again.");
        }
      } catch (error) {
        console.error("Google Sign-In error:", error);
        setError("Google Sign-In error. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Google Sign-In onError:", error);
      setError("Google Sign-In was unsuccessful. Try again later.");
    },
  });

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await signUp({
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      if (response.token) {
        setSuccess("Account created successfully!");
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("isLoggedIn", true);
        onClose();
        window.location.reload();
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      if (error.message.includes("400: User already exists")) {
        setError(
          "User already exists. Please use a different email or try to login."
        );
      } else if (error.message.includes("400: Phone number already used")) {
        setError("Phone number already used for another account.");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login({
        email: formData.email,
        password: formData.password,
      });

      if (response.token) {
        setSuccess("Logged in successfully!");
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("isLoggedIn", true);
        onClose();
        window.location.reload();
      } else {
        setError("Failed to log in. Please try again.");
      }
    } catch (error) {
      if (error.message.includes("400: Invalid credentials")) {
        setError("Invalid credentials!");
      } else {
        setError("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white w-[95%] max-w-[450px] p-8 rounded-2xl shadow-2xl relative overflow-auto max-h-[90vh] md:max-h-[80vh] transition-all transform duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close form"
        >
          &times;
        </button>

        {/* Asmiveda Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={logo}
            alt="Asmiveda Logo"
            width={128}
            height={128}
            className="w-32 h-32 object-cover"
          />
        </div>

        {isSignUp ? (
          <>
            <h2 className="text-3xl font-bold text-center text-brown-900 mb-6">
              Sign Up for Asmiveda
            </h2>
            {/* Form Fields */}
            <form className="space-y-5" onSubmit={handleSignUpSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Set a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Sign Up Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-brown-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:shadow-lg transition-transform transform hover:scale-105 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>

            {/* Error Popup */}
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setError(null)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1 1 0 11-1.414 1.414l-3.536-3.536-3.536 3.536a1 1 0 11-1.414-1.414l3.536-3.536-3.536-3.536a1 1 0 011.414-1.414l3.536 3.536 3.536-3.536a1 1 0 111.414 1.414l-3.536 3.536 3.536 3.536z" />
                  </svg>
                </span>
              </div>
            )}

            {/* Success Popup */}
            {success && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> {success}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setSuccess(null)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1 1 0 11-1.414 1.414l-3.536-3.536-3.536 3.536a1 1 0 11-1.414-1.414l3.536-3.536-3.536-3.536a1 1 0 011.414-1.414l3.536 3.536 3.536-3.536a1 1 0 111.414 1.414l-3.536 3.536 3.536 3.536z" />
                  </svg>
                </span>
              </div>
            )}

            {/* Already have an account */}
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <span
                className="text-green-700 font-semibold cursor-pointer hover:text-green-900"
                onClick={() => setIsSignUp(false)}
              >
                Log in
              </span>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-brown-900 mb-6">
              Log In to Asmiveda
            </h2>
            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleLoginSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-brown-700 text-white py-3 px-6 rounded-full text-lg font-semibold hover:shadow-lg transition-transform transform hover:scale-105 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>

            {/* Error Popup */}
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setError(null)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1 1 0 11-1.414 1.414l-3.536-3.536-3.536 3.536a1 1 0 11-1.414-1.414l3.536-3.536-3.536-3.536a1 1 0 011.414-1.414l3.536 3.536 3.536-3.536a1 1 0 111.414 1.414l-3.536 3.536 3.536 3.536z" />
                  </svg>
                </span>
              </div>
            )}

            {/* Success Popup */}
            {success && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> {success}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setSuccess(null)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1 1 0 11-1.414 1.414l-3.536-3.536-3.536 3.536a1 1 0 11-1.414-1.414l3.536-3.536-3.536-3.536a1 1 0 011.414-1.414l3.536 3.536 3.536-3.536a1 1 0 111.414 1.414l-3.536 3.536 3.536 3.536z" />
                  </svg>
                </span>
              </div>
            )}

            {/* Don't have an account */}
            <div className="mt-4 text-center text-sm">
              Dont have an account?{" "}
              <span
                className="text-green-700 font-semibold cursor-pointer hover:text-green-900"
                onClick={() => setIsSignUp(true)}
              >
                Sign up
              </span>
            </div>
          </>
        )}

        {/* Google Sign-In Button */}
        {/* <div className="flex justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center bg-white text-gray-700 border border-gray-300 rounded-full shadow-sm px-6 py-2 transition-transform transform hover:scale-105"
          >
            <Image src={svg} alt="Google logo" width={25} height={25} />
            <span className="ml-3 font-semibold">Continue with Google</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignUpForm;
