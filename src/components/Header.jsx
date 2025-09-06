import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after clicking
    }
  };

  

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">OAKTECH</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/Ngwujoe "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/Ngwu Joseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://twitter.com/Camilone6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={22} />
          </a>
          <button
            onClick={() => scrollToSection("contactForm")}
            className="ml-4 bg-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          
          <button
            onClick={() => scrollToSection("contactForm")}

            className="bg-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
          >
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
