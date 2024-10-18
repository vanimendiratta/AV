"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  return (
    <>
      <Navbar isAuthButton={false} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#FFFAF0] to-[#F3E8D8] px-8 lg:px-32 py-16"
      >
        {/* Updated Heading */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-[#4A4A4A] text-2xl md:text-4xl lg:text-6xl font-bold leading-snug">
            <span className="block">asmiVeda</span>
            <span className="flex items-center justify-center text-[#FF8C00] text-xl md:text-3xl lg:text-5xl whitespace-nowrap">
              Shaping Tomorrows Psychologists Today
            </span>
          </h1>
        </motion.div>

        {/* Sub-heading */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg lg:text-2xl font-light text-[#4A4A4A] text-center mb-12 max-w-4xl leading-relaxed"
        >
          At asmiVeda, we are dedicated to empowering future psychologists through immersive, hands-on
          training programs that prepare you for success in the field of psychology.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-[#4A4A4A] font-light"
        >
          <div className="bg-[#F9E4C7] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF8C00] mb-4">Why Choose Asmiveda?</h2>
            <p>
              Aspiring psychologists often face challenges in gaining practical skills and launching
              their independent practices. We bridge this gap with real-world case studies, mentoring,
              personalized learning, and career support to help you thrive.
            </p>
          </div>

          <div className="bg-[#F9E4C7] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF8C00] mb-4">Our Mission</h2>
            <p>
              We are committed to equipping our learners with the knowledge, skills, and confidence to
              succeed in their psychology careers.
            </p>
          </div>

          <div className="bg-[#F9E4C7] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF8C00] mb-4">Our Impact</h2>
            <p>
              With over 5,000 learning hours, 300+ students, and 100+ success stories, we prepare our
              learners to become changemakers, making a meaningful impact in psychology.
            </p>
          </div>

          <div className="bg-[#F9E4C7] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF8C00] mb-4">Our Vision</h2>
            <p>
              At asmiVeda, our vision is to nurture the next generation of psychology leaders. We
              produce highly skilled and compassionate psychologists ready to tackle the challenges of
              today.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 max-w-4xl text-center text-[#4A4A4A] leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF8C00] mb-4">Join Us</h2>
          <p>
            Join us at asmiVeda, and take the first step toward a successful and impactful career in
            psychology. Our programs ensure you are ready to become the leaders and changemakers of
            tomorrow.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
