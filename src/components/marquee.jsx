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
      className="bg-[#7091E7] rounded-3xl mb-10  py-[4vw] w-full overflow-hidden"
    >
      <div className="flex text-zinc-800  items-center space-x-10 uppercase text border-t-2 border-b-2 border-zinc-300 whitespace-nowrap  overflow-hidden pt-10 pb-9 font-medium">
        <motion.div
          className="flex gap-20 text- space-x-10"
          initial={{ x: 0 }}
          animate={{ x: "-70%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          <FaHtml5 className="text-[17vw]" />
          <FaCss3Alt className="text-[17vw]" />
          <IoLogoJavascript className="text-[17vw]" />
          <IoLogoReact className="text-[17vw]" />
          <FaNode className="text-[17vw]" />
          <SiExpress className="text-[17vw]" />
          <BiLogoMongodb className="text-[17vw]" />
          <SiMysql className="text-[17vw]" />
          <FaBootstrap className="text-[17vw]" />
          <RiTailwindCssFill className="text-[17vw]" />
          <TbBrandRedux className="text-[17vw]" />
          {/* Repeate */}
          <FaHtml5 className="text-[17vw]" />
          <FaCss3Alt className="text-[17vw]" />
          <IoLogoJavascript className="text-[17vw]" />
          <IoLogoReact className="text-[17vw]" />
          <FaNode className="text-[17vw]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
