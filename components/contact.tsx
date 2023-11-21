"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmails } from "@/actions/sendEmails";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 text-center -mt-4 dark:text-white/70">
        Please Contact me directly at{" "}
        <a href="mailto:claudioprocha9@gmail.com" className="underline">
          claudioprocha9@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmails(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 transition-all outline-none"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 transition-all outline-none"
          placeholder="Your Message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
