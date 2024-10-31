import React from "react";
import Image from "next/image";
import Worldwide from "../../Assets/images/Worldwide.svg";
import Software from "../../Assets/images/Software.svg";
import Efficiency from "../../Assets/images/Efficiency.svg";
import Quantifying from "../../Assets/images/Quantifying.svg";

const Overview = () => {
  return (
    <div className="w-full flex justify-center mt-28">
      <div className="w-[1200px] flex justify-between">
        <div className="w-[24%] h-[282.2px] rounded-2xl relative flex flex-col items-center justify-center">
          <Image
            className="absolute top-[30px] w-[90px] h-[90px] object-cover"
            src={Worldwide}
            alt="Icon"
          />
          <div className="absolute top-[150px] text-[48px] font-medium">
            1.7K
          </div>
          <div className="absolute bottom-[25px] text-xl font-inter">
            Worldwide Users
          </div>
          <div className="absolute inset-0 rounded-2xl border border-[#FFFFFF1A]"></div>
        </div>

        <div className="w-[24%] h-[282.2px] bg-opacity-10 rounded-2xl relative flex flex-col items-center justify-center">
          <Image
            className="absolute top-[30px] w-[90px] h-[90px] object-cover"
            src={Software}
            alt="Icon"
          />
          <div className="absolute top-[150px] text-[48px] font-medium">1k</div>
          <div className="absolute bottom-[25px] text-xl font-inter">
            Software Download
          </div>
          <div className="absolute inset-0 rounded-2xl border border-[#FFFFFF1A]"></div>
        </div>

        <div className="w-[24%] h-[282.2px] bg-opacity-10 rounded-2xl relative flex flex-col items-center justify-center">
          <Image
            className="absolute top-[30px] w-[90px] h-[90px] object-cover"
            src={Efficiency}
            alt="Icon"
          />
          <div className="absolute top-[150px] text-[48px] font-medium">
            85.5%
          </div>
          <div className="absolute bottom-[25px] text-xl font-inter">
            Efficiency Metrics
          </div>
          <div className="absolute inset-0 rounded-2xl border border-[#FFFFFF1A]"></div>
        </div>

        <div className="w-[24%] h-[282.2px] bg-opacity-10 rounded-2xl relative flex flex-col items-center justify-center">
          <Image
            className="absolute top-[30px] w-[90px] h-[90px] object-cover"
            src={Quantifying}
            alt="Icon"
          />
          <div className="absolute top-[150px] text-[48px] font-medium">
            93.3%
          </div>
          <div className="absolute bottom-[25px] text-xl font-inter">
            Quantifying Productivity
          </div>
          <div className="absolute inset-0 rounded-2xl border border-[#FFFFFF1A]"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
