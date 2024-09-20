import Image from "next/image";
import React from "react";
import HeroImage1 from "../../Assets/images/heroImage1.png";
import HeroImage2 from "../../Assets/images/heroImage2.png";
import HeroImage3 from "../../Assets/images/heroImage3.png";
import HeroVector from "../../Assets/vector/heroVector.png";
const Hero: React.FC = () => {
  return (
    <section className="flex items-center  h-screen flex justify-center  relative ">
      <div className="absolute top-0 right-0">
        <Image src={HeroVector} width={216} height={335} alt="Logo" />
      </div>
      <div className="max-w-[1224px] w-full ">
        <div className=" flex flex-row  w-full ">
          <div className=" flex-1 text-white w-full">
            <div className="flex flex-col gap-[20px]">
              <h1 className="bg-[#19171E] max-w-max py-2 px-3 rounded-full border-[1px] border-[#FFFFFF33]">
                🏆 First AI powered project management tool
              </h1>
              <div>
                <h1 className="text-[56px] leading-[64.4px] tracking-[-2px] font-medium">
                  From Chaos to Control{" "}
                  <span className="text-[#C18EFF]"> Master Your Tasks </span>
                </h1>
                <h1 className="text-[56px] leading-[64.4px] tracking-[-2px] font-medium flex items-center gap-3">
                  with
                  <span>
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_14)">
                        <g clip-path="url(#clip1_1_14)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.03 45.8C36.0758 45.8 45.03 36.8458 45.03 25.8C45.03 14.7542 36.0758 5.79999 25.03 5.79999C13.9842 5.79999 5.03 14.7542 5.03 25.8C5.03 36.8458 13.9842 45.8 25.03 45.8ZM34.2975 24.0325L26.7975 16.5325C26.5669 16.2937 26.291 16.1033 25.986 15.9722C25.681 15.8412 25.353 15.7722 25.021 15.7694C24.6891 15.7665 24.3599 15.8297 24.0526 15.9554C23.7454 16.0811 23.4662 16.2668 23.2315 16.5015C22.9968 16.7362 22.8111 17.0154 22.6854 17.3226C22.5597 17.6298 22.4965 17.959 22.4994 18.291C22.5023 18.6229 22.5712 18.951 22.7022 19.256C22.8333 19.561 23.0237 19.8369 23.2625 20.0675L26.4942 23.3H17.53C16.867 23.3 16.2311 23.5634 15.7622 24.0322C15.2934 24.5011 15.03 25.1369 15.03 25.8C15.03 26.463 15.2934 27.0989 15.7622 27.5678C16.2311 28.0366 16.867 28.3 17.53 28.3H26.4942L23.2625 31.5325C23.0237 31.7631 22.8333 32.039 22.7022 32.344C22.5712 32.649 22.5023 32.977 22.4994 33.309C22.4965 33.6409 22.5597 33.9701 22.6854 34.2774C22.8111 34.5846 22.9968 34.8637 23.2315 35.0985C23.4662 35.3332 23.7454 35.5188 24.0526 35.6445C24.3599 35.7702 24.6891 35.8335 25.021 35.8306C25.353 35.8277 25.681 35.7588 25.986 35.6277C26.291 35.4967 26.5669 35.3063 26.7975 35.0675L34.2975 27.5675C34.7662 27.0987 35.0295 26.4629 35.0295 25.8C35.0295 25.1371 34.7662 24.5013 34.2975 24.0325Z"
                            fill="#B880FC"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_14">
                          <rect
                            x="0.0299988"
                            y="0.799988"
                            width="50"
                            height="50"
                            rx="25"
                            fill="white"
                          />
                        </clipPath>
                        <clipPath id="clip1_1_14">
                          <rect
                            width="50"
                            height="50"
                            fill="white"
                            transform="translate(0.0299988 0.799988)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>{" "}
                  Axento
                </h1>
              </div>
              <div>
                <h2 className="font-normal text-[18px] leading-[23px]">
                  Sign up for a free trial today and experience the difference.
                  Our <br /> intuitive interface, powerful features, and
                  dedicated.
                </h2>
              </div>
              <div>
                <button className="text-[#FFFFFF] leading-[27.2px]  text-[16px] py-[10px] px-[35px] bg-[#603EE4] font-medium rounded-[58px] ">
                  Start 14 Days Free Trial
                </button>
              </div>
            </div>
          </div>
          <div className=" flex-1 text-white w-full flex flex-row gap-[14px]  ">
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
