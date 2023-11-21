"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white rounded-full 
    flex justify-center items-center shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
