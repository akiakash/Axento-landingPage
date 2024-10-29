import Image from "next/image";
import Link from "next/link";
import logo from "../../Assets/Logo/logo.png";
import HeroImage1 from "../../Assets/images/heroImage1.png";
import HeroImage2 from "../../Assets/images/heroImage2.png";
import Gabriel from "../../Assets/images/Gabriel.png";
import CreateVector from "../../Assets/svg/CreateVector.svg";
import DesignVector from "../../Assets/svg/DesignVector.svg";
import DesktopDesign from "../../Assets/svg/DesktopDesign.svg";
import FidelityVector from "../../Assets/svg/FidelityVector.svg";
import PurpleVector from "../../Assets/svg/PurpleVector.svg";
import Tick from "../../Assets/svg/Tick.svg";
import HiPurVector from "../../Assets/svg/HiPurVector.svg";
import HiBorVector from "../../Assets/svg/HiBorVerctor.svg";
import Facebook from "../../Assets/Logo/Facebook.svg";
import Twitter from "../../Assets/Logo/Twitter.svg";
import Instagram from "../../Assets/Logo/Instagram.svg";
import Linkedin from "../../Assets/Logo/Linkedin.svg";

export default function Footer() {
  return (
    <div className="bg-[#19171E] text-[#fff] font-sans flex flex-col items-center justify-center py-10 mt-32">
      <section className="w-full max-w-[1200px] mx-auto relative rounded-3xl h-[445px] bg-[#0E0C12] shadow-xl flex flex-col lg:flex-row items-center gap-10 mb-16 overflow-hidden border-[1px] border-[#FFFFFF33]">
        <div className="absolute top-0 right-0 blur-[100px] rounded-full bg-[#b880fc] w-[500px] h-[320px] opacity-[0.6]"></div>

        <div className="flex-1 space-y-6 relative z-10 left-20">
          <h1 className="text-[55.34px] tracking-[-1px] leading-[64.4px] w-[74%]">
            Take Control of{" "}
            <span className="text-[#B880FC]">Your Tasks Today.</span>
          </h1>
          <p className="text-[18px] leading-[30.6px] w-[74%]">
            Unlock the full potential of efficient task management with axento.
            Sign up for our free trial today and experience the difference.
          </p>
          <button className="px-6 py-3 bg-[#613FE7] rounded-full hover:bg-[#B880FC] transition duration-200">
            Get started for free
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="absolute text-[#fff] w-full">
            <div className="absolute w-[15%] bottom-[-185px] right-[585px]">
              <Image src={HeroImage1} width={216} height={335} alt="Image" />
            </div>
            <div className="absolute w-[12%] bottom-[60px] right-[395px] opacity-[0.99]">
              <Image src={Gabriel} alt="Image" />
            </div>
            <div className="absolute w-[21%] h-[255px] bg-[#19171E] rounded-[21px] top-[-35.5px] right-[311.5px] overflow-hidden">
              <div className="absolute w-[70%] top-12 left-10">
                <Image src={DesktopDesign} alt="Image" />
              </div>

              <div className="relative w-[92%] h-[61px] left-10 top-32 z-10">
                <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#E26EE51A] to-[#A076F91A]"></div>

                <div className="absolute top-[2.5px] left-[2px] w-[calc(100%_-_4px)] h-[calc(100%_-_5px)] rounded-[9px] bg-gradient-to-r from-[#A076F9] to-[#A076F900] opacity-40"></div>

                <div className="relative flex items-center h-full px-4">
                  <div className="relative flex items-center justify-center w-8 h-8 mr-3">
                    <Image
                      src={PurpleVector}
                      alt="Icon"
                      className="w-full h-full"
                    />
                    <Image src={Tick} alt="Tick" className="absolute w-4 h-4" />
                  </div>

                  <div className="space-y-2">
                    <Image src={CreateVector} alt="Create Wireframe" />
                    <Image src={DesignVector} alt="#design" />
                  </div>
                </div>
              </div>

              <div className="relative w-[92%] h-[61px] left-10 top-36 z-10">
                <div className="absolute inset-0 rounded-[10px] bg-gradient-to-r from-[#E26EE51A] to-[#A076F91A]"></div>

                <div className="absolute top-[1.8px] left-[2px] w-[calc(100%_-_3px)] h-[calc(100%_-_4px)] rounded-[9px] bg-[#19171E]"></div>

                <div className="relative flex items-center h-full px-4">
                  <div className="relative flex items-center justify-center w-8 h-8 mr-3">
                    <Image
                      src={HiBorVector}
                      alt="Icon"
                      className="w-full h-full"
                    />
                    <Image
                      src={HiPurVector}
                      alt="Tick"
                      className="absolute w-8 h-8"
                    />
                  </div>

                  <div className="space-y-2">
                    <Image src={FidelityVector} alt="HI-Fidelity" />
                    <Image src={DesignVector} alt="#design" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl flex flex-col md:flex-row justify-between text-gray-300 text-sm pt-8">
        <div className="space-y-4 mb-8 md:mb-0">
        <div className="flex items-center">
          <Image src={logo} width={200} height={80} alt="Logo" />
        </div>
          <p>Sign up for a free trial today and 
          experience the difference.</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <Image
                src={Facebook} alt="Logo"
                width={14}
                height={14}
              />
            </Link>
            <Link href="https://twitter.com">
              <Image
                src={Twitter} alt="Logo"
                width={14}
                height={14}
              />
            </Link>
            <Link href="https://instagram.com">
              <Image
                src={Instagram} alt="Logo"
                width={14}
                height={14}
              />
            </Link>
            <Link href="https://linkedin.com">
              <Image
                src={Linkedin} alt="Logo"
                width={14}
                height={14}
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h3 className="text-[16px] leading-[27.2px] font-urbanist text-[#B880FC]">Features</h3>
            <ul className="space-y-3 text-[#FCFDF2] mt-7">
              <li>Project Management</li>
              <li>Gamification</li>
              <li>Collaboration</li>
              <li>Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] leading-[27.2px] font-urbanist text-[#B880FC]">
              Integrations
            </h3>
            <ul className="space-y-3 text-[#FCFDF2] mt-7">
              <li>Notion</li>
              <li>Monday</li>
              <li>Clickup</li>
              <li>Google</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[16px] leading-[27.2px] font-urbanist text-[#B880FC]">Resources</h3>
            <ul className="space-y-3 text-[#FCFDF2] mt-7">
              <li>Brand Guideline</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
