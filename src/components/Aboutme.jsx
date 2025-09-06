import React from "react";
import { motion } from "framer-motion";
import { 
  HiOutlineMail, 
  HiOutlineLocationMarker, 
  HiOutlineIdentification, 
  HiOutlineCalendar 
} from "react-icons/hi";
import aboutImg from "../images/me.jpg"; // replace with your own image

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Me"
            className="rounded-2xl shadow-2xl w-72 h-72 md:w-96 md:h-96 object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I’m a passionate <span className="font-semibold">Web Developer</span> 
            with a love for creating modern, user-friendly, and visually engaging 
            applications. I enjoy bringing ideas to life with technologies like 
            <span className="text-purple-600 font-semibold"> React</span> and 
            <span className="text-green-600 font-semibold"> Tailwind CSS</span>.
          </p>

          {/* Info with Clickable Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            
            {/* Email */}
            <a
              href="mailto:youremail@example.com"
              className="flex items-center space-x-3 hover:text-blue-600 transition"
            >
              <HiOutlineMail size={24} className="text-blue-600" />
              <span className="text-gray-800">Ngwujoseph5@gmail.com</span>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Lagos, Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-red-500 transition"
            >
              <HiOutlineLocationMarker size={24} className="text-red-500" />
              <span className="text-gray-800">Lagos, Nigeria</span>
            </a>

            {/* ID */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-green-600 transition"
            >
              <HiOutlineIdentification size={24} className="text-green-600" />
              <span className="text-gray-800">ID: 1******</span>
            </a>

            {/* Calendar */}
            <a
              href="https://calendar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-purple-600 transition"
            >
              <HiOutlineCalendar size={24} className="text-purple-600" />
              <span className="text-gray-800">Available: Full-Time</span>
            </a>
          </div>

          {/* Contact Button */}
          <button
            onClick={() =>
              document
                .getElementById("contactForm")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Let’s Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
