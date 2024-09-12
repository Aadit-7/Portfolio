import React from "react";
import IMG from "../assets/Profile_photo.png";
import PDF from "../assets/PDF.pdf";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1."
      data-scroll-section
      id="section_AboutMe"
      className="rounded-[2rem] bg-[#D0D9FF] px-4 py-10 text-black sm:px-8 lg:px-10"
    >
      <h1 className="font-arvo font-medium sm:text-[1.8rem] sm:font-extralight sm:leading-[2rem] lg:text-[2.1rem] lg:leading-[2.4rem]">
        "As an entry-level MERN stack developer, my primary objective is to
        utilize my expertise in MongoDB, Express.js, React, and Node.js to craft
        dynamic, full-stack web applications. I am enthusiastic about applying
        my skills to develop seamless, scalable solutions, collaborating with a
        team to address real-world challenges, and consistently expanding my
        knowledge to adapt to new technologies within a rapidly evolving
        development environment."
      </h1>
      <div className="mt-14 border-t-[1px] border-zinc-600 font-robotoCondensed">
        <div className="flex w-full flex-col gap-10 tracking-normal lg:flex-row">
          <div className="pt-5 text-xl sm:text-2xl lg:w-1/2">
            <h1 className="mb-10 mt-7 text-[2rem] font-semibold uppercase tracking-tighter sm:text-[2.7rem]">
              about me :
            </h1>
            <h1 className="text-[1.4rem] leading-[1.7rem] sm:text-[1.7rem] sm:leading-[1.9rem]">
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
            <div className="flex justify-center py-10 pr-0 align-middle lg:justify-end lg:pr-10">
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                href={PDF} // Path to your resume file in the public folder
                download="resume.pdf" // Name for the downloaded file
                className="flex justify-center gap-5 rounded-2xl bg-[#3D52A1] px-4 py-2 align-middle text-white"
              >
                Download Resume
                <div className="py-1">
                  <FaDownload />
                </div>
              </motion.a>
            </div>
          </div>
          <div className="mt-10 h-[25rem] w-full overflow-hidden rounded-3xl border border-black bg-[#D0D9FF] bg-cover pl-0 pt-10 sm:h-[35rem] lg:w-1/2 lg:pl-10 lg:pt-0">
            <img className="rounded-3xl" src={IMG} alt="Profile" />
          </div>
        </div>
      </div>
      <div className="mt-16 border-t-[1px] border-zinc-600"></div>
    </div>
  );
};

export default About;
