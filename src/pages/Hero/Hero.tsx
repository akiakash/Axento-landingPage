import Image from "next/image";
import React from "react";
import HeroImage1 from "../../Assets/images/heroImage1.png";
import HeroImage2 from "../../Assets/images/heroImage2.png";
import HeroImage3 from "../../Assets/images/heroImage3.png";
import HeroVector from "../../Assets/vector/heroVector.png";
import Arrow from "../../Assets/svg/arrow.svg";
const Hero: React.FC = () => {
  return (
    <section className="flex items-center  h-screen flex justify-center  relative px-4 sm:pt-0 pt-[100px]">
      <div className="absolute top-0 right-0">
        <Image src={HeroVector} width={216} height={335} alt="Logo" />
      </div>
      <div className="max-w-[1224px] w-full ">
        <div className=" flex xl:flex-row flex-col xl:gap-0 gap-[20px]  w-full ">
          <div className=" flex-1 text-white w-full">
            <div className="flex flex-col xl:gap-[20px] gap-[12px] xl:items-start items-center">
              <h1 className="bg-[#19171E] max-w-max py-2 px-3 rounded-full border-[1px] md:text-[16px] text-[12px] border-[#FFFFFF33]">
                🏆 First AI powered project management tool
              </h1>
              <div>
                <h1 className="xl:text-[56px] md:text-[46px] text-[32px]  xl:leading-[64.4px] lg:leading-[56px] leading-[46px] tracking-[-2px] font-medium flex  flex-col xl:items-start items-center ">
                  From Chaos to Control
                  <span className="text-[#C18EFF]"> Master Your Tasks </span>
                </h1>
                <h1 className="xl:text-[56px] md:text-[46px] text-[32px] xl:leading-[64.4px] md:leading-[56px] text-[36px] tracking-[-2px] font-medium flex xl:justify-start justify-center md:gap-3 gap-2 items-center">
                  with
                  <span>
                    <Image
                      src={Arrow}
                      width={50}
                      height={50}
                      alt="Logo"
                      className="md:w-[50px] w-[32px]"
                    />
                  </span>
                  Axento
                </h1>
              </div>
              <div>
                <h2 className="font-normal xl:text-[18px] md:text-[16px]  text-[12px] leading-[23px] xl:text-start text-center">
                  Sign up for a free trial today and experience the difference.
                  Our <br /> intuitive interface, powerful features, and
                  dedicated.
                </h2>
              </div>
              <div>
                <button className="text-[#FFFFFF] leading-[27.2px]  md:text-[16px] text-[12px] md:py-[10px] py-1 md:px-[35px] px-4 bg-[#603EE4] font-medium rounded-[58px] ">
                  Start 14 Days Free Trial
                </button>
              </div>
            </div>
          </div>
          <div className=" flex-1 text-white w-full flex flex-row gap-[14px]  justify-center">
            <div className="flex flex-col gap-[10px]">
              <Image src={HeroImage1} width={216} height={335} alt="Logo" />
              <Image src={HeroImage3} width={147} height={51} alt="Logo" />
            </div>
            <div className="relative right-0">
              <Image src={HeroImage2} width={427} height={423} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
