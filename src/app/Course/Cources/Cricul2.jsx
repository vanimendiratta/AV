"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from Next.js

  

const CurriculumSection = ({ curriculumData = [], courseCardData = {} }) => {
  // State to manage selected modules and total price
  const [selectedModules, setSelectedModules] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Handle module selection
  const handleModuleSelect = (module) => {
    // Check if the module is already selected
    const isModuleSelected = selectedModules.some((mod) => mod.title === module.title);

    if (isModuleSelected) {
      // If the module is already selected, remove it and subtract its price
      const filteredModules = selectedModules.filter((mod) => mod.title !== module.title);
      setSelectedModules(filteredModules);
      setTotalPrice(totalPrice - module.price);
    } else {
      // If the module is not selected, add it and update the price
      setSelectedModules([...selectedModules, module]);
      setTotalPrice(totalPrice + module.price);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 py-8 bg-[#F4F1E9]">
      {/* Left Side - Curriculum */}
      <div className="flex-1 mb-8 lg:mb-0 lg:mr-6">
        <h2 className="text-4xl font-bold mb-4 text-[#2D6A4F]">Curriculum</h2>

        {/* Render each curriculum section */}
        {curriculumData.length > 0 ? (
          curriculumData.map((item, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg mb-8 bg-[#FFFFFF] border border-[#A5D6A7] shadow-lg shadow-[#A5D6A7]/50"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#2C6B54]">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-[#2C6B54] font-bold">Price: ${item.price}</p>
              <button
                onClick={() => handleModuleSelect(item)}
                className={`mt-4 py-2 px-4 rounded-lg font-semibold transition-colors ${
                  selectedModules.some((mod) => mod.title === item.title)
                    ? 'bg-[#A5D6A7] text-[#2D6A4F]'
                    : 'bg-[#FFB74D] text-[#3E2723]'
                }`}
              >
                {selectedModules.some((mod) => mod.title === item.title) ? 'Remove Module' : 'Add Module'}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No curriculum available.</p>
        )}
      </div>

      {/* Right Side - Sticky Course Card */}
      <div className="lg:w-1/3">
        <div className="sticky top-20 bg-[#FFFFFF] border border-[#D0BFA1] rounded-lg p-6 shadow-lg shadow-[#D0BFA1]/50">
          <Image
            src={courseCardData.imageSrc || '/default-image.png'}
            alt={courseCardData.imageAlt || 'Course Brochure'}
            width={500} // Adjust width as needed
            height={300} // Adjust height as needed
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-4 text-[#3E2723]">
            {courseCardData.title || 'Course Title'}
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            {courseCardData.bullets ? (
              courseCardData.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))
            ) : (
              <li>No additional course information available.</li>
            )}
          </ul>

          {/* Display selected modules */}
          {selectedModules.length > 0 ? (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#3E2723]">Selected Modules:</h4>
              <ul className="list-disc list-inside">
                {selectedModules.map((module, index) => (
                  <li key={index}>{module.title}</li>
                ))}
              </ul>
              <p className="text-lg font-bold text-[#2D6A4F] mt-4">Total Price: ${totalPrice}</p>
            </div>
          ) : (
            <p className="text-gray-700">No modules selected.</p>
          )}

          <button
            onClick={() => alert(`Proceed to payment: $${totalPrice}`)}
            className="bg-[#FFB74D] text-[#3E2723] font-bold py-2 px-4 rounded-lg hover:bg-[#FFA726] transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
