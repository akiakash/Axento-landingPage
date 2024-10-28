import Image from "next/image";
import Link from "next/link";
import HeroImage1 from '../../Assets/images/heroImage1.png'
import HeroImage2 from '../../Assets/images/heroImage2.png'
import Gabriel from '../../Assets/images/Gabriel.png'
import CreateVector from '../../Assets/svg/CreateVector.svg'
import DesignVector from '../../Assets/svg/DesignVector.svg'
import DesktopDesign from '../../Assets/svg/DesktopDesign.svg'
import FidelityVector from '../../Assets/svg/FidelityVector.svg'
import PurpleVector from '../../Assets/svg/PurpleVector.svg'
import Tick from '../../Assets/svg/Tick.svg'



export default function Footer() {
  return (
    <div className="bg-[#19171E] text-[#fff] font-sans flex flex-col items-center justify-center py-16 mt-32">
      <section className="w-full max-w-5xl p-8 bg-[#0E0C12] rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-10 mb-16 relative overflow-hidden border-[1px] border-[#FFFFFF33]">
        <div className="absolute top-0 right-0 blur-[100px] rounded-full bg-[#b880fc] w-[500px] h-[300px] opacity-[0.6]"></div>

        <div className="flex-1 space-y-6 relative z-10 left-5 ">
          <h1 className="text-[55.34px] tracking-[-1px] leading-[64.4px]">
            Take Control of{" "}
            <span className="text-[#B880FC]">Your Tasks Today.</span>
          </h1>
          <p className="text-[18px] leading-[30.6px]">
            Unlock the full potential of efficient task management with axento.
            Sign up for our free trial today and experience the difference.
          </p>
          <button className="px-6 py-3 bg-[#613FE7] rounded-full hover:bg-[#B880FC] transition duration-200">
            Get started for free
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center">
        <div className="absolute text-[#fff] w-full">
              <div className="absolute w-[17%] bottom-[-150px] right-[530px]">
                <Image src={HeroImage1} width={216} height={335} alt="Image" />
              </div>
              <div className="absolute w-[17%] bottom-[60px] right-[350px] opacity-[0.99]">
              <Image src={Gabriel} alt="Image" />

              </div>
              <div className="absolute w-[21%] h-[235px] bg-[#19171E] rounded-[20px] top-[-47.5px] right-[252px]">
                <div className="absolute ">
                <Image src={DesktopDesign} alt="Image" />
                </div>
              </div>
            </div>
            </div>
      </section>

      {/* Footer Links Section */}
      <footer className="w-full max-w-5xl flex flex-col md:flex-row justify-between text-gray-300 text-sm border-t border-gray-800 pt-8">
        <div className="space-y-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-purple-400">axento.</h2>
          <p>Sign up for a free trial today and experience the difference.</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <Image
                src="/assets/logo/Facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://twitter.com">
              <Image
                src="/assets/logo/Twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://instagram.com">
              <Image
                src="/assets/logo/Instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://linkedin.com">
              <Image
                src="/assets/logo/Linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Features</h3>
            <ul className="space-y-2">
              <li>Project Management</li>
              <li>Gamification</li>
              <li>Collaboration</li>
              <li>Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">
              Integrations
            </h3>
            <ul className="space-y-2">
              <li>Notion</li>
              <li>Monday</li>
              <li>Clickup</li>
              <li>Google</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Resources</h3>
            <ul className="space-y-2">
              <li>Brand Guideline</li>
              <li>Newsroom</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
