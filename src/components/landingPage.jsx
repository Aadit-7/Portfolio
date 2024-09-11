import { motion } from "framer-motion";
import React from "react";
import IMG from "../assets/1.jpg";
import { BsArrowUpRight } from "react-icons/bs";

function LandingPage() {
  return (
    <motion.div
      data-scroll
      data-scroll-speed="-.1"
      data-scroll-section
      className="h-screen w-full bg-[#D0D9FF] pt-4 font-robotoCondensed sm:pt-8 lg:pt-12"
    >
      {/* Text Section */}
      <div className="textStructure mt-12 px-4 uppercase tracking-tighter sm:mt-24 sm:px-10 lg:px-20">
        <motion.div className="masker text-[3rem] font-semibold leading-[4rem] tracking-tighter sm:text-[5rem] sm:leading-[6rem] lg:text-[7rem] lg:leading-[8rem]">
          <p>Hey There,</p>
        </motion.div>

        {/* Flex Container for Image and Name */}
        <div className="masker flex flex-col items-center text-[4rem] font-semibold leading-[5rem] tracking-tighter sm:flex-row sm:text-[1rem] sm:leading-[1rem] lg:text-[8rem] lg:leading-[8rem]">
          {/* Hidden on screens smaller than 640px */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="sm:w- hidden h-24 w-36 overflow-hidden rounded-[1rem] sm:mr-0 sm:mt-0 sm:block"
          >
            <img src={IMG} alt="" className="h-full w-full object-cover" />
          </motion.div>
          <p className="mt-4 sm:mt-0">I am AADIT</p>
        </div>

        <div className="masker text-[3rem] font-semibold leading-[4rem] tracking-tight sm:text-[5rem] sm:leading-[6rem] lg:text-[7rem] lg:leading-[8rem]">
          <p>MERN Developer</p>
        </div>
        <div className="masker text-[3rem] font-semibold leading-[4rem] tracking-tight sm:text-[5rem] sm:leading-[6rem] lg:text-[7rem] lg:leading-[8rem]">
          <p>fresher</p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 flex flex-col justify-between border-t-[1px] border-zinc-600 px-4 py-3 align-middle font-roboto text-[0.9rem] sm:mt-24 sm:flex-row sm:px-8 sm:text-[1.1rem] lg:mt-28 lg:px-10">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-8 sm:space-y-0">
          <p>For Development use only</p>
          <p>Built and created by Aadit</p>
        </div>
        <motion.div
          whileHover={{ background: "black", color: "white" }}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
          className="buttons mt-4 flex justify-center gap-2 rounded-full border-[1px] border-zinc-800 p-2 align-middle text-sm sm:mt-0 sm:gap-4 sm:text-lg"
        >
          <div className="pl-1 sm:pl-2">
            <button className="text-sm uppercase sm:text-base">
              <a href="#section_ContactMe">Ask for services</a>
            </button>
          </div>
          <div className="pr-1 pt-1 sm:pr-2">
            <BsArrowUpRight />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
