"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
// Refund and Cancellation Policy data
const refundPolicy = {
  general: [
    {
      title: "100% Refund",
      details:
        "If you withdraw from a course 7 or more business days before the course start date, you are eligible for a full refund.",
    },
    {
      title: "50% Refund",
      details:
        "If you withdraw 4-6 business days before the course start date, you are eligible for a 50% refund.",
    },
    {
      title: "No Refund",
      details:
        "If you withdraw up to 4 business days before the course start date or once the course has started, no refund will be provided.",
    },
  ],
  cancellation: [
    {
      title: "Full Refund on Course Cancellation",
      details:
        "If a course is canceled by Anjanajyoti Systems Pvt. Ltd. before the start date, all enrolled students are eligible for a full refund.",
    },
    {
      title: "No Refund for Post-Start Date Cancellation",
      details:
        "If a course is canceled after it has started, no refund will be provided.",
    },
  ],
  specialCases: [
    {
      title: "Medical or Compassionate Withdrawals",
      details:
        "In special circumstances such as medical emergencies or compassionate reasons, partial tuition adjustments or non-refundable credits may be granted. These requests are evaluated on a case-by-case basis, subject to the sole discretion of Anjanajyoti Systems Pvt. Ltd.",
    },
    {
      title: "Administrative Fees",
      details:
        "An administrative fee may apply to certain withdrawals or substitutions, which will be communicated at the time of the request.",
    },
  ],
  important: [
    {
      title: "Processing Time",
      details:
        "Refunds are processed within 15 working days after the withdrawal or cancellation request has been approved. Refunds are issued via the original payment method only.",
    },
    {
      title: "Non-Refundable Fees",
      details:
        "Certain fees, such as registration fees, technology fees, and other administrative charges, are non-refundable regardless of the withdrawal or cancellation date.",
    },
  ],
};

// Refund Policy Component
const RefundPolicyComponent = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleToggle = (section) => {
    setSelectedSection(selectedSection === section ? null : section);
  };

  return (
    <>
    <Navbar isAuthButton={false}/>
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6 mt-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Refund and Cancellation Policy</h2>

        {Object.entries(refundPolicy).map(([category, policies]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4 capitalize">{category} Policies</h3>
            {policies.map((policy, index) => (
              <div key={index} className="mb-4">
                <motion.div
                  onClick={() => handleToggle(policy.title)}
                  className="cursor-pointer  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 rounded-lg hover:bg-gray-700"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{policy.title}</h4>
                    <span className="text-gray-400">{selectedSection === policy.title ? "-" : "+"}</span>
                  </div>
                </motion.div>
                <AnimatePresence>
                  {selectedSection === policy.title && (
                    <motion.div
                      className="bg-gray-700 p-4 mt-2 rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-300">{policy.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Footer /></>
  );
};

export default RefundPolicyComponent;
