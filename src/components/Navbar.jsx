"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import profileSvg from "../../public/user-circle-svgrepo-com.svg";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ onOpenSignUp, isAuthButton }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart); // Access cart items from Redux

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    window.location.reload();
  };

  const handleProfileClick = () => {
    router.push("/Userdetails");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#4A2C2A] text-[#F5F5F5] shadow-lg p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-xl">
        <Link href="/" className="hover:text-[#FFD700] transition-colors">
          asmiVeda
        </Link>
      </div>

      {/* Main Links - Hidden on Mobile */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link href="/" className="hover:text-[#FFD700] transition-colors">
          Home
        </Link>
        <Link href="/ABOUT" className="hover:text-[#FFD700] transition-colors">
          About
        </Link>
        <Link href="/#programs" className="hover:text-[#FFD700] transition-colors">
          Programs
        </Link>
        <Link href="/Contactus" className="hover:text-[#FFD700] transition-colors">
          Contact Us
        </Link>

        {/* Cart - Moved next to Contact Us */}
        <div className="relative hover:text-[#FFD700] transition-colors">
          <Link href="/cart">
            <FaShoppingCart className="inline" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Profile or Signup/Login - Shown in Navbar on Larger Screens */}
      <div className="flex items-center space-x-6">
        {user ? (
          <div className="relative group flex items-center space-x-2">
            <Image src={profileSvg} alt="User Logo" width={20} height={20} />
            <span>{user.name}</span>
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={handleProfileClick}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          // Check if isAuthButton is false and user is not logged in
          isAuthButton ? (
            <div className="hidden md:block">
              <button
                onClick={onOpenSignUp}
                className="bg-[#FFD700] text-[#4A2C2A] px-4 py-2 rounded-lg hover:bg-[#FFC107] transition-colors"
              >
                Signup/Login
              </button>
            </div>
          ) : null // Don't render anything if isAuthButton is false
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#F5F5F5] hover:text-[#FFD700] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#4A2C2A] text-[#F5F5F5] p-4 space-y-4">
          <Link href="/" className="block hover:text-[#FFD700] transition-colors">
            Home
          </Link>
          <Link href="/ABOUT" className="block hover:text-[#FFD700] transition-colors">
            About
          </Link>
          <Link href="/#programs" className="block hover:text-[#FFD700] transition-colors">
            Programs
          </Link>
          <Link href="/Contactus" className="block hover:text-[#FFD700] transition-colors">
            Contact Us
          </Link>

          {/* Cart for Mobile */}
          <div className="relative hover:text-[#FFD700] transition-colors">
            <Link href="/cart">
              <FaShoppingCart className="inline" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Signup/Login for Mobile Drawer */}
          {isAuthButton && !user && ( // Render only if isAuthButton is true and user is not logged in
            <button
              onClick={onOpenSignUp}
              className="bg-[#FFD700] text-[#4A2C2A] px-4 py-2 rounded-lg hover:bg-[#FFC107] transition-colors w-full"
            >
              Signup/Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
