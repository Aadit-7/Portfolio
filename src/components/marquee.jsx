import React from "react";
import { FaHtml5, FaCss3Alt, FaNode, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { TbBrandRedux } from "react-icons/tb";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.01"
      data-scroll-section
      className="mb-10 w-full overflow-hidden rounded-3xl bg-[#7091E7] py-[2rem] md:py-[4rem]"
    >
      <div className="flex items-center space-x-10 overflow-hidden whitespace-nowrap border-b-2 border-t-2 border-zinc-300 pb-6 pt-6 font-medium uppercase text-zinc-800 md:pb-9 md:pt-10">
        <motion.div
          className="flex gap-10 md:gap-20"
          initial={{ x: 0 }}
          animate={{ x: "-70%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          {/* Icons with responsive sizes */}
          <FaHtml5 className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <FaCss3Alt className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <IoLogoJavascript className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <IoLogoReact className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <FaNode className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <SiExpress className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <BiLogoMongodb className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <SiMysql className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <FaBootstrap className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <RiTailwindCssFill className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <TbBrandRedux className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          {/* Repeated Icons */}
          <FaHtml5 className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <FaCss3Alt className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <IoLogoJavascript className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <IoLogoReact className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
          <FaNode className="text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[17rem]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
