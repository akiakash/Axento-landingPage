import React from "react";
import Image from "next/image";
import Client3 from "../../Assets/images/client3.png";
import Client32 from "../../Assets/images/Client3.2.png";
import Donald from "../../Assets/images/Donald.png";
import Inaya from "../../Assets/images/Inaya.png";
import Inaya2 from "../../Assets/images/Inaya2.png";
import ReadMore from "../../Assets/svg/readMore.svg";
import Scroll1 from "../../Assets/svg/Button - Scroll to page 1.svg";
import Scroll2 from "../../Assets/svg/Button - Scroll to page 2.svg";
import Scroll3 from "../../Assets/svg/Button - Scroll to page 3.svg";

const Container = () => {
  return (
    <div className="relative w-full h-[774.6px] overflow-hidden text-white font-inter">
      <div className="w-full flex flex-col justify-center items-center text-[#fff] mt-32">
        <div className="bg-[#19171E] py-2 px-5 rounded-full border-[1px] border-[#FFFFFF33] mb-6">
          <h1 className="md:text-[16px] text-[12px] font-inter text-ivory">
            💬 Testimonials
          </h1>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">
          <span>What Clients </span>
          <span className="text-[#b880fc]">Says About</span>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">Axento</div>
      </div>

      <div className="absolute top-1/2 w-[1470px] h-[557px] overflow-hidden text-gray-300">
        <div className="flex space-x-8">
          <div className="bg-gray-300 rounded-2xl p-4 w-[350px]">
            <p className="text-gray-400 mb-4">
              The reporting and analytics features are invaluable for making
              strategic decisions. A fantastic investment for any organization.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/4ySpgr3hgnnvdrlIcGCBt9X6eI.jpg.png"
                alt="Alien Donald"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium">Alien Donald</p>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl p-4 w-[350px]">
            <p className="text-gray-400 mb-4">
              Being a small business owner, time is of the essence. Axento has
              been a lifesaver in helping us organize projects and communicate
              effectively.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/QVVUsx3EcaYbJDdtzYN9Cxz6SE.png.png"
                alt="Isabela Inaya"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium">Isabela Inaya</p>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl p-4 w-[350px]">
            <p className="text-gray-400 mb-4">
              When potential customers are researching you online, they're
              getting to know you through the content on your website.
            </p>
            <div className="flex items-center space-x-4">
              <Image
                src="/fJHNKouWD1BIaJb4hU6hKytbXQ.png.png"
                alt="Customer Image"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="text-white font-medium">Customer Name</p>
                <p className="text-gray-500">Customer Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative rounded-[50px] h-[30px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_35px)] w-[25px] h-[30px] overflow-hidden">
          <img
            src={Scroll1} 
            alt="Image"
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_12.5px)] w-2.5 h-2.5 rounded-full"
          />
        </div>
        <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_10px)] w-5 h-[30px] overflow-hidden">
          <img
            src={Scroll2} 
            alt="Image"
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_5px)] w-2.5 h-2.5 rounded-full opacity-50"
          />
        </div>
        <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_10px)] w-[25px] h-[30px] overflow-hidden">
          <img
            src={Scroll3} 
            alt="Image"
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_12.5px)] w-2.5 h-2.5 rounded-full opacity-50"
          />
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex items-center gap-x-2">
          <p className="font-medium">Read our customer stories</p>
          <Image
            className="inline-block"
            width={22}
            height={22}
            src={ReadMore}
            alt="Read More Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
