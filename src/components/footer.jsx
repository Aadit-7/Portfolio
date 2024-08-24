import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Swal from "sweetalert2";

function footer() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "258ca8bb-3cdf-4115-982a-218e22160399");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Mail sent",
          icon: "success",
        });
      } else {
        // Handle failure case if 'res.success' is false
        Swal.fire({
          title: "Error!",
          text:
            res.message ||
            "An error occurred while sending mail. Please check your internet connection",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle network or other errors
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
      });
    } finally {
      // Clear the form after handling success or failure
      form.reset();
    }
  };

  return (
    <div
      data-scroll
      data-scroll-speed="-.1.4"
      data-scroll-section
      id="section_ContactMe"
      className="rounded-3xl bg-[#D0D9FF]"
    >
      <div className="h-full w-full rounded-3xl bg-[#7091E7] flex gap-10  ">
        <div className="Form h-1/2 w-1/2 p-5 text-[1.2vw] font-semibold m-10">
          <form
            onSubmit={onSubmit}
            className="text-black  border-black border-[1px] px-10 py-7 rounded-2xl"
          >
            <h1 className="pl-56 text-[2vw] mb-10 font-light">Contact Form</h1>
            <label htmlFor="name">Your Name :</label>
            <input
              id="name"
              type="text"
              name="name "
              className="ml-3 p-3 mt-3 w-[25vw] rounded-xl bg-[#D0D9FF]"
              required
            />
            <br />
            <br />
            <label htmlFor="email">Your Email :</label>
            <input
              id="email"
              type="text"
              name="email "
              className="ml-3 p-3 mt-3 w-[25vw] rounded-xl bg-[#D0D9FF]"
              required
            />
            <br />
            <br />
            <label htmlFor="message">Message :</label>
            <br />
            <textarea
              name="message"
              id="message"
              rows={5}
              cols={60}
              className="ml-1 mt-3 p-3 rounded-xl bg-[#D0D9FF] resize-none"
              required
            ></textarea>
            <br />
            <br />
            <motion.button
              whileHover={{ background: "  black", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="bg-[#D0D9FF]  p-3 w-32 rounded-full"
            >
              Send
            </motion.button>
          </form>
        </div>
        <div className="Social_Links h-1/2 w-1/2 p-5 text-xl  font-semibold m-10">
          <h1 className="text-[1.2vw] font-semibold">
            You may connect with me on:
          </h1>
          <div className="links flex mt-10 flex-col gap-5 h-full text-[3vw]">
            <motion.a
              whileHover={{ background: "  #7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="bg-[#7091E7] w-[3vw]"
              href="https://www.linkedin.com/in/aadit-yadav-331b5317b/?trk=opento_sprofile_details"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ background: "#7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="bg-[#7091E7] rounded-full w-[3vw]"
              href="https://github.com/Aadit-7"
            >
              <IoLogoGithub />
            </motion.a>

            <motion.a
              whileHover={{ background: "  #7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="bg-[#7091E7]  w-[3vw]"
              href="https://x.com/AaditAadit07"
            >
              <FaSquareXTwitter />
            </motion.a>

            <motion.a
              whileHover={{ background: "  #7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="bg-[#7091E7]  w-[3vw]"
              href="https://www.instagram.com/_aadit_07/?hl=en"
            >
              <FaSquareInstagram />
            </motion.a>
          </div>
          <h1 className="pt-40 tracking-wide  text-[2.2vw]">
            Thanks For visiting!!
          </h1>
        </div>
      </div>
      <div className="  ml-20 mr-20 h-[1vw]"></div>
    </div>
  );
}

export default footer;
