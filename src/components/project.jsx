import React from "react";
import { motion } from "framer-motion";

function Project() {
  const VID1 =
    "https://res.cloudinary.com/dp6gkldq8/video/upload/v1726124112/wanderlust4_cmn0yw.mp4";
  const VID2 =
    "https://res.cloudinary.com/dp6gkldq8/video/upload/v1726124125/bubbleGame1_ypn5cp.mp4";
  const VID3 =
    "https://res.cloudinary.com/dp6gkldq8/video/upload/v1726124102/ticTacToe3_zsj1nh.mp4";
  const VID4 =
    "https://res.cloudinary.com/dp6gkldq8/video/upload/v1726124099/simonSays1_bqgwqk.mp4";
  const VID5 =
    "https://res.cloudinary.com/dp6gkldq8/video/upload/v1728280598/samples/cld-sample-video.mp4";

  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      id="section_project"
      className="rounded-3xl bg-[#7091E7] p-5 lg:p-10"
    >
      {/* Title Section */}
      <div className="flex flex-col gap-10 lg:flex-row">
        <h1 className="w-full p-5 text-[2rem] uppercase leading-none tracking-tight sm:text-[3rem] lg:w-1/4">
          My work -
        </h1>
        <marquee className="full mr-10 hidden pt-3 text-[1rem] sm:block lg:pt-10">
          Hover to see demo video...
        </marquee>
      </div>

      {/* Project List */}
      <div className="-mt-7 flex flex-wrap justify-center lg:-mt-7 lg:hover:shadow-md">
        {/* Project 1 */}
        <div className="w-full p-5 md:w-1/2">
          <div className="overflow-hidden rounded-3xl border-[1px] border-black bg-[#3D52A1] p-5 transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.7)]">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="w-full overflow-hidden sm:rounded-none lg:rounded-3xl"
                src={VID1}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className="flex items-center justify-between">
              <h1 className="text-[1.5rem] underline sm:text-[2rem]">
                Wanderlust Clone
              </h1>
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="rounded-3xl px-4 py-2 text-[1rem] text-black sm:bg-[#3D52A1] sm:text-[1.2rem] md:px-5 md:py-3 md:text-[1.5rem] lg:bg-[#D0D9FF]"
                href="https://github.com/Aadit-7/Wanderlust"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1rem] sm:text-[1rem] lg:text-[1.2rem]">
                Technologies used : &nbsp;
              </h1>
              <h1 className="text-[1rem] sm:text-[1.2rem] lg:uppercase">
                Express, Node, MongoDB
              </h1>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full p-5 md:w-1/2">
          <div className="overflow-hidden rounded-3xl border-[1px] border-black bg-[#3D52A1] p-5 transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.7)]">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="w-full overflow-hidden sm:rounded-none lg:rounded-3xl"
                src={VID5}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className="flex items-center justify-between">
              <h1 className="text-[1.5rem] underline sm:text-[2rem]">
                Mini Whatsapp
              </h1>
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="rounded-3xl px-4 py-2 text-[1rem] text-black sm:bg-[#3D52A1] sm:text-[1.2rem] md:px-5 md:py-3 md:text-[1.5rem] lg:bg-[#D0D9FF]"
                href="https://github.com/Aadit-7/Mini-Whataspp"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                Technologies used : &nbsp;
              </h1>
              <h1 className="text-[1rem] sm:text-[1.2rem]">MERN, Socket.io</h1>
            </div>
          </div>
        </div>
        {/* Project 3
        <div className="w-full p-5 md:w-1/2">
          <div className="overflow-hidden rounded-3xl border-[1px] border-black bg-[#3D52A1] p-5">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="w-full overflow-hidden sm:rounded-none lg:rounded-3xl"
                src={VID2}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className="flex items-center justify-between">
              <h1 className="text-[1.5rem] underline sm:text-[2rem]">
                Bubble Game
              </h1>
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="rounded-3xl px-4 py-2 text-[1rem] text-black sm:bg-[#3D52A1] sm:text-[1.2rem] md:px-5 md:py-3 md:text-[1.5rem] lg:bg-[#D0D9FF]"
                href="https://github.com/Aadit-7/Bubble-Game"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                Technologies used : &nbsp;
              </h1>
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                HTML, CSS, JavaScript
              </h1>
            </div>
          </div>
        </div> */}

        {/* Project 4 */}
        <div className="w-full p-5 md:w-1/2">
          <div className="overflow-hidden rounded-3xl border-[1px] border-black bg-[#3D52A1] p-5 transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.7)]">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="w-full overflow-hidden sm:rounded-none lg:rounded-3xl"
                src={VID3}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className="flex items-center justify-between">
              <h1 className="text-[1.5rem] underline sm:text-[2rem]">
                Tic-Tac-Toe
              </h1>
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="rounded-3xl px-4 py-2 text-[1rem] text-black sm:bg-[#3D52A1] sm:text-[1.2rem] md:px-5 md:py-3 md:text-[1.5rem] lg:bg-[#D0D9FF]"
                href="https://github.com/Aadit-7/Tic-Tic-Toe"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                Technologies used : &nbsp;
              </h1>
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                HTML, CSS, JavaScript
              </h1>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="w-full p-5 md:w-1/2">
          <div className="overflow-hidden rounded-3xl border-[1px] border-black bg-[#3D52A1] p-5 transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.7)]">
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 1 }}
              className="relative"
            >
              <video
                className="w-full overflow-hidden sm:rounded-none lg:rounded-3xl"
                src={VID4}
                muted
                loop
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => e.currentTarget.pause()}
              />
            </motion.div>
            <br />
            <span className="flex items-center justify-between">
              <h1 className="text-[1.5rem] underline sm:text-[2rem]">
                Simon Says Game
              </h1>
              <motion.a
                whileHover={{ background: "black", color: "white" }}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                className="rounded-3xl px-4 py-2 text-[1rem] text-black sm:bg-[#3D52A1] sm:text-[1.2rem] md:px-5 md:py-3 md:text-[1.5rem] lg:bg-[#D0D9FF]"
                href="https://github.com/Aadit-7/Simon-Says-game"
              >
                Source Code
              </motion.a>
            </span>
            <div className="flex">
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                Technologies used : &nbsp;
              </h1>
              <h1 className="text-[1rem] sm:text-[1.2rem]">
                HTML, CSS, JavaScript
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
