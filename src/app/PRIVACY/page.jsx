"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
// Privacy Policy sections
const privacyPolicy = {
  overview: [
    {
      title: "Overview",
      content:
        "Anjanajyoti Systems Pvt Ltd. respects its user’s privacy and is committed to protecting any personal information you share with us. This Privacy Policy describes how we collect, use, and share information about our users through our platform. This applies to your use of all our websites, products, or services, and any interaction with us by email, telephone, or other means."
    },
    {
      title: "Consent to Terms",
      content:
        "BY USING OUR SERVICES OR BY GIVING US YOUR INFORMATION, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY. Please read it carefully, as it governs how you use Anjanajyoti Systems Pvt Ltd. and its affiliate products."
    },
  ],
  personalInfo: [
    {
      title: "Use of Your Personal Information",
      content:
        "We collect personal information to provide our services efficiently to you in a seamless manner. Your information will never be sold or disclosed to third parties for marketing purposes."
    },
    {
      title: "What Information Do We Collect?",
      content:
        "We may collect personal information such as name, email address, phone number, and billing information when you voluntarily provide it, as well as non-personal information such as language preference, time zone, and device type."
    },
  ],
  security: [
    {
      title: "Security of Personal Information",
      content:
        "We have implemented reasonable security measures including access control, encryption, and monitoring to protect against unauthorized access, modification, or loss of your personal information."
    },
    {
      title: "Data Retention and Transfers",
      content:
        "We retain personal information based on business needs and legal obligations, and your data is stored in data centers located in India."
    },
  ],
};

const PrivacyPolicyComponent = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleToggle = (sectionTitle) => {
    setSelectedSection(selectedSection === sectionTitle ? null : sectionTitle);
  };

  return (<>
    <Navbar isAuthButton={false}/>
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-12 px-6 mt-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy</h2>

        {Object.entries(privacyPolicy).map(([section, policies]) => (
          <div key={section} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4 capitalize">{section.replace(/([A-Z])/g, ' $1')} Section</h3>
            {policies.map((policy, index) => (
              <div key={index} className="mb-4">
                <motion.div
                  onClick={() => handleToggle(policy.title)}
                  className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
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
                      <p className="text-gray-300">{policy.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicyComponent;
