// components/CourseCard.js

import React from 'react';
import Image from 'next/image';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-gray-900 rounded-lg shadow-md overflow-hidden mx-4">
      <div className="relative h-40">
        <Image
          src={course.image}
          alt={course.name}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
        <p className="text-sm text-gray-600">Duration: {course.duration}</p>
        <p className="text-sm text-gray-600">Apply by: {course.applyBy}</p>
        <p className="text-sm text-gray-600">Part-time: {course.partTime ? 'Yes' : 'No'}</p>
        
        {/* Button Container */}
        <div className="mt-4 flex gap-2">
          <a
            href={course.brochureUrl}
            className="flex-1 text-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Brochure
          </a>
          <a
            href="/Course"
            className="flex-1 text-center px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
