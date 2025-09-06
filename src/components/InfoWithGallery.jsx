import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import info2 from "../images/info2.jpg"
import info3 from "../images/info3.jpg";
import grid2 from "../images/grid2.jpg";
import ContactForm from "./contactForm";

const InfoWithGallery = () => {
  const images = [info2, info3, grid2];
  const [active, setActive] = useState(images.length - 1); // last image is on top by default
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto slideshow with pause on hover
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, images.length]);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full py-16 px-4 overflow-hidden">
      {/* 🎨 Gradient Background */}
      <div className="absolute inset-0  -z-20" />

      {/* 🎨 Decorative Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse -z-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse -z-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full max-w-md h-72 sm:h-80 mx-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery item ${index + 1}`}
                onClick={() => setActive(index)} // bring clicked image forward
                className={`absolute w-3/4 sm:w-4/5 md:w-full h-auto rounded-2xl shadow-xl cursor-pointer transition-all duration-500
                  ${active === index ? "z-30 scale-105" : "z-10 opacity-90"}
                `}
                style={{
                  top: `${index * 20}px`,
                  left: `${index * 20}px`,
                }}
              />
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 text-gray-800 p-2 sm:p-3 rounded-full shadow hover:bg-white transition"
          >
            <FaChevronLeft className="text-sm sm:text-lg md:text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 text-gray-800 p-2 sm:p-3 rounded-full shadow hover:bg-white transition"
          >
            <FaChevronRight className="text-sm sm:text-lg md:text-xl" />
          </button>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-6 text-center md:text-left"
        >
         <div id="contactForm"><ContactForm /></div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoWithGallery;
