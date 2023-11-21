"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://media.licdn.com/dms/image/C5603AQFI24okpCiJRg/profile-displayphoto-shrink_800_800/0/1618847906137?e=2147483647&v=beta&t=NzITN2YvfNV_IKPaYArw4TlrJ8p3wxRNTIAdEPGqeBU"
              alt="Claudio Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.20rem] border-white object-cover shadow-xl"
            ></Image>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Claudio. </span>
        I'm a <span className="font-bold">full-stack developer </span>
        with <span>8 years</span>
        of experience. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My main focus is{" "}
        <span className="underline">React Native & React</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 items-center justify-center px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition"></HiDownload>
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15]
          hover:scale-[1.15] text-xl hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10
          dark:text-white/60"
          href="https://www.linkedin.com/in/claudio-perez/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] text-xl hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/claudioperezr97"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
