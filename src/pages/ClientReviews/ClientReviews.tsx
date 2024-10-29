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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClientReviews = () => {
  return (
    <div className="relative flex flex-col w-full overflow-hidden text-white font-inter">
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

      <div className="p-8 relative overflow-visible pb-10">
        <Carousel
          showStatus={false}
          showArrows={false}
          centerSlidePercentage={50}
          centerMode={true}
          renderIndicator={(clickHandler, isSelected, index, label) => (
            <button
              type="button"
              onClick={clickHandler}
              className={`w-3 h-3 rounded-full mx-1.5 ${
                isSelected ? "bg-[#613FE7]" : "bg-[#9b88e6]"
              }`}
              aria-label={`${label} ${index + 1}`}
            />
          )}
          className="h-[350px]"
        >
          <div className="rounded-2xl p-6 w-[98%] h-[300px] flex space-x-6 border-gray-800 border-[0.5px]">
            <div className="w-1/3 h-full border-r-[0.5px] border-gray-800 pr-5">
              <Image
                src={Inaya}
                alt="Alien Donald"
                className="rounded h-full object-cover"
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center">
              <p className="text-gray-400 mb-4 text-left">
                The reporting and analytics features are invaluable for making
                strategic decisions. A fantastic investment for any
                organization.
              </p>
              <div className="flex items-center space-x-4  pt-6">
                <div>
                  <Image
                    src={Donald}
                    alt="Alien Donald"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white font-medium">Alien Donald</p>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 w-[98%] h-[300px] flex space-x-6 border-gray-800 border-[0.5px]">
            <div className="w-1/3 h-full border-r-[0.5px] border-gray-800 pr-5">
              <Image
                src={Inaya}
                alt="Alien Donald"
                className="rounded h-full object-cover"
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center">
              <p className="text-gray-400 mb-4 text-left">
                Being a small business owner, time is of the essence. Axento has
                been a lifesaver in helping us organize projects and communicate
                effectively.
              </p>
              <div className="flex items-center space-x-4 pt-6">
                <div>
                  <Image
                    src={Inaya2}
                    alt="Alien Donald"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white font-medium">Isabela Inaya</p>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-6 w-[98%] h-[300px] flex space-x-6 border-gray-800 border-[0.5px]">
            <div className="w-1/3 h-full border-r-[0.5px] border-gray-800 pr-5">
              <Image
                src={Client3}
                alt="Alien Donald"
                className="rounded h-full object-cover"
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center">
              <p className="text-gray-400 mb-4 text-left">
                B When potential customers are researching you online, they're
                getting to know you through the content on your website.
              </p>
              <div className="flex items-center space-x-4 pt-6">
                <div>
                  <Image
                    src={Inaya2}
                    alt="Alien Donald"
                    className="rounded-full h-10 w-10 object-cover"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-white font-medium">Customer Name</p>
                  <p className="text-gray-500">Customer Position</p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* <div className="w-full relative rounded-[50px] h-[30px] overflow-hidden">
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
      </div> */}

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
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

export default ClientReviews;
