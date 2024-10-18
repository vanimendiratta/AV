'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Import Image from Next.js
import { dataSets } from '../../data'; // Import all datasets

const BusinessAnalytics = ({ dataId }) => {
  const router = useRouter();

  // Fetch the data based on the dataId prop
  const data = dataSets[dataId] || {};

  const handleDownload = () => {
    const fileUrl = '/PD.PDF'; // Path relative to the public folder
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'PD_Brochure.pdf'; // The name of the downloaded file
    document.body.appendChild(a); // Append the link to the body
    a.click(); // Trigger the click to download
    document.body.removeChild(a); // Remove the link after download
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 py-12 bg-[#F5F5F5] text-[#333]">
      {/* Left Side - Description */}
      <div className="flex-1 mb-8 lg:mb-0 lg:mr-8 p-6 bg-[#E0D9C4] rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-[#2A4D2D] mb-4">{data.title}</h2>
        <h1 className="text-3xl font-bold mb-6 text-[#1E2A1F]">{data.description}</h1>
        {/* <div className="flex space-x-4 mb-6">
          {data.logoUrls && data.logoUrls.map((logoUrl, index) => (
            <Image
              key={index}
              src={logoUrl}
              alt={`Logo ${index + 1}`}
              width={64} // Adjust width as needed
              height={64} // Adjust height as needed
              className="w-16 h-16"
            />
          ))}
        </div> */}
        {/* <p className="mb-4 font-bold text-[#B97A57]">{data.interviews}</p> */}
        <p className="mb-4 text-[#1E2A1F]">Eligibility: {data.eligibility}</p>
        <p className="mb-4 font-bold text-[#B97A57]">Apply by: <span className="font-bold text-[#B97A57]">{data.deadline}</span></p>
        <h2 className="text-xl font-semibold text-[#2A4D2D] mb-4">{data.Recipee}</h2>
        <ul className="list-disc list-inside space-y-3 mb-6 text-[#1E2A1F]">
          {data.Recipe && data.Recipe.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        {/* <p className="mb-4 text-[#1E2A1F]">Aligned with NASSCOM and FutureSkills Prime</p> */}
       
      </div>

      {/* Right Side - Card */}
      <div className="flex-1 lg:w-1/3 bg-[#FFFFFF] text-[#333] rounded-lg p-8 shadow-xl">
        <h3 className="text-2xl font-semibold mb-6 text-[#2A4D2D]">About this Program</h3>
        <ul className="list-disc list-inside space-y-3 mb-6 text-[#1E2A1F]">
          {data.courseDetails && data.courseDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button
          onClick={handleDownload}
          className="bg-[#2A4D2D] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1E2A1F] transition-colors"
        >
          Download Brochure
        </button>
      </div>
    </div>
  );
};

export default BusinessAnalytics;
