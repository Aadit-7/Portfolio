import { motion } from "framer-motion";
import React from "react";

function Navbar() {
  return (
    <nav
      className={`
    // Large Screen 
    fixed lg:bg-[#D0D9FF] lg:backdrop-blur-md lg:bg-opacity-10 lg:z-[999] lg:w-full lg:px-12 lg:py-5 lg:border-b-[0.1px] lg:border-b-zinc-300 lg:flex lg:justify-between lg:items-center

    // Medium Screen
    md:bg-white md:text-black md:flex md:justify-center md:items-center md:py-4

    // Small Screen
    sm:bg-white sm:text-black sm:flex sm:justify-center sm:items-center sm:py-4
  `}
    >
      <span className="lg:font-robotoCondensed lg:text-[2vw]  lg:text-black md:text-blue-600">
        Personal Portfolio
      </span>
      <div className="link font-robotoCondensed  font-semibold flex gap-10">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
          whileHover={{ borderBottom: "1px solid black" }}
          className="text-[1.36vw] font-semibold text-black "
          href=""
        >
          Home
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
          whileHover={{ borderBottom: "1px solid black" }}
          className="text-[1.36vw] font-semibold text-black"
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
          className="text-[1.36vw] font-semibold text-black"
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
          className="text-[1.36vw] font-semibold text-black ml-40"
          href="#section_ContactMe"
        >
          Contact Me
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* {["Services", "My Work", "About ME", "Insights", "Contact ME"].map(
  (item, idx) => (
    <a
      key={idx}
      className={`text-xl font-light ${idx === 4 && "ml-40"}`}
    >
      {item}
    </a>
  )
  )} */
}
