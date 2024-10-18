"use client";

import React from "react";
import Contact from "@/src/components/Contact/Contact";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
const ContactUs = () => {
  return (
<>
<Navbar isAuthButton={false} />
    <div className="min-h-screen bg-gradient-to-b from-[#FFFAF0] to-[#F3E8D8] py-16 px-8 lg:px-32">
      <Contact/>
      <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md justify-center align-middle flex-col">
        <h2 className="text-2xl font-semibold text-[#FF8C00] mb-4 text-center">Regd Address:</h2>
        <p className="text-lg text-gray-700 mb-2 text-center">C-77, 2nd floor, DDA Sheds Okhla Industrial Area 1, New Delhi 110020</p>
        <p className="text-lg text-gray-700 mb-2 text-center">Support: hello@asmiveda.com | +91-11-43054568</p>
       
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
