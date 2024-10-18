import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { fetchPartners } from '../api/partners';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const KnowledgePartners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const data = await fetchPartners();
        setPartners(data);
      } catch (error) {
        // Optionally, handle the error with user feedback
      } finally {
        setLoading(false);
      }
    };

    loadPartners();
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-700">Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For large laptops and desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gradient-to-r from-[#F0F4F8] via-[#E6E9EC] to-[#D0D5DD]">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C3E50] mb-8 sm:mb-12">
        Our Knowledge Partners
      </h2>

      <div className="mx-auto max-w-screen-xl px-4">
        <Slider {...settings} className="slider-center">
          {partners.map((partner, index) => (
            <div key={index} className="px-2">
              <motion.div
                className="w-full sm:w-64 md:w-72 h-72 sm:h-80 md:h-96 bg-white rounded-2xl relative cursor-pointer overflow-hidden p-4 flex flex-col justify-center items-center border border-[#BDC3C7] bg-opacity-90 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
                whileHover="hover"
              >
                <motion.div
                  className="relative w-full h-full flex flex-col justify-center items-center"
                  initial="rest"
                  whileHover="hover"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1, transition: { duration: 0.3, ease: 'easeInOut' } },
                  }}
                >
                  <motion.div
                    className="relative w-full h-40 sm:h-48 md:h-56 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] border border-[#D4AF37] rounded-tl-[50px] rounded-br-[50px] overflow-hidden flex justify-center items-center shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    variants={{
                      rest: { opacity: 1 },
                      hover: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeInOut' } },
                    }}
                  >
                    <div className="absolute inset-0 bg-white opacity-30 rounded-tl-[50px] rounded-br-[50px]"></div>
                    <Image
                      src={partner.image}
                      alt={`Partner ${index + 1}`}
                      width={150}
                      height={150}
                      className="object-cover z-10"
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.div
                    className="text-center text-sm sm:text-lg md:text-xl text-[#2C3E50] font-semibold mt-4"
                    variants={{
                      rest: { opacity: 1, y: -20 },
                      hover: { opacity: 1, y: -90, transition: { duration: 0.5, ease: 'easeInOut' } },
                    }}
                  >
                    {partner.name}
                  </motion.div>

                  {partner.description && (
                    <motion.div
                      className="absolute bottom-4 w-full text-center text-[#7F8C8D] text-xs sm:text-sm md:text-base px-4"
                      variants={{
                        rest: { opacity: 0, y: 20 },
                        hover: { opacity: 1, y: -5, transition: { duration: 0.6, ease: 'easeInOut' } },
                      }}
                    >
                      {partner.description}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KnowledgePartners;
