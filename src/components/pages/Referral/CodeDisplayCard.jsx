import React from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoArrowForwardCircle } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsInfoCircleFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { AiOutlineCopy } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const CodeDisplayCard = ({ referralCode, handleGenerate, loading }) => {
  const [copySuccess, setCopySuccess] = React.useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      (err) => {
        setCopySuccess("Failed to copy!");
        setTimeout(() => setCopySuccess(""), 2000);
      }
    );
  };

  const handleShareToWhatsApp = () => {
    const message = `Join me as a mentor on takeleap.xyz today! Use this referral code to earn awards. Referral code: ${referralCode}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-1/2 p-4 rounded-md mt-8">
      {referralCode === "" ? (
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold text-secondary dark:text-secondaryDark flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-bold">
                    Generate your referral code and share it with your friends
                    to earn rewards. For more details read our Referral Policy.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            Let's get started
          </p>
          <Button
            className="bg-secondaryDark mt-4 flex gap-1 items-center hover:bg-violet-600 text-md hover:text-white w-2/3"
            onClick={handleGenerate}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span>Generating</span>
                <CgSpinner className="animate-spin text-lg" />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>Generate Code</span>
                <IoArrowForwardCircle />
              </div>
            )}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 items-start">
          <p className="text-xl font-semibold text-secondary dark:text-secondaryDark">
            Your Referral Code
          </p>
          <div className="flex items-center gap-2">
            <span className="bg-secondaryDark dark:bg-purple-900 p-1.5 px-6 rounded-md font-semibold text-lg">
              {referralCode}
            </span>
            <Button
              className="bg-purple-200 dark:bg-purple-900 flex gap-1 items-center hover:bg-violet-600 text-md hover:text-white"
              onClick={handleCopy}
            >
              <AiOutlineCopy className="text-lg" />
              {copySuccess ? <span>Copied to clipboard</span> : <span>Copy Code</span>}
            </Button>
            <Button
              className="bg-green-700 flex gap-1 items-center hover:bg-green-600 text-md text-white"
              onClick={handleShareToWhatsApp}
            >
              <FaWhatsapp className="text-lg" />
              <span>Share on WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeDisplayCard;
