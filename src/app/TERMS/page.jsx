"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
// Terms and Conditions data
const termsData = [
  {
    title: "Introduction",
    content:
      "Welcome to Anjanajyoti Systems Pvt. Ltd.! These Terms and Conditions outline the rules and regulations for the use of Asmiveda's website and services. By accessing our website, you accept these terms in full. If you disagree with any part of these terms, please do not use our website.",
  },
  {
    title: "Enrollment and Payment",
    content:
      "Enrollment Agreement: By enrolling in our courses, you enter a binding agreement to abide by these Terms and Conditions. You must create a user profile, select courses, and complete the checkout process.\n\nPayment: Payment for courses is due upon enrollment. We accept various payment methods, which will be presented at checkout. Payment guarantees your seat in the course.",
  },
  {
    title: "Withdrawals and Refunds Policy",
    content:
      "Refund Schedule:\n7 or more days before the course start date: 100% refund.\n4-6 days before the course start date: 50% refund.\n3 or fewer days before the course start date: No refund.\nOn or after the start date: No refund.\n\nTo withdraw from a course, you must submit a Withdrawal Request. A final grade of ‘W’ will be recorded.",
  },
  {
    title: "Course Materials and Conduct",
    content:
      "Materials Usage: Course materials are provided for personal use only. Downloading, reproducing, or distributing these materials is prohibited and may result in legal action.\n\nCode of Conduct: Students are expected to comply with all institutional policies, including those related to academic integrity and conduct. Violations may result in disciplinary action.",
  },
  {
    title: "Intellectual Property",
    content:
      "Content Use: All content provided by Anjanajyoti Systems Pvt Ltd is protected by copyright. Unauthorized use, distribution, or reproduction of this content is prohibited.\n\nThird-Party Content: Our website may include links to third-party sites. Anjanajyoti Systems Pvt Ltd is not responsible for the content or practices of these external sites.",
  },
  {
    title: "Limitation of Liability",
    content:
      "No Warranty: Anjanajyoti Systems Pvt Ltd provides services 'as is' without any warranties. We do not guarantee the accuracy or completeness of our content.\n\nLiability: Anjanajyoti Systems Pvt Ltd will not be liable for any damages arising from the use or inability to use our services.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify and hold Anjanajyoti Systems Pvt. Ltd. harmless from any claims or demands, including reasonable attorney fees, made by any third party due to or arising out of your breach of these Terms and Conditions.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms will be resolved in the courts of New Delhi, India.",
  },
  {
    title: "Changes to Terms",
    content:
      "Anjanajyoti Systems Pvt. Ltd. reserves the right to revise these Terms and Conditions at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of these changes.",
  },
  {
    title: "Third party liability",
    content:
    "The suicide prevention workshop is curated and conducted by The Connect Hut. asmiVeda is not liable for the content shared and the lifetime access promised by the third party. asmiVeda has no control over shared links, content, web sites, products or services or any Information provided or transmitted via such links, web sites, products or services, or otherwise provided by any third party."
      },
];

// Component for Terms and Conditions
const TermsAndConditions = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleToggle = (title) => {
    setSelectedTerm(selectedTerm === title ? null : title);
  };

  return (
    <>
    <Navbar isAuthButton={false}/>
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-12 px-6 mt-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Terms and Conditions</h2>

        {termsData.map((term, index) => (
          <div key={index} className="mb-8">
            <motion.div
              onClick={() => handleToggle(term.title)}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">{term.title}</h4>
                <span className="text-gray-400">{selectedTerm === term.title ? "-" : "+"}</span>
              </div>
            </motion.div>
            <AnimatePresence>
              {selectedTerm === term.title && (
                <motion.div
                  className="bg-gray-700 p-4 mt-2 rounded-lg"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-300 whitespace-pre-line">{term.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
    <Footer /></>
  );
};

export default TermsAndConditions;
