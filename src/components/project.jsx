import React from "react";
import { motion } from "framer-motion";

// Import your video files
import VID1 from "../assets/Projects/wanderlust4.mp4";
import VID2 from "../assets/Projects/bubbleGame1.mp4";
import VID3 from "../assets/Projects/ticTacToe3.mp4";
import VID4 from "../assets/Projects/simonSays1.mp4";

function Project() {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      id="section_project"
      className="rounded-3xl bg-[#7091E7]"
    >
      <div className="flex gap-10 ">
        <h1 className="text-[3vw] w-1/4 uppercase px-10 pt-10 p-5 leading-none tracking-tight">
          My work -
        </h1>
        <marquee className="full pt-14 mr-10 text-[1vw] " direction="left">
          Hover to see demo video...........
        </marquee>
      </div>
      <div className="flex flex-wrap text-white p-5 -mt-7 h-full w-full">
        <div className="p-10  w-1/2 h-full">
          <div className="border-[1px] overflow-hidden bg-[#3D52A1] rounded-3xl p-5 border-black ">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="overflow-hidden rounded-3xl"
                src={VID1}
                muted
                loop
                // Play video on hover
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className=" flex justify-between rounded-full">
              <h1 className="text-[2vw]">Wanderlust Clone</h1>
              <motion.a
                whileHover={{ background: "  black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="mr-1 text-[1.2vw] text-black bg-[#D0D9FF] rounded-3xl p-3 px-5"
                href=""
              >
                {" "}
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1.2vw] ">Technologies used : &nbsp;</h1>
              <h1 className="text-[1.2vw] uppercase ">
                Express-Js, Node-Js, Mongodb, JAVASCRIPT
              </h1>
            </div>
          </div>
        </div>
        <div className="p-10 w-1/2 h-full">
          <div className="border-[1px] overflow-hidden bg-[#3D52A1] rounded-3xl p-5 border-black">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="overflow-hidden rounded-3xl"
                src={VID2}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className=" flex justify-between rounded-full">
              <h1 className="text-[2vw]">Bubble Game</h1>
              <motion.a
                whileHover={{ background: "  black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="mr-1 text-[1.2vw] text-black bg-[#D0D9FF] rounded-3xl p-3 px-5"
                href="https://github.com/Aadit-7/Bubble-Game"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1.2vw] ">Technologies used : &nbsp;</h1>
              <h1 className="text-[1.2vw] "> HTML, CSS, JAVASCRIPT</h1>
            </div>
          </div>
        </div>
        <div className="p-10 w-1/2 h-full">
          <div className="border-[1px] overflow-hidden bg-[#3D52A1] rounded-3xl p-5 border-black">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="overflow-hidden rounded-3xl"
                src={VID3}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className=" flex justify-between rounded-full">
              <h1 className="text-[2vw]">Tic-Tac-Toe</h1>
              <motion.a
                whileHover={{ background: "  black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="mr-1 text-[1.2vw] text-black bg-[#D0D9FF] rounded-3xl p-3 px-5"
                href="https://github.com/Aadit-7/Tic-Tic-Toe"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1.2vw] ">Technologies used : &nbsp; </h1>
              <h1 className="text-[1.2vw]">HTML, CSS, JAVASCRIPT</h1>
            </div>
          </div>
        </div>
        <div className="p-10 w-1/2 h-full">
          <div className="border-[1px] overflow-hidden bg-[#3D52A1] rounded-3xl p-5 border-black">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="overflow-hidden rounded-3xl"
                src={VID4}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className=" flex justify-between rounded-full">
              <h1 className="text-[2vw]">Simon Says Game</h1>
              <motion.a
                whileHover={{ background: "  black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="mr-1 text-[1.2vw] text-black bg-[#D0D9FF] rounded-3xl p-3 px-5"
                href="https://github.com/Aadit-7/Simon-Says-game"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1.2vw] ">Technologies used : &nbsp;</h1>
              <h1 className="text-[1.2vw] "> HTML, CSS, JAVASCRIPT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
