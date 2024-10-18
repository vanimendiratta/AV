import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import qpr from "../../public/images/qpr1.png";
import pd from "../../public/images/pd1.png";
import ip from "../../public/images/ip1.png";
import Ss from "../../public/images/Ss.png";

// Course data
const courses = [
  {
    title: "Suicide Prevention Training",
    institution: "Practical Skills for Intervention and Support",
    duration: "5 hours",
    applyBy: "26 September, 2024",
    image: qpr,
    brochureUrl: "https://asmi-veda.s3.ap-southeast-2.amazonaws.com/brochures/1727180185114_Suicide+Prevention+Brochure.pdf",
    exploreUrl: "/Course",
  },
  {
    title: "Comprehensive Personality Development for Aspiring Psychologists",
    institution: "Build confidence for real-world scenarios",
    duration: "5 Classes",
    applyBy: "29 September, 2024",
    image: pd,
    brochureUrl: "/PD.pdf",
    exploreUrl: "/PD",
  },
  {
    title: "Immersion Program",
    institution: "Week-Long Industry Experience",
    duration: "One Week",
    applyBy: "Ongoing",
    image: ip,
    brochureUrl: "https://asmi-veda.s3.ap-southeast-2.amazonaws.com/brochures/1727179455469_Immersion+Brochure.pdf",
    exploreUrl: "/IP",
  },
  {
    title: "Stepping Stones",
    institution: "Certification Training Programme  in Comprehensive Psychology",
    duration: "1 month",
    applyBy: "29 September, 2024",
    image: Ss,
    brochureUrl: "/immersion.pdf",
    exploreUrl: "/Stepingstones",
  },
];

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft className="text-white text-3xl" />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight className="text-white text-3xl" />
  </div>
);

const CourseSlider = ({ onOpenSignUp }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login/signup popup
  const router = useRouter();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    onOpenSignUp();
    setShowLoginPopup(false);
  };

  const handleDownload = async (brochureUrl) => {
    // Check if user is logged in
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")); // Parse the value as a boolean

    if (isLoggedIn) {
      // If logged in, allow the download
      window.location.href = brochureUrl;
    } else {
      // If not logged in, show login/signup popup
      setShowLoginPopup(true);
    }
  };

  const handleExploreClick = (exploreUrl) => {
    router.push(exploreUrl); // Navigate to the dynamic route
  };

  return (
    <div className="bg-gradient-to-r from-[#8B5E34] via-[#B29065] to-[#D7B495] py-12 px-6 lg:px-16 relative">
      <h2 className="text-5xl lg:text-6xl font-bold text-center text-[#F5E7DB] mb-10">
        Our Programs
      </h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="p-4">
            <div
              className="bg-[#FFF8F0] rounded-xl shadow-2xl mx-auto border border-[#D2A671] transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{ width: "100%", maxWidth: "320px", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div onClick={() => handleExploreClick(course.exploreUrl)}>
                {/* Image Container with explicit height */}
                <div className="relative w-full h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                    onClick={() => handleExploreClick(course.exploreUrl)}
                  />
                  <div className="absolute top-0 left-0 bg-[#F5C552] text-white text-xs font-bold px-4 py-1 rounded-br-lg shadow-md z-10"
                  onClick={() => handleExploreClick(course.exploreUrl)}>
                    HANDS ON TRAINING
                  </div>
                </div>
                <div className="p-4" onClick={() => handleExploreClick(course.exploreUrl)}>
                  <h3 className="text-2xl font-semibold text-[#5A3A1E]">
                    {course.title}
                  </h3>
                  <p className="text-[#8C6D53]">{course.institution}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Part-time · {course.duration}
                  </p>
                  <p className="text-sm text-gray-600">
                    Apply by: {course.applyBy}
                  </p>
                </div>
              </div>
              <div className="p-4 flex justify-between">
                <button
                  onClick={() => handleDownload(course.brochureUrl)}
                  className="text-sm bg-[#B29065] text-[#5A3A1E] py-2 px-4 rounded shadow-md hover:bg-[#D2A671] transition duration-300 z-50"
                >
                  Download Brochure
                </button>
                <button
                  onClick={() => handleExploreClick(course.exploreUrl)}
                  className="text-sm bg-[#F5C552] text-[#5A3A1E] py-2 px-4 rounded shadow-md hover:bg-[#F5B342] transition duration-300"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* Login/Signup Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center w-96">
            {/* Cross button at the top right */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowLoginPopup(false)}
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Please Login or Sign Up</h2>
            <p className="mb-4">
              You need to be logged in to download the brochure.
            </p>
            <div>
              <button
                onClick={handleSignUpClick}
                className="bg-[#FFD700] text-[#4A2C2A] px-4 py-2 rounded-lg hover:bg-[#FFC107] transition-colors"
              >
                Signup/Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSlider;
