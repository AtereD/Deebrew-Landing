"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className="absolute md:top-[15px] left-0 right-0 z-[60] ">
      <div className="containers mx-auto">
        <div
          className="flex justify-between items-center
            "
        >
          {/* logo */}
          <Link href="/" className="relative w-[100px] xl:w-[120px] z-[20]">
            <Image
              src="/assets/logo.png"
              width={200}
              height={200}
              alt=""
              className="object-contain "
            />
          </Link>
          {/* nav trigger btn */}
          <button
            onClick={() => setNavActive(!navActive)}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
          >
            {/* 1 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            {/* 2 */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            {/* 3 */}
            <span
              className={`w-full h-[1.2px] bg-current absolute left-0 transition-opacity duration-300 ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
      {/* nav */}
      <AnimatePresence mode="wait">{navActive && <Nav />}</AnimatePresence>
    </header>
  );
};
export default Header;
