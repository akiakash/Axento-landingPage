import React, { useState } from "react";
import logo from "../../Assets/Logo/logo.png";
import Image from "next/image";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Hook for getting current route

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    console.log("clicked", isOpen);
  };

  return (
    <div className="flex justify-center ">
      {/* Desktop Header */}
      <header className="w-full md:fixed md:flex hidden bg-transparent flex items-center justify-between py-4 px-8 z-[99]">
        <div className="flex items-center">
          <Image src={logo} width={200} height={80} alt="Logo" />
        </div>

        <nav className="flex items-center space-x-8 ">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-semibold leading-[30.6px]  z-50   cursor-pointer ${
                router.pathname === link.href
                  ? "text-[#B880FC]" // Active link color
                  : "text-[#A5A5A5]" // Default color
              } hover:text-[#603EE4] transition-colors duration-300  cursor-pointer`} // Hover color
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <button className="text-[#FFFFFF] leading-[27.2px] text-[16px] py-[10px] px-[35px] bg-[#603EE4] font-semibold rounded-[8px]">
            Get Started
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed flex w-full justify-between items-center p-4 z-50">
        <div className="flex w-full">
          <Image src={logo} width={160} height={80} alt="Logo" />
        </div>

        <div className="mil-menu-btn cursor-pointer z-50" onClick={toggleMenu}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={` md:hidden fixed md: top-0 left-0 w-full h-full  bg-opacity-70 backdrop-filter backdrop-blur-lg transition-all duration-500  transform z-50 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4">
          <Image src={logo} width={160} height={80} alt="Logo" />
          <button
            className="text-white text-4xl font-thin"
            onClick={toggleMenu}
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-full space-y-6 pb-[140px]">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-bold text-white text-[24px] ${
                router.pathname === link.href
                  ? "text-[#B880FC]" // Active link color for mobile
                  : "text-white"
              } hover:text-[#B880FC] transition-colors duration-300`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div>
            <button className="text-[#FFFFFF] leading-[27.2px] text-[16px] py-2 px-[16px] bg-[#603EE4] font-semibold rounded-[8px]">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
