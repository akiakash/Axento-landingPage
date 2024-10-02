import React from "react";
import Image from "next/image";
import Zapier from "../../Assets/images/Zapier.png";
import Gumroad from "../../Assets/images/Gumroad.png";
import Figma from "../../Assets/images/Figma.png";
import FeatherDev from "../../Assets/images/FeatherDev.png";
import coinbase from "../../Assets/images/coinbase.png";
import GlobalBank from "../../Assets/images/GlobalBank.png";
import Amplitude from "../../Assets/images/Amplitude.png";

const Company = () => {
  return (
    <div>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-medium">
          <span className="text-[#C18EFF]">10,000</span>
          <span className="text-white"> companies and </span>
          <span className="text-[#C18EFF]">70,000</span>
          <span className="text-white"> people build</span>
        </h1>
        <h1 className="text-4xl font-medium mt-4">
          <span className="text-white">better experiences with </span>
          <span className="text-[#C18EFF]">Axento</span>
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