// src/components/InfoSection.jsx
import React, { useState, useEffect } from "react";
import { FaEnvelopeOpenText,  FaGithub, FaTwitter} from "react-icons/fa";

// ✅ Import images from src/images/
import me from "../images/me.jpg";
import me2 from "../images/me2.jpg";
import hoverImg from "../images/Hover.jpg";

const InfoSection = () => {
  const images = [me, me2,];
  const [current, setCurrent] = useState(0);
const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after clicking
    }
  };

  // Auto slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto p-8">
      
      {/* Info Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hello and Welcome to  <span className="text-blue-600">My Portfolio</span>
        </h1>
        <p className="text-lg text-gray-700">
          I create beautiful, functional, and user-friendly digital experiences. Passionate about turning ideas into reality through clean code and innovative design.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://twitter.com/Camilone6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg 
             transition transform hover:-translate-y-2 hover:bg-blue-700"
          >
           <FaTwitter />
          </a>
          <a
            href="https://github.com/Ngwujoe "
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg 
             transition transform hover:-translate-y-2 hover:bg-blue-700"
          >
            <FaGithub />
          </a>
          <button
            onClick={() => scrollToSection("contactForm")}

            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg 
             transition transform hover:-translate-y-2 hover:bg-blue-700"
          >
           <FaEnvelopeOpenText />
          </button>
        </div>
      </div>

      {/* Image Section with slideshow + hover effect */}
      <div className="border-2 border-solid border-blue-300 pt-10 pb-10">
      <div className="relative w-full max-w-sm mx-auto group overflow-hidden rounded-2xl shadow-xl h-[400px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Profile ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transform transition-all duration-1000 ease-in-out
              ${index === current ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
          />
        ))}

        {/* Hover Override */}
        <img
          src={hoverImg}
          alt="Hover Profile"
          className="absolute top-0 left-0 w-full h-full object-cover transform scale-105 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110"
        />
      </div>
      </div>
    </div>
  );
};

export default InfoSection;
