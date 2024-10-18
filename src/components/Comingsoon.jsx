"use client"

import React, { useRef } from 'react';





const ComingSoon = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background Animation */}


      

      {/* Coming Soon Text */}
      <div className="z-10 text-center absolute  bottom-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl">
          We are working hard to get things ready. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
