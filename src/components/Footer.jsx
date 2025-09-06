import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-3">
            <MdEmail className="text-blue-600" /> Ngwu Joseph
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            I create beautiful, functional, and user-friendly digital
            experiences. Passionate about turning ideas into reality through
            clean code and innovative design.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Navigation
          </h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#Experience" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contactForm" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Find Me Online
          </h3>
          <div className="flex gap-3 mb-6">
            <a
              href="https://github.com/Ngwujoe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/Camilone6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/_cami.lone"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@oaktech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-blue-600 transition"
            >
              <FaTiktok />
            </a>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Subscribe to Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Stay updated with my latest projects and articles.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-gray-900 text-white rounded-r-lg hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>© 2025 Oak Technologies. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
