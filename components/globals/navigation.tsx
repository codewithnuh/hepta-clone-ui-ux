"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the menu icon
  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0 },
    open: { rotate: -45, y: -8 },
  };

  // Animation variants for the navigation menu
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  // Animation for menu links
  const menuItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <nav className="relative ">
      {/* Header */}
      <div className="flex justify-between items-center px-8 py-5">
        <span className="font-bold text-white text-3xl ">HEPTA</span>

        {/* Menu Icon */}
        <div
          className="flex flex-col gap-1 cursor-pointer "
          onClick={toggleMenu}
        >
          <motion.div
            className="h-1 w-8 bg-white rounded-full"
            variants={menuIconVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.div
            className="h-1 w-8 bg-white rounded-full"
            variants={middleLineVariants}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.div
            className="h-1 w-8 bg-white rounded-full"
            variants={bottomLineVariants}
            animate={isOpen ? "open" : "closed"}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-r from-gray-100 via-white  to-gray-300 bg-opacity-90 z-50 flex flex-col items-center justify-center gap-8 text-2xl font-bold"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {["Home", "Hotels", "About Us", "Gallery", "News", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-black hover:text-teal-500  transition-all tracking-wider uppercase"
                  variants={menuItemVariants}
                  custom={index}
                >
                  {item}
                </motion.a>
              )
            )}
            <button
              onClick={toggleMenu}
              className="mt-8 px-6 py-3 text-lg bg-gradient-to-r from-teal-500 to-teal-500 text-white rounded-full hover:scale-105 transform transition"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
