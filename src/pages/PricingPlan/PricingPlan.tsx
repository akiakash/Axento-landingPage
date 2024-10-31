import React, { useState } from "react";
import Image from "next/image";
import Access from "../../Assets/images/Access.svg";
import ProjectView from "../../Assets/images/ProjectView.svg";
import Reporting from "../../Assets/images/Reporting.svg";
import Members from "../../Assets/images/Members.svg";
import Calendar from "../../Assets/images/Calendar.svg";
import GamiIcon from "../../Assets/images/GamiIcon.svg";
import Branding from "../../Assets/images/Branding.svg";
import Consideration from "../../Assets/images/Consideration.svg";

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true); 
  const [animate, setAnimate] = useState<boolean>(true); 

  const handleToggle = (plan: boolean) => {
    setAnimate(false); 
    setTimeout(() => {
      setIsMonthly(plan);
      setAnimate(true); 
    }, 300); 
  };

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-[#fff] mt-32">
        <div className="bg-[#19171E] py-2 px-5 rounded-full border-[1px] border-[#FFFFFF33] mb-6">
          <h1 className="md:text-[16px] text-[12px] font-inter text-ivory">
            🔖 Pricing Plan
          </h1>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">
          <span>Premium </span>
          <span className="text-[#b880fc]">Pricing Plan</span>
        </div>

        <div className="text-[48px] leading-[67.2px] font-medium">
          Innovator&apos;s Choice Packages
        </div>

        <div className="w-full flex justify-center mt-8">
          <div
            className={`relative w-[260px] h-[65px] rounded-full p-1 
      bg-gradient-to-r ${
        isMonthly
          ? "from-[#613FE7] to-transparent"
          : "from-transparent to-[#613FE7]"
      } 
      transition-all duration-300 border-[#B880FC80] border-[1px] border-solid box-border`}
          >
            <div
              className="absolute top-1 left-1 h-[55px] w-[120px] rounded-full bg-[#613FE7] transition-transform duration-300 ease-in-out border-[#A076F980] border-[1px] border-solid box-border"
              style={{
                transform: isMonthly ? "translateX(0px)" : "translateX(130px)",
              }}
            ></div>

            <button
              className={`absolute top-0 left-0 w-1/2 h-full rounded-full text-lg font-medium flex items-center justify-center ${
                isMonthly ? "text-[#fff]" : "text-[#fff] border-transparent"
              } transition-all duration-300`}
              onClick={() => handleToggle(true)}
            >
              Monthly
            </button>

            <button
              className={`absolute top-0 right-0 w-1/2 h-full rounded-full text-lg font-medium flex items-center justify-center ${
                !isMonthly ? "text-[#fff]" : "text-[#fff] border-transparent"
              } transition-all duration-300`}
              onClick={() => handleToggle(false)}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mt-4 transition-all duration-500 ease-in-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {isMonthly ? (
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center mt-10 lg:mt-16">
            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Basic</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br> the
                  difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$8</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 5 users per month
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 5$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>
              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>

              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Plan Features</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Access} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Access to essential features</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={ProjectView} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Basic project views</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Reporting} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Basic reporting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Members} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Collaboration with 2 members</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Startup</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br>
                  the difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$12</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 5 user per month
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 8$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>

              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>

              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Features Included</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Calendar} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">
                      Calendar, Board, and Gantt views
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={GamiIcon} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Gamification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Branding} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Custom Branding</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Members}
                        alt="Members Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">Client Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Enterprise</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br>
                  the difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$15</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 5 user per month
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 12$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>

              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>
              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Plan Features</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Access} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Full Suite of Features</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Reporting} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Advanced Reporting & Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Consideration}
                        alt="Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">Priority consideration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Members}
                        alt="Members Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">Collaboration with 50 members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center mt-10 lg:mt-16">
            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Basic yearly</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br> the
                  difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$80</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 6 users per year
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 5$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>
              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>

              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Plan Features</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Access} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={ProjectView} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Reporting} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Members} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">Collaboration with 5 members</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Startup year</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br>
                  the difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$120</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 6 user per year
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 10$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>

              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>

              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Features Included</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Calendar} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={GamiIcon} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Branding} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Members}
                        alt="Members Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">Client Collaboration year</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3 p-6 rounded-2xl border-[#FFFFFF12] border-[1px] border-solid box-border text-left text-[#fff] font-urbanist relative h-[700px] transition-all duration-300 hover:bg-[#19171E] group">
              <div className="absolute top-[40px] left-[30px] bg-[#18171e] rounded-3xl w-[108px] h-[46px] flex items-center justify-center text-[20px]">
                <span className="font-medium">Enterprise year</span>
              </div>

              <div className="absolute top-[110px] left-[30px] text-[#d5d4d6]">
                <p>
                  Sign up for a free trial today and experience <br></br>
                  the difference.
                </p>
              </div>

              <div className="absolute top-[175px] left-[30px] w-[calc(100%_-_60px)] text-[48px]">
                <span className="font-medium">$150</span>
                <span className="text-[16px] text-[#d5d4d6]">
                  {" "}
                  / per 6 user per year
                </span>
              </div>

              <div className="absolute top-[245px] left-[30px] text-[#d5d4d6] text-sm">
                Afterwards 15$ Per user
              </div>

              <div className="absolute top-[305px] left-[30px] w-[calc(100%_-_60px)]">
                <button className="w-full py-3 bg-[#19171e] border border-[#B880FC] text-[#fff] rounded-[58px] text-[18px] transition-all duration-300 group-hover:bg-[#B880FC]">
                  Select Plan
                </button>
              </div>

              <div className="absolute w-full left-0 top-[400px] border-b-[1px] border-[#FFFFFF12]"></div>
              <div className="absolute top-[430px] left-[30px]">
                <h3 className="text-[20px] font-medium">Plan Features year</h3>

                <ul className="mt-6 space-y-5">
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Access} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image src={Reporting} alt="Icon" className="w-4 h-4" />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Consideration}
                        alt="Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">yearly plan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="relative w-8 h-8 rounded-full border-[2px] border-[#A076F9] bg-gradient-to-r from-[#613FE7] to-[#613FE700] flex items-center justify-center">
                      <Image
                        src={Members}
                        alt="Members Icon"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="ml-3">Collaboration with 70 members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingPlan;
