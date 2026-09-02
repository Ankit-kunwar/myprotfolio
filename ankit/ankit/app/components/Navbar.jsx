"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/data/assets";
import PrayerBreakdownModal from "./PrayerBreakdownModal";

const Navbar = () => {
  const sideMenuRef = useRef();
  const [prayerOpen, setPrayerOpen] = useState(false);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          className=" w-full"
          priority={true}
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[5%] py-4 flex items-center justify-between z-50 ">
        <a href="#top">
          <h1 className="text-3xl font-bold cursor-pointer mr-14 font-Ovo tracking-wider">
            Ankit<span className="text-rose-500">.</span>
          </h1>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 ">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setPrayerOpen(true)}
            className="max-w-[10.5rem] lg:max-w-[13rem] xl:max-w-none text-left leading-tight px-3 sm:px-4 py-2 border border-rose-400 text-rose-600 bg-white/80 backdrop-blur-md rounded-full text-[11px] sm:text-xs xl:text-sm font-medium hover:bg-rose-50 transition-colors"
          >
            Does God prayer Work Mathematical Breakdown
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Contact" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>
        {/* --- Mobile Menu (hidden by default) ---- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close Menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <button
              type="button"
              className="text-left"
              onClick={() => {
                closeMenu();
                setPrayerOpen(true);
              }}
            >
              Does God prayer Work Mathematical Breakdown
            </button>
          </li>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              My Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <PrayerBreakdownModal
        open={prayerOpen}
        onClose={() => setPrayerOpen(false)}
      />
    </>
  );
};

export default Navbar;
