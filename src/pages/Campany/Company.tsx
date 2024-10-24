import React from "react";
import Image from "next/image";
import Zapier from "../../Assets/Logo/Zapier.svg";
import Gumroad from "../../Assets/Logo/Gumroad.svg";
import Figma from "../../Assets/Logo/Figma.svg";
import FeatherDev from "../../Assets/Logo/FeatherDev.svg";
import coinbase from "../../Assets/Logo/Coinbase.svg";
import GlobalBank from "../../Assets/Logo/GlobalBank.svg";
import Amplitude from "../../Assets/Logo/Amlitude.svg";

const Company = () => {
  return (
    <div>
      <div className="container mx-auto text-center py-2">
        <h1 className="text-4xl font-medium">
          <span className="text-[#b880fc]">10,000</span>
          <span className="text-[#fff]"> companies and </span>
          <span className="text-[#b880fc]">70,000</span>
          <span className="text-[#fff]"> people build</span>
        </h1>
        <h1 className="text-4xl font-medium mt-4">
          <span className="text-[#fff]">better experiences with </span>
          <span className="text-[#b880fc]">Axento</span>
        </h1>
      </div>
      <div className="w-full flex justify-center items-center gap-8 py-10">
        <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33]">
          <Image src={Zapier} alt="Logo" />
        </div>

        <div className="relative">
          <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33]">
            <Image src={Gumroad} alt="Logo" />
          </div>
          <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33] mt-7">
            <Image src={Figma} alt="Logo" />
          </div>
        </div>

        <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33]">
          <Image src={FeatherDev} alt="Logo" />
        </div>

        <div className="relative">
          <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33]">
            <Image src={coinbase} alt="Logo" />
          </div>
          <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33] mt-7">
            <Image src={GlobalBank} alt="Logo" />
          </div>
        </div>

        <div className="bg-[#19171E] py-3 px-6 rounded-lg border border-[#FFFFFF33]">
          <Image src={Amplitude} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Company;
