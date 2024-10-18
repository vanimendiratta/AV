"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
const PaymentFailed = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (<>
 
    <Navbar isAuthButton={false}/>
    <div className="flex items-center justify-center min-h-screen bg-[#F4F1E9]">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-[#D0BFA1]">
        <Image
          src="/logo.png" // Make sure to add an appropriate SVG or image in your public directory
          alt="Payment Failed"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-[#E53935] mb-4">Payment Failed</h1>
        <p className="text-gray-700 mb-6">
          Unfortunately, your payment could not be processed. Please try again or contact support if the issue persists.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-[#FFB74D] text-[#3E2723] font-bold py-2 px-6 rounded-lg hover:bg-[#FFA726] transition-colors"
        >
          Return to Home
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PaymentFailed;
