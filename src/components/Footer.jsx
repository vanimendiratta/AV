"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
const Footer = () => {
  const hoverEffect = {
    whileHover: {
      scale: 1.0,
      // rotate: 1,
      transition: { duration: 0.3 },
    },
  };
  const [year, cYear] = useState(new Date());

  return (
    <footer className="bg-gradient-to-r to-[#5D4037] from-[#8D6E63] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <motion.div {...hoverEffect} className="col-span-1">
          <Image
            src="/logo.png"
            alt="Asmiveda Logo"
            width={112} // Adjust the width as needed
            height={28} // Adjust the height as needed
            className="mb-4"
          />
          <p className="text-sm">
            At asmiveda, we envision a future where our graduates lead the field
            of psychology with confidence and expertise.
          </p>
        </motion.div>

        {/* Policy Section */}
        <motion.div {...hoverEffect} className="col-span-1">
          <h3 className="font-semibold text-lg mb-2">POLICY/FAQ&apos;S</h3>
          <ul className="space-y-2">
            <li><a href="/ABOUT" className="hover:underline">About Us</a></li>
            <li><a href="/TERMS" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/PRIVACY" className="hover:underline">Privacy Policy</a></li>
            <li><a href="REFUND" className="hover:underline">Refunds</a></li>
            <li><a href="/FAQ" className="hover:underline">FAQs</a></li>
            <li><a href="/Contactus" className="hover:underline">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div {...hoverEffect} className="col-span-1">
          <h3 className="font-semibold text-lg mb-2">FOLLOW US</h3>
          <ul className="space-y-2">
            <li><a href="https://www.facebook.com/asmiapp" className="hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/asmi.app?igsh=YThpZXJzZ2hwZ2d0" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://x.com/asmiapp" className="hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/100711595/admin/dashboard/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://youtube.com/@asmiapp.?feature=shared" className="hover:underline" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </motion.div>

        {/* Courses Section */}
        <motion.div {...hoverEffect} className="col-span-1">
          <h3 className="font-semibold text-lg mb-2">COURSES</h3>
          <ul className="space-y-2">
            <li><a href="/Course" className="hover:underline">Suicide Prevention Training</a></li>
            <li><a href="/PD" className="hover:underline">Personality Development</a></li>
            <li><a href="/IP" className="hover:underline">Immersion Program</a></li>
            <li><a href="/Stepingstones" className="hover:underline">Stepping Stones</a></li>

          </ul>
        </motion.div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">  &copy; {year.getFullYear()} ASMI by Anjanajyoti Systems Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
