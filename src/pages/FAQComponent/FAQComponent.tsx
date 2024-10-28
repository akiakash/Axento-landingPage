import React, { useState } from "react";
import Image from "next/image";
import Minus from "../../Assets/svg/minus.svg";
import Plus from "../../Assets/svg/plus.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQComponent = () => {
  const faqData: FAQItem[] = [
    {
      question: "What is Gratask and how does it help with task management?",
      answer:
        "Gratask is an advanced task management Software as a Service (SaaS) designed to streamline workflows, enhance collaboration, and boost productivity. It provides an intuitive platform for organizing tasks, managing projects, and facilitating team communication.",
    },
    {
      question: "What features does Gratask offer for task management?",
      answer:
        "Gratask offers project management, task assignments, team collaboration tools, and real-time updates to improve productivity and efficiency.",
    },
    {
      question: "What support options are available if I encounter any issues?",
      answer:
        "Gratask provides a range of support options, including email support, live chat, and a dedicated knowledge base to help users resolve any issues.",
    },
    {
      question:
        "What happens to my data if I decide to cancel my subscription?",
      answer:
        "Your data will remain secure and accessible for a grace period of 30 days post-cancellation, after which it will be permanently deleted unless otherwise saved.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, Gratask offers a 14-day free trial so you can experience all features before committing to a subscription.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1200px] mx-auto relative h-auto text-left text-xl text-[#fff] font-urbanist mt-32">
      <div className="flex flex-col w-[40%] right-[60%] left-[4%]">
        <div className="bg-[#19171E] py-2 px-5 w-[270px] rounded-full border-[1px] border-[#FFFFFF33] mb-6">
          <h1 className="text-[16px] font-inter text-ivory">
            🤔 Frequently Asked Questions
          </h1>
        </div>
        <div className="text-[47.81px] tracking-[-1.5px] leading-[57.6px]">
          <span>
            <span>Common </span>
            <span className="text-[#b880fc]">
              Queries & <br />
              Answers
            </span>{" "}
            About Axento
          </span>
        </div>
        <p className="text-[#FCFDF2] text-[16px] pb-[24px] mt-4">
          Sign up for a free trial today and experience the difference. Our
          intuitive interface, powerful features, and dedicated.
        </p>
      </div>

      <div className="absolute w-[calc(100%_-_599.8px)] top-0 left-[600.2px] ">
        {faqData.map((item: FAQItem, index: number) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-[#19171E] p-4 rounded-t-2xl cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-[18px] leading-[30.6px] text-[#fff]">
                {item.question}
              </div>
              <Image
                className="h-6 w-6"
                alt="Toggle Icon"
                src={openIndex === index ? Minus : Plus}
              />
            </div>

            {openIndex === index && (
              <div className="border-[#19171E] border-[1px] border-solid box-border p-4 rounded-b-2xl text-[16px] leading-[27.2px] text-[#fff]">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
