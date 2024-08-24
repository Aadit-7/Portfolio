import { motion } from "framer-motion";
import React from "react";
import IMG from "../assets/1.jpg";
import { BsArrowUpRight } from "react-icons/bs";

function landingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      data-scroll-section
      className="w-full font-robotoCondensed h-screen bg-[#D0D9FF] pt-1"
    >
      <div className="textStrucutre mt-24 px-20 uppercase tracking-tighter sm:text-xl">
        <motion.div className="masker text-[7vw] leading-[8vw] font-semibold tracking-tighter">
          <h1>Hey There,</h1>
        </motion.div>
        <div className="flex justify-items-start masker text-[7vw] leading-[8vw] font-semibold tracking-tighter">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className=" rounded-[1vw] overflow-hidden mt-6 h-24 w-44 mr-2"
          >
            <img src={IMG} alt="" />
          </motion.div>
          <h1>I am AADIT</h1>
        </div>
        <div className="masker text-[7vw] leading-[8vw] font-semibold tracking-tight">
          <h1>MERN Developer</h1>
        </div>
        <div className="masker text-[7vw] leading-[8vw] font-semibold tracking-tight">
          <h1>fresher</h1>
        </div>
      </div>
      <div className=" text-[1.1vw] font-roboto border-t-[1px] border-zinc-600 mt-24 flex justify-between align-middle py-3 px-10">
        {["For Developement use only", "Buid and created by Aadit"].map(
          (item, idx) => (
            <p>{item}</p>
          )
        )}
        <motion.div
          whileHover={{ background: "  black", color: "white" }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
          className=" text-lg gap-4 flex justify-center align-middle buttons border-[1px] border-zinc-800 rounded-full p-2"
        >
          <div className=" pl-2">
            <button className="uppercase text-[1vw]">
              <a href="#section_ContactMe">Ask for services</a>
            </button>
          </div>
          <div className="pt-1 pr-2">
            <BsArrowUpRight />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default landingPage;
