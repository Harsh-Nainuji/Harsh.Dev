// src/components/Header.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "About", "Projects", "Experience", "skills","Contact"];
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/Harsh-Nainuji/Harsh-Nainuji",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/harshnainuji/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://x.com/HarshNDev",
      label: "X",
    },
  ];

  return (
    <header className="absolute z-50 w-full transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          delay: 0.3,
          duration: 1.5,
        }}
        className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 md:h-20 bg-gradient-to-b from-black to-violet-800"
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-purple-600 rounded-full bg-gradient-to-r from-gray-500 to-gray-100 me-3">
            H
          </div>
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
            Harsh
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="absolute hidden space-x-6 transform -translate-x-1/2 lg:flex left-1/2">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3 + index * 0.2,
                duration: 1.5,
              }}
            >
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                className="relative text-gray-800 transition-colors duration-300 cursor-pointer group dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {item}
                <span className="block absolute bottom-0 left-0 h-0.5 bg-violet-600 transition-all duration-300 w-0 group-hover:w-full"></span>
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Socials + "Let's Work" */}
        <div className="items-center hidden space-x-4 md:flex">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3 + 0.2 * index,
                duration: 1.5,
              }}
              className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}

          <motion.a
            href="mailto:nainujiharsh@gmail.com"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="px-4 py-2 ml-4 font-bold transition-all duration-500 bg-gray-400 rounded-xl bg-gradient-to-r from-gray-300 to-gray-100 text-violet-700 hover:from-violet-700 hover:to-purple-700 hover:text-white"
          >
            Let's Work
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Nav Expand */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-4 py-5 space-y-5 overflow-hidden bg-white shadow-lg md:hidden dark:bg-gray-900"
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              onClick={toggleMenu}
              className="py-2 font-medium text-gray-300 cursor-pointer"
            >
              {item}
            </ScrollLink>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <span className="w-6 h-6 text-gray-300 transition-colors duration-300 hover:text-violet-600">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>

          <a
            href="mailto:nainujiharsh@gmail.com"
            className="block w-full px-4 py-2 mt-4 font-bold text-center text-white rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
