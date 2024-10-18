"use client";
import React from "react";
import { motion } from 'framer-motion';

const website = [
  { heading: "95.0%", description: "Graduates successful" },
  { heading: "90.0%", description: "Secure jobs" },
  { heading: "90.0%", description: "Student satisfaction" },
  { heading: "85.0%", description: "Retention rate" },
];

function About() {
  return (
    <div className="justify-between inline-flex flex-wrap rounded-3xl text-white " id="col">
      {website.map((client, index) => (
        <motion.div
          key={index}
          className="w-fit flex-wrap rounded-xl justify-around bg-transparent border-2 border-[#FF9800] p-2 mr-3 mt-10 text-[#4CAF50]"
          whileHover={{
            scale: 1.05,
            rotate: 2,
            backgroundColor: "#4CAF50",
            color: "#fff",
            transition: { duration: 0.5 }
          }}
          whileTap={{
            scale: 0.95,
            rotate: -2,
            transition: { duration: 0.3 }
          }}
        >
          <div className="inline-block">
            <div>
              <h1 className="text-3xl mb-1">{client.heading}</h1>
              <p className="text-xl font-medium">{client.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default About;
