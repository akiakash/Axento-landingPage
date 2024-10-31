import React from "react";
import Image from "next/image";
import Completed from "../../Assets/images/Completed.png";
import Ongoing from "../../Assets/images/Ongoing.png";
import Project from "../../Assets/images/Project.png";
import Organize from "../../Assets/images/Organize.svg";
import Drafting from "../../Assets/images/Drafting.svg";
import FriendRequest from "../../Assets/images/FriendRequest.png";
import Reminder from "../../Assets/images/Reminder.png";
import Meeting from "../../Assets/images/Meeting.png";
import Document from "../../Assets/images/Document.png";
import Points from "../../Assets/images/Points.svg";
import Leaderboard from "../../Assets/images/Leaderboard.svg";
import Badge from "../../Assets/images/Badge.png";
import ColConsole from "../../Assets/images/ColConsole.png";
import Consolebw from "../../Assets/images/Consolebw.png";
import Rankboard from "../../Assets/images/Rankboard.png";
import Gamification from "../../Assets/images/Gamification.png";
import Activity from "../../Assets/images/Activity.png";



const FeatureOverviewPanel = () => {
  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto relative rounded-3xl bg-[#19171e] border-[#FFFFFF1A] border-[1px] border-solid box-border h-[580px] overflow-hidden text-left text-xl text-[#fff] font-urbanist mt-32 px-6">
        <div className="absolute w-[40%] top-[calc(50%-192.52px)] right-[60%] left-[4%] h-[393px] overflow-hidden">
          <div className="absolute top-[calc(50%-182.5px)] left-[calc(50%-205.7px)] w-[411.4px] h-72 overflow-hidden">
            <Image
              className="absolute h-[calc(100%-148px)] w-full top-0 right-0 bottom-[148px] left-0 overflow-hidden object-cover"
              src={Completed}
              alt="Image"
            />
            <Image
              className="absolute h-[calc(100%-148px)] w-full top-[148px] right-0 bottom-0 left-0 max-w-full object-cover"
              src={Ongoing}
              alt="Image"
            />
          </div>
          <Image
            className="absolute h-[calc(100%-334px)] w-[calc(90%-22px)] top-[320px] right-[8px] bottom-[13px] left-[35px] rounded-2xl max-w-full object-cover"
            src={Project}
            alt="Image"
          />
        </div>

        <div className="absolute w-[calc(100%_-_708.5px)] top-[calc(50%-243.2px)] right-[85.54px] left-[622.96px] h-28 text-4xl">
          <div className="absolute top-[0.07px] left-[0.04px] leading-[56px] font-medium flex items-center w-[622px] h-28">
            <span className="w-full">
              <p className="m-0">Discover the Power of</p>
              <p className="m-0">
                <span className="text-[#b880fc]">AI Powered</span> Project
                Management
              </p>
            </span>
          </div>
        </div>

        <div className="absolute w-[calc(100%_-_658.5px)] top-[185.07px] left-[622px] text-[16px] leading-[27.2px] flex items-center h-[99px] opacity-80">
          Streamline your project management with Axento AI&apos;s powerful task
          creation and organization features. Designed to optimize efficiency
          and enhance team collaboration, Axento AI empowers you to stay ahead
          of your project timelines effortlessly.
        </div>

        <Image
          className="absolute top-[325.07px] left-[622px] w-[25px] h-[25px] object-contain"
          src={Organize}
          alt="Icon"
        />
        <div className="absolute top-[321.07px] left-[calc(50%+64px)] w-[470px] h-[115px] overflow-hidden">
          <div className="leading-[34px] font-medium flex items-center text-[20px]">
            Create and Organize Task With Axento AI
          </div>
          <div className="text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
            Input your project requirements, and let Axento AI generate a
            comprehensive task list with sub-tasks. This ensures no detail is
            missed and all necessary steps are covered.
          </div>
        </div>

        <Image
          className="absolute top-[450.98px] left-[622px] w-[25px] h-[25px] object-contain"
          src={Drafting}
          alt="Icon"
        />
        <div className="absolute top-[445.98px] left-[calc(50%+64px)] w-[470px] h-[115px] overflow-hidden">
          <div className="leading-[34px] font-medium flex items-center text-[20px]">
            Intelligent Message Drafting
          </div>
          <div className="text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
            Axento AI provides context-aware suggestions as you type, helping
            you draft effective messages quickly.
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative rounded-3xl bg-[#19171e] border-[#FFFFFF1A] border-[1px] border-solid box-border h-[470px] overflow-hidden text-left text-xl text-[#fff] font-urbanist mt-8 px-6">
        <div className="absolute top-20 left-20 w-[40%]">
          <div className="text-4xl font-medium mb-5 leading-tight">
            <p>Task Mastery Made Simple:</p>
            <p>Elevate Your Workflow</p>
          </div>

          <p className="text-[16px] leading-[27.2px] flex items-center text-[#fff] mb-8 opacity-80">
            Encapsulates the essence of our commitment to simplifying your daily
            tasks and enhancing your overall work experience.
          </p>

          <div className="flex justify-center mr-2 mt-10">
            <div className="flex items-start">
              <Image
                className="w-[25px] h-[25px] mr-4 mt-1"
                src={Organize}
                alt="Icon"
              />
              <div>
                <h3 className="leading-[34px] font-medium flex items-center text-[20px] mr-4">
                  Collaborative
                </h3>
                <p className="text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
                  Enhance team communication and collaboration with integrated
                  messaging and task discussions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                className="w-[25px] h-[25px] mr-4 mt-1"
                src={Drafting}
                alt="Icon"
              />
              <div>
                <h3 className="w-[130%] leading-[34px] font-medium flex items-center text-[20px] mr-4">
                  Real-time Updates
                </h3>
                <p className="w-[140%] text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
                  Stay informed with real-time updates on task progress.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[35%] top-12 right-16">
          <div className="space-y-3">
            <Image src={Activity} alt="Image" />
            <Image src={FriendRequest} alt="Image" />
            <Image src={Reminder} alt="Image" />
            <Image src={Meeting} alt="Image" />
            <Image src={Document} alt="Image" />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative rounded-3xl bg-[#19171e] border-[#FFFFFF1A] border-[1px] border-solid box-border h-[550px] overflow-hidden text-left text-xl text-[#fff] font-urbanist mt-8 px-6">
        <div className="absolute left-16 w-[40%]">
          <Image
            className="absolute z-10 top-32 left-[20px] overflow-hidden w-[95%] object-cover"
            src={Gamification}
            alt="Image"
          />
          <Image
            className="absolute top-[395px] left-[-35px] w-[190px] h-[190px] object-contain filter grayscale opacity-[0.4] rotate-[-20deg]"
            src={Rankboard}
            alt="Image"
          />
          <Image
            className="absolute z-0 top-[49px] left-[-29px] w-[155px] h-[155px] object-contain opacity-[0.6] rotate-[-20deg]"
            src={ColConsole}
            alt="Image"
          />
          <Image
            className="absolute z-10 top-[272px] right-[-40px] w-[170px] h-[170px] object-contain rotate-[11deg] opacity-[0.6]"
            src={Badge}
            alt="Image"
          />
        </div>

        <div className="absolute w-[calc(100%_-_708.5px)] top-[calc(50%-230.2px)] right-[85.54px] left-[622.96px] h-28">
        <Image
            className="absolute h-[246.3px] bottom-[-66px] right-[-86px]  object-contain"
            src={Consolebw}
            alt="Image"
          />
        <div className="absolute top-[0.07px] left-[0.04px] leading-[56px] font-medium flex items-center w-[622px] h-28 text-4xl">
        <p className="w-[70%]">
          <span className="text-[#b880fc]">Gamify</span>
          <span className="text-[#fff]"> Your Project </span>
          <span className="text-[#fff]"> Management with</span>
          <span className="text-[#b880fc]"> Axento</span>
        </p>
          </div>
        </div>

        <div className="absolute w-[calc(100%_-_658.5px)] top-[170.07px] left-[622px] text-[16px] leading-[27.2px] flex items-center h-[99px] opacity-80">
          Designed to make project management fun and rewarding, Axento
          transforms everyday tasks into exciting challenges, motivating your
          team to excel.
        </div>

        <Image
          className="absolute top-[312.07px] left-[622px] w-[25px] h-[25px] object-contain"
          src={Leaderboard}
          alt="Icon"
        />
        <div className="absolute top-[310.07px] left-[calc(50%+64px)] w-[470px] h-[115px] overflow-hidden">
        <div className="leading-[34px] font-medium flex items-center text-[20px]">
        Leaderboards
        </div>
        <div className="text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
        Track progress and see how team members stack up against each other,
            driving motivation and encouraging excellence.
          </div>
        </div>

        <Image
          className="absolute top-[430.98px] left-[622px] w-[25px] h-[25px] object-contain"
          src={Points}
          alt="Icon"
        />
        <div className="absolute top-[427.98px] left-[calc(50%+64px)] w-[470px] h-[115px] overflow-hidden">
        <div className="leading-[34px] font-medium flex items-center text-[20px]">
        Points and Badges
          </div>
          <div className="text-[14px] leading-[25.2px] text-[#d5d4d6] flex items-center">
            Celebrate your team&apos;s hard work and recognize individual
            contributions with a gamified reward system.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureOverviewPanel;
