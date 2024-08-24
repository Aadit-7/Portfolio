import React from "react";
import IMG from "../assets/Profile_photo.png";
import PDF from "../assets/PDF.pdf";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const about = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1."
      data-scroll-section
      id="section_AboutMe"
      className="bg-[#D0D9FF]  px-10 py-10 rounded-[2vw] text-black  "
    >
      <h1 className="text-[2.2vw] font-arvo font-medium leading-[2.7vw]">
        "As an entry-level MERN stack developer, my primary objective is to
        utilize my expertise in MongoDB, Express.js, React, and Node.js to craft
        dynamic, full-stack web applications. I am enthusiastic about applying
        my skills to develop seamless, scalable solutions, collaborating with a
        team to address real-world challenges, and consistently expanding my
        knowledge to adapt to new technologies within a rapidly evolving
        development environment."
      </h1>
      <div className=" border-t-[1px] font-robotoCondensed border-zinc-600 mt-14">
        <div className="w-full tracking-normal flex gap-10">
          <div className="text-2xl pt-5 w-1/2">
            <h1 className="text-[2.7vw] uppercase tracking-tighter font-semibold mt-7 mb-10">
              about me :
            </h1>
            <h1 className="text-[1.7vw] leading-[1.9vw]">
              Hello! I'm Aadit Suresh Yadav, <br /> a recent graduate with a
              strong interest in web development, particularly in the MERN
              stack. I recently completed a BE in Computer Science, where I
              learned MongoDB, Express.js, React, and Node.js. <br /> <br />{" "}
              Through my projects, I have built dynamic and scalable web
              applications using the MERN stack to create smooth user
              experiences and strong backend solutions. <br /> I'm passionate
              about learning new technologies and solving complex problems, and
              I'm looking forward to contributing my skills to innovative
              projects and growing as a developer in a collaborative
              environment.
            </h1>
            <div className="py-10 pr-10 flex justify-end align-middle ">
              <motion.a
                whileHover={{ background: "  black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                href={PDF} // Path to your resume file in the public folder
                download="resume.pdf" // Name for the downloaded file
                className="px-4 flex align-middle justify-center gap-5 py-2 bg-[#3D52A1] text-white rounded-2xl"
              >
                Download Resume
                <div className="py-1">
                  <FaDownload />
                </div>
              </motion.a>
            </div>
          </div>
          <div className="w-1/2 h-[35vw]  pl-20 pt-24 mt-10 rounded-3xl bg-[#D0D9FF] bg-cover overflow-hidden">
            <img
              className="-mt-24 -ml-10 border-[0.5px] rounded-3xl border-zinc-400 "
              src={IMG}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-16"></div>
    </div>
  );
};

export default about;
