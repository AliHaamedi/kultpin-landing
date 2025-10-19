"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 h-16 sm:h-20 md:h-24 lg:h-28 transition-colors duration-300 ${
        isScrolled ? "bg-black/50 backdrop-blur-xs" : "bg-transparent"
      }`}
    >
      <Image
        src="/icons/logo.svg"
        alt="logo"
        width={60}
        height={60}
        className="sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
      />

      <h2 className="font-black text-sm sm:text-base md:text-lg lg:text-xl hidden sm:block">
        We breath the Kulture
      </h2>

      <Link href={"#drip"}>
        <button className="font-bold bg-secondary border-transparent transition-all py-0.5 px-2 sm:px-2.5 text-primary rounded-sm cursor-pointer hover:text-white hover:bg-transparent duration-400 border hover:border-secondary text-xs sm:text-sm">
          <span className="hidden sm:inline">Explore ARTs</span>
          <span className="sm:hidden">ARTs</span>
        </button>
      </Link>
    </div>
  );
};

export default TopNavBar;
