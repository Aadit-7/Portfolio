import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import Swal from "sweetalert2";

function Footer() {
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
      className="rounded-3xl bg-[#D0D9FF] p-4 sm:p-8 lg:p-12"
    >
      <div className="flex flex-col gap-10 rounded-3xl bg-[#7091E7] lg:flex-row">
        <div className="Form w-full p-5 text-[1.2rem] font-semibold lg:w-1/2">
          <form
            onSubmit={onSubmit}
            className="bg-[#7091E7] px-6 py-5 text-black"
          >
            <h1 className="mb-6 text-center font-robotoCondensed text-[2rem] sm:text-left">
              Contact Form
            </h1>
            <label htmlFor="name" className="block">
              Your Name :
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="mb-4 mt-2 block w-full rounded-xl bg-[#D0D9FF] p-3"
              required
            />
            <label htmlFor="email" className="block">
              Your Email :
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="mb-4 mt-2 block w-full rounded-xl bg-[#D0D9FF] p-3"
              required
            />
            <label htmlFor="message" className="block">
              Message :
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="mb-4 mt-2 block w-full resize-none rounded-xl bg-[#D0D9FF] p-3"
              required
            ></textarea>
            <motion.button
              whileHover={{ background: "black", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="w-full rounded-full bg-[#D0D9FF] p-3 text-center sm:mt-2 sm:w-full md:w-full lg:mt-7 lg:w-full"
            >
              Send
            </motion.button>
          </form>
        </div>
        <div className="Social_Links w-full p-5 text-xl font-semibold lg:w-1/2">
          <h1 className="mb-6 px-8 py-5 text-[2rem] font-semibold">
            You may connect with me on:
          </h1>
          <div className="links flex flex-wrap justify-center gap-4 text-[2rem] sm:px-10 lg:justify-start lg:text-[3rem]">
            <motion.a
              whileHover={{ background: "#7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7091E7]"
              href="https://www.linkedin.com/in/aadit-yadav-331b5317b/?trk=opento_sprofile_details"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ background: "#7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7091E7]"
              href="https://github.com/Aadit-7"
            >
              <IoLogoGithub />
            </motion.a>

            <motion.a
              whileHover={{ background: "#7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7091E7]"
              href="https://x.com/AaditAadit07"
            >
              <FaSquareXTwitter />
            </motion.a>

            <motion.a
              whileHover={{ background: "#7091E7", color: "white" }}
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7091E7]"
              href="https://www.instagram.com/_aadit_07/?hl=en"
            >
              <FaSquareInstagram />
            </motion.a>
          </div>
          <h1 className="pt-10 text-center text-[1.8rem] tracking-wide lg:mt-96 lg:text-[2.2rem]">
            Thanks For Visiting!!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
