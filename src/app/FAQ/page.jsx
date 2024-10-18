"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/src/components/Navbar";

import Footer from "@/src/components/Footer";
// FAQ data
const faqs = {
  general: [
    {
      question: "What is ASMI Veda?",
      answer:
        "ASMI Veda is an advanced learning program designed to provide intensive hands-on training for budding psychologists. Our courses include real-world case studies, personalized learning experiences, and expert mentorship to help you succeed in the field of psychology.",
    },
    {
      question: "Who can enroll in these courses?",
      answer:
        "Our courses are ideal for budding and fresher therapists, psychology students, and professionals seeking advanced training.",
    },
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll in any of our courses by visiting our website, selecting the course you are interested in, and following the registration instructions.",
    },
    {
      question: "What is the duration of each course?",
      answer:
        "Each course has a different duration, typically ranging from 30 to 45 days. Detailed information can be found in the course description.",
    },
    {
      question: "Is there a certification upon completion?",
      answer:
        "Yes, you will receive a certificate of completion for each course you successfully complete.",
    },
    {
      question: "Are the courses online or offline?",
      answer:
        "All our courses are conducted online to provide flexibility and convenience for our learners.",
    },
    {
      question: "What kind of support does Asmiveda provide to its students?",
      answer:
        "We provide 1:1 mentoring sessions, mock interviews, career guidance, and peer forums for networking.",
    },
  ],
  refund: [
    {
      question: "Can I get a refund if I am not satisfied with the course?",
      answer:
        "Yes, please refer to our refund policy on the website for detailed information on the conditions and process for requesting a refund.",
    },
    {
      question: "Where can I find the refund policy?",
      answer: "The refund policy is available on our website under the relevant section.",
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Refund processing times may vary; please check our refund policy for specific details.",
    },
  ],
  additional: [
    {
      question: "What makes Asmiveda unique?",
      answer:
        "Asmiveda offers the best training programs in psychology, combining hands-on training, expert mentorship, real-world case studies, and comprehensive career support to prepare students for successful careers in psychology.",
    },
    {
      question: "Are there opportunities for practical experience during the courses?",
      answer:
        "Yes, courses include practical sessions such as role play, shadowing, and 1:1 supervision to provide hands-on experience.",
    },
  ],
};

// Component for FAQ
const FAQComponent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleToggle = (question) => {
    setSelectedQuestion(selectedQuestion === question ? null : question);
  };

  return (
    <>
    <Navbar isAuthButton={false}/>
    <div className="min-h-screen bg  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-12 px-6">
  
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>

        {Object.entries(faqs).map(([category, questions]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-300 mb-4 capitalize">{category} FAQs</h3>
            {questions.map((faq, index) => (
              <div key={index} className="mb-4">
                <motion.div
                  onClick={() => handleToggle(faq.question)}
                  className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-gray-700"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{faq.question}</h4>
                    <span className="text-gray-400">{selectedQuestion === faq.question ? "-" : "+"}</span>
                  </div>
                </motion.div>
                <AnimatePresence>
                  {selectedQuestion === faq.question && (
                    <motion.div
                      className="bg-gray-700 p-4 mt-2 rounded-lg"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-300">{faq.answer}</p>
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

export default FAQComponent;
