import React from "react";
import logo from "../../Assets/Logo/logo.png";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center">
      <header className="w-full fixed bg-transparent flex items-center justify-between py-4 px-8 ">
        <div className="flex items-center">
          <Image src={logo} width={200} height={80} alt="Logo" />
        </div>

        <nav className="flex items-center space-x-8 ">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-semibold leading-[30.6px] text-[#A5A5A5]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <button className="text-[#FFFFFF] leading-[27.2px]  text-[16px] py-[10px] px-[35px] bg-[#603EE4] font-semibold rounded-[8px] ">
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
