import { motion } from "framer-motion";
import React from "react";
import { BiUnderline } from "react-icons/bi";

function Navbar() {
  return (
    <div className="fixed bg-[#D0D9FF] backdrop-blur-md  bg-opacity-10 z-[999] w-full px-12 py-5 border-b-[0.1px] border-b-zinc-300 flex justify-between items-center">
      <div className="font-robotoCondensed text-[2vw] text-black">
        Personal Portfolio
      </div>
      <div className="link font-robotoCondensed  font-semibold flex gap-10">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
          whileHover={{ borderBottom: "1px solid black" }}
          className="text-[1.36vw] font-semibold text-black"
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
    </div>
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
