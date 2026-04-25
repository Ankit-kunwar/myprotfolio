import React from "react";
import Image from "next/image";
import { assets } from "@/assets/data/assets";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold cursor-pointer font-Ovo tracking-wider">
          Ankit<span className="text-rose-500">.</span>
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto mt-5">
          <a href="mailto:ankittankankit211@gmail.com" className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300">
            <Image src={assets.mail_icon} alt="Email" className="w-6" />
            <span className="text-gray-600 font-Outfit mr-4">ankittankankit211@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 mx-[10%] mt-12 py-6">
        <p className="text-gray-500 font-Outfit text-sm">
          © 2024 Ankit Kunwar. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Outfit text-sm">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300"
            >
              <Image src={assets.github_icon} alt="GitHub" className="w-5" />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#"
              className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300"
            >
              <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-5" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
