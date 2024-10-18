import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick';
import thumbnail3 from "../../public/images/Thumbnail 3.JPG";
import thumbnail1 from "../../public/images/Testimonial thumbnail 1.JPG";
import thumbnail2 from "../../public/images/Testimonial thumbnail 2.JPG";
// Sample data
const testimonialsData = [
  {
    name: 'Manika',
    text:  "The mock interviews were invaluable in preparing me for real-world job interviews. The feedback I received helped me build my confidence and improve my communication skills.",
    image: thumbnail3,
    videoLink: 'https://www.youtube.com/watch?v=xBJO6q75Ms0', // Replace with actual YouTube Shorts link
    type: 'video',
  },
  {
    name: 'Ananya',
    text: "The mentorship at Asmiveda was instrumental in my growth. My mentor's guidance helped me develop essential skills and gain valuable insights.",
    image: thumbnail2,
    videoLink: 'https://www.youtube.com/shorts/DNLoV6hmT90', // Replace with actual YouTube Shorts link
    type: 'video',
  },
  {
    name: 'Sandhya',
    text:  "I'm incredibly grateful for the personalized learning experience at Asmiveda. The customizable modules allowed me to tailor my education to my specific needs and interests.",
    image: thumbnail1,
    videoLink: 'https://www.youtube.com/shorts/Uwsll836W3g', // Replace with actual YouTube Shorts link
    type: 'video',
  },
//   {
//     name: 'Ananya',
//     text: "Asmiveda has been a game-changer for me! The hands-on training and real-world case studies have given me the confidence to apply my theoretical knowledge to real-life situations. The mentorship from industry experts has been invaluable. I'm so grateful for the support and guidance I've received."
// ,
//     image: '/path-to-john-image.jpg',
//     type: 'text', // Text testimonial
//   },
//   {
//     name: 'Rahul sharma',
//     text: "I was initially hesitant about online learning, but Asmiveda's platform has been exceptional. The customizable modules and the ability to learn at my own pace have been a huge advantage. The mock interviews and branding classes were especially helpful in preparing me for my career."
// ,
//     image: '/path-to-john-image.jpg',
//     type: 'text', // Text testimonial
//   },
//   {
//     name: 'Priya Singh',
//     text: "The peer forums at Asmiveda have been incredible. Connecting with other students who share my passion for psychology has been incredibly motivating. The real-time insights on learning progress have kept me accountable and on track."
// ,
//     image: '/path-to-john-image.jpg',
//     type: 'text', // Text testimonial
//   },
];
const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  // Redirect to YouTube Shorts
  const handleVideoClick = (videoLink) => {
    window.open(videoLink, '_blank'); // Opens YouTube Shorts in a new tab
  };
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 testimonials at once on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 testimonials on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 testimonial on small screens
        },
      },
    ],
  };
  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-[#F3E9DD] via-[#E7D4B5] to-[#D1B8A0] text-center text-gray-800 relative"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-[#5A3A1E]">Transformation Stories</h2>
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white shadow-lg rounded-xl p-6 border border-[#E7D4B5]">
                {testimonial.type === 'video' ? (
                  <div
                    className="relative cursor-pointer overflow-hidden rounded-xl transition-transform transform hover:scale-105"
                    onClick={() => handleVideoClick(testimonial.videoLink)}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={360}
                      height={640}
                      className="object-cover w-full h-[300px] rounded-xl z-50"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 rounded-xl">
                      <FaPlay className="text-white text-4xl hover:scale-110 transition-transform" />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover border-2 border-[#B48A66]"
                    />
                    <div className="ml-4 text-left">
                      <p className="text-lg font-semibold text-[#5A3A1E]">{testimonial.name}</p>
                    </div>
                  </div>
                )}
                <p className="text-md text-[#7D5A50] italic mb-4">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Testimonials;