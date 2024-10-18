"use client"
import React, { useState } from 'react';

const AuthModal = () => {
  // State to handle modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to toggle between login and signup form
  const [isLogin, setIsLogin] = useState(true);
  
  // Handle modal visibility toggle
  const toggleModal = () => setShowModal(!showModal);

  // Switch between Login and Signup
  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <>
      {/* Button to trigger the modal */}
      <button
        onClick={toggleModal}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg">
        {isLogin ? "Login" : "Sign Up"}
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-auto p-8 rounded-lg shadow-lg relative">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>

            {isLogin ? (
              <form className="space-y-4">
                {/* Login Form */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                  Login
                </button>
              </form>
            ) : (
              <form className="space-y-4">
                {/* Signup Form */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
                >
                  Sign Up
                </button>
              </form>
            )}

            {/* Switch between Login and Signup */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                {isLogin
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  onClick={toggleAuthMode}
                  className="text-blue-500 hover:underline"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
