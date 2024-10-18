"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// Contact form animation variants
const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const inputVariants = {
  focus: {
    scale: 1.02,
    boxShadow: "0 4px 15px rgba(51, 153, 51, 0.25)", // Softer shadow
    transition: { duration: 0.4 },
  },
  blur: {
    scale: 1,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)", // Subtle shadow
    transition: { duration: 0.4 },
  },
};

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const response = await fetch("https://formspree.io/f/mvgpjljg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setDone(true);
      form.current.reset(); // Reset the form after submission
    } else {
      console.error("Error submitting form:", response.statusText);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-[#F0F4F8] via-[#E6E9EC] to-[#D0D5DD] text-gray-800 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#2C3E50]">
          Bring your journey towards success
        </h1>
        <div className="flex justify-center">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#FFFFFF] text-gray-800 p-6 md:p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <motion.input
              type="text"
              name="user_name"
              className="block w-full p-3 mb-4 text-sm md:text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your Name"
              required
              whileFocus="focus"
              initial="blur"
              variants={inputVariants}
            />
            <motion.input
              type="email"
              name="user_email"
              className="block w-full p-3 mb-4 text-sm md:text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your Email"
              required
              whileFocus="focus"
              initial="blur"
              variants={inputVariants}
            />
            <motion.input
              type="tel"
              name="user_phone"
              className="block w-full p-3 mb-4 text-sm md:text-base lg:text-lg border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter your contact number"
              required
              whileFocus="focus"
              initial="blur"
              variants={inputVariants}
            />
            <motion.textarea
              name="message"
              className="block w-full p-3 mb-4 text-sm md:text-base lg:text-lg border border-gray-300 rounded-lg resize-none focus:outline-none"
              placeholder="Ask your query"
              required
              whileFocus="focus"
              initial="blur"
              variants={inputVariants}
            />
            <motion.input
              type="submit"
              value="Send"
              className="w-full p-3 text-sm md:text-base lg:text-lg bg-[#2C3E50] text-white rounded-lg cursor-pointer hover:bg-[#388E3C] transition duration-300 transform hover:scale-105"
            />
            <div className="mt-4 text-center text-sm md:text-base lg:text-lg">
              <span>{done && "Thanks for contacting us!"}</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
