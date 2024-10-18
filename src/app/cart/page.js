"use client"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Cartslice";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { handleUpgrade } from "@/src/api/payment";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items) || [];
  const dispatch = useDispatch();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const router = useRouter();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);
  const gstRate = 0.18;
  const gstAmount = (totalPrice * gstRate).toFixed(2);
  const totalPriceWithGST = (totalPrice * (1 + gstRate)).toFixed(2);

  const proceedToPayment = async () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (isLoggedIn) {
      try {
        const paymentResponse = await handleUpgrade(
          totalPriceWithGST,
          cartItems.map((item) =>
            item.totalPrice === "1999"
              ? "BASICS_OF_SUICIDALITY"
              : item.totalPrice === "2999"
              ? "QPR_TRAINING"
              : "QPR_WORKSHOP"
          )
        );

        if (paymentResponse.success) {
          router.push("/SuccessPayment");
        } else {
          router.push("/Paymentfailed");
        }
      } catch (error) {
        console.error("Payment Error:", error);
        router.push("/Paymentfailed");
      }
    } else {
      setShowLoginPopup(true);
    }
  };

  const closePopup = () => setShowLoginPopup(false);

  const goToHome = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar showLoginPopup={showLoginPopup} closePopup={closePopup} goToHome={goToHome} />
      <div className="container mx-auto px-4 py-8 bg-[#F4F1E9] mt-10">
        <h2 className="text-3xl font-bold mb-4 text-[#2D6A4F]">Your Courses</h2>
        <p className="text-gray-600 mb-6">{`${cartItems.length} items in your bag`}</p>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row lg:gap-6">
            {/* Left Section: Course Items */}
            <div className="flex-1 space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 bg-white rounded-lg border shadow-lg relative"
                >
                  <AiOutlineClose
                    className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-red-500 transition-colors"
                    onClick={() => handleRemove(item.id)}
                    size={24}
                  />
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.imageSrc || "/default-image.png"}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-[#3E2723]">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-lg font-semibold text-[#2C6B54]">₹{item.totalPrice}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Section: Detailed Pricing with Fixed Width */}
            <div className="mt-8 lg:mt-0 lg:w-[350px] xl:w-[400px] bg-white p-6 rounded-lg shadow-lg border border-[#2D6A4F]">
              <h3 className="text-lg font-bold mb-4 text-[#2D6A4F]">Detailed Pricing</h3>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-900 font-semibold">Rs. {totalPrice}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700">GST (18%)</p>
                <p className="text-gray-900 font-semibold">Rs. {gstAmount}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-xl font-bold">Total (Inclusive of GST)</p>
                <p className="text-xl font-bold text-[#2D6A4F]">Rs. {totalPriceWithGST}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#2D6A4F] text-white py-3 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-[#24523E]"
                onClick={proceedToPayment}
              >
                Proceed to Pay Rs {totalPriceWithGST}
              </motion.button>
            </div>
          </div>
        ) : (
          <p className="text-gray-700">Your cart is empty.</p>
        )}

        {/* Login Popup */}
        {showLoginPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 relative w-96">
              <AiOutlineClose
                className="absolute top-2 right-2 cursor-pointer"
                onClick={closePopup}
                size={24}
              />
              <h3 className="text-lg font-semibold mb-4">Please Login</h3>
              <p>You must be logged in to proceed with payment.</p>
              <button
                onClick={goToHome}
                className="mt-4 w-full bg-[#FFB74D] text-white py-2 rounded-lg hover:bg-[#FFA726]"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
