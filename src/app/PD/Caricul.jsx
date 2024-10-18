"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "@/src/Redux/Cartslice"; // Adjust the path as necessary
import { AiOutlineClose } from "react-icons/ai"; // Import icon for closing popup

const CurriculumSection = ({
  curriculumData = [],
  courseCardData = {},
  fixedPrice = 3500,
}) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const proceedToPayHandler = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    const course = {
      title: courseCardData.title || "Course Title",
      totalPrice: fixedPrice.toFixed(2),
      imageSrc: courseCardData.imageSrc || "/default-image.png",
    };

    if (isLoggedIn) {
      dispatch(addToCart(course)); // Add course to cart
      alert(`${course.title} added to cart!`);
      router.push("/cart"); // Redirect to the cart page
    } else {
      setShowLoginPopup(true); // Show login popup if not logged in
    }
  };

  const addToCartHandler = () => {
    const course = {
      title: courseCardData.title || "Course Title",
      totalPrice: fixedPrice.toFixed(2),
      imageSrc: courseCardData.imageSrc || "/default-image.png",
    };

    dispatch(addToCart(course));
    alert(`${course.title} added to cart!`);
  };

  const closePopup = () => {
    setShowLoginPopup(false);
  };

  const goToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 py-8 bg-[#F4F1E9]">
      {/* Left Side - Curriculum */}
      <div className="flex-1 mb-8 lg:mb-0 lg:mr-6">
        <h2 className="text-4xl font-bold mb-4 text-[#2D6A4F]">Curriculum</h2>
        {curriculumData.length > 0 ? (
          curriculumData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg mb-8 bg-[#FFFFFF] border border-[#A5D6A7] shadow-lg shadow-[#A5D6A7]/50"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#2C6B54]">{item.title}</h3>
              {item.description && item.description.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-[#2C6B54]">
                  {item.description.map((description, topicIndex) => (
                    <li key={topicIndex}>{description}</li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-700">No curriculum available.</p>
        )}
      </div>

      {/* Right Side - Sticky Course Card */}
      <div className="lg:w-1/3">
        <div className="sticky top-20 bg-[#FFFFFF] border border-[#D0BFA1] rounded-lg p-6 shadow-lg shadow-[#D0BFA1]/50">
          <Image
            src={courseCardData.imageSrc || "/default-image.png"}
            alt={courseCardData.imageAlt || "Course Brochure"}
            width={500}
            height={300}
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-4 text-[#3E2723]">{courseCardData.title || "Course Title"}</h3>
          <div className="mb-4">
            <p className="text-lg font-bold text-[#2D6A4F] mt-4">Total Price: Rs {fixedPrice.toFixed(2)}</p>
            <p className="text-xs">Exclusive of GST</p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCartHandler}
            className="bg-[#8B5E3C] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#704831] transition-colors mb-4 w-full text-center"
          >
            Add to Cart
          </button>

          {/* Proceed to Payment Button */}
          <button
            onClick={proceedToPayHandler}
            className="bg-[#2D6A4F] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#24523E] transition-colors w-full text-center"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <AiOutlineClose
              className="absolute top-2 right-2 cursor-pointer"
              onClick={closePopup}
              size={20}
            />
            <h2 className="text-2xl font-bold mb-4">Login or Sign Up</h2>
            <p className="mb-4">You need to log in or sign up to proceed with the payment.</p>
            <button
              onClick={goToHome}
              className="bg-[#FFD700] text-[#4A2C2A] px-4 py-2 rounded-lg hover:bg-[#FFC107] transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurriculumSection;
