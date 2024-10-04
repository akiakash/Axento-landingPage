import React, { useState } from "react";
import Image from "next/image";
import Wireframe from "../../Assets/images/Wireframe.png"
import Fidelity from "../../Assets/images/Fidelity.png"
import Julian from "../../Assets/images/Julian.png"
import Henry from "../../Assets/images/Henry.png"
import Integration from "../../Assets/images/Integration.png"

const WhyAxento = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (section: string) => {
    setSelected(section);
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-white mt-24">
        <div className="bg-[#19171E] py-2 px-5 rounded-full border-[1px] border-[#FFFFFF33] mb-6">
          <h1 className="md:text-[16px] text-[12px] font-inter text-ivory">
            ✨ Why Choose Us
          </h1>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">
          <span>Why use </span>
          <span className="text-[#C18EFF]">Axento</span>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">
          For Project Management
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-8 py-6 mt-6">
        <div
          onClick={() => handleSelect("Manage Task")}
          className={`relative w-[150px] h-[47px] rounded-3xl bg-[#19171E] border-[1px] ${
            selected === "Manage Task" ? "border-[#b880fc]" : "border-[#19171E]"
          } cursor-pointer`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-medium text-lg">Manage Task</span>
          </div>
        </div>

        <div
          onClick={() => handleSelect("AI-Powered")}
          className={`relative w-[136px] h-[47px] rounded-3xl bg-[#19171E] border-[1px] ${
            selected === "AI-Powered" ? "border-[#b880fc]" : "border-[#19171E]"
          } cursor-pointer`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-medium text-lg">AI-Powered</span>
          </div>
        </div>

        <div
          onClick={() => handleSelect("Productivity")}
          className={`relative w-[134px] h-[47px] rounded-3xl bg-[#19171E] border-[1px] ${
            selected === "Productivity"
              ? "border-[#b880fc]"
              : "border-[#19171E]"
          } cursor-pointer`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-medium text-lg">Productivity</span>
          </div>
        </div>

        <div
          onClick={() => handleSelect("Gamification")}
          className={`relative w-[149px] h-[47px] rounded-3xl bg-[#19171E] border-[1px] ${
            selected === "Gamification"
              ? "border-[#b880fc]"
              : "border-[#19171E]"
          } cursor-pointer`}
        >
          <div className="flex items-center justify-center h-full">
            <span className="text-white font-medium text-lg">Gamification</span>
          </div>
        </div>
      </div>
      <div className="w-full relative  h-[383px] overflow-hidden text-left text-5xl text-white font-inter mt-3">
      <div className="absolute  top-[calc(50%_-_190.91px)] left-[calc(50%_-_600px)] rounded-2xl w-[600px] h-[400px] overflow-hidden">
        <div className="absolute top-[-40px] left-[-100px] blur-[100px] rounded-full bg-[#b880fc] w-[300px] h-[200px] opacity-[0.6]" />
        <div className="absolute top-[30px] left-[150px]left-[150px] py-3 px-6 ">
            <Image src={Wireframe} alt="Image" />
        </div>
        <div className="absolute top-[100px] left-[150px] py-3 px-6">
            <Image src={Fidelity} alt="Image" />
        </div>
        <div className="absolute top-[133px] left-[50px] py-3 px-6">
            <Image src={Julian} alt="Image" />
        </div>
        <div className="absolute top-[133px] right-[10px] py-3 px-6">
            <Image src={Henry} alt="Image" />
        </div>
        <div className="absolute bottom-[110px] left-[40px] text-3xl font-semibold">
          Manage Task
        </div>
        <div className="absolute bottom-[40px] left-[40px] text-[#d5d4d6] text-sm max-w-[400px]">
          <p>
            Say goodbye to the chaos of scattered to-do lists and embrace a
            platform that empowers you to take control of your work.
          </p>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_191.5px)] left-[calc(50%_+_12px)] rounded-2xl w-[600px] h-[400px] overflow-hidden">
            <div className="absolute h-[15.76%] top-[40.5%] right-[-90.43px] bottom-[22.73%] blur-[56px] rounded-[210.38px] bg-[#b880fc] w-[292px] rotate-[-21deg] opacity-[0.6]" />
        <div className="py-3 px-6">
            <Image src={Integration} alt="Image" />
        </div>
        <div className="absolute bottom-[110px] left-[40px] text-3xl font-semibold">
          Integration
        </div>
        <div className="absolute bottom-[40px] left-[40px] text-[#d5d4d6] text-sm max-w-[400px]">
          <p>
            Our intuitive interface, powerful features, and dedicated support
            team are here to help.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyAxento;
