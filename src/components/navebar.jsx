import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 z-[999] w-full bg-[#7091E7] sm:bg-[#7091E7] sm:bg-opacity-10 sm:backdrop-blur-md lg:border-b-[0.1px] lg:border-b-zinc-300 lg:bg-opacity-10 lg:px-12 lg:py-5 lg:backdrop-blur-md`}
    >
      <div className="flex w-full items-center justify-between px-4 py-4 sm:px-8 lg:px-12">
        <span className="text-lg font-bold text-black sm:text-xl md:text-2xl lg:font-robotoCondensed lg:text-[2rem]">
          Personal Portfolio
        </span>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
          </button>
        </div>

        <div className="hidden font-robotoCondensed font-semibold lg:flex lg:gap-10">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="text-base font-semibold text-black lg:text-[1.36rem]"
            href="#"
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="text-base font-semibold text-black lg:text-[1.36rem]"
            href="#section_project"
          >
            My Work
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="text-base font-semibold text-black lg:text-[1.36rem]"
            href="#section_AboutMe"
          >
            About Me
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="text-base font-semibold text-black lg:text-[1.36rem]"
            href="#section_ContactMe"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu - Displayed on small screens when the menu button is clicked */}
      {isMenuOpen && (
        <div className="flex w-full flex-col items-start bg-[#7091E7] px-4 py-4 font-robotoCondensed font-semibold lg:hidden">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="mb-2 w-full text-base"
            href="#"
            onClick={toggleMenu}
          >
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="mb-2 w-full text-base"
            href="#section_project"
            onClick={toggleMenu}
          >
            My Work
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="mb-2 w-full text-base"
            href="#section_AboutMe"
            onClick={toggleMenu}
          >
            About Me
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
            whileHover={{ borderBottom: "1px solid black" }}
            className="mb-2 w-full text-base"
            href="#section_ContactMe"
            onClick={toggleMenu}
          >
            Contact Me
          </motion.a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
