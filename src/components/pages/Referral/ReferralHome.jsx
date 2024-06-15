import MentorConsole from "@/components/MentorConsole";
import React from "react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsInfoCircleFill } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";
import CodeDisplayCard from "./CodeDisplayCard";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";
const ReferralHome = () => {
    const [referralCode, setReferralCode] = useState("123456");
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setReferralCode("123456");
        // try{
        //     setLoading(true);
        //     const response = await axios.post("https://api.example.com/referral/generate");
        //     setReferralCode(response.data.referralCode);
        // } catch(error){
        //     console.error("Error:", error);
        // } finally{
        //     setLoading(false);
        // }
    }

  return (
    <MentorConsole>
      <div>
       <div className="flex justify-between items-start">
       <p className="page-title">Refer and Earn </p>
       <Link to="/policy/referral">
       <Button variant={"formBtn"}>
        Know more <GoArrowUpRight className='text-lg'/> 
       </Button></Link>
       </div>
        <div className=" p-4 rounded-lg w-3/4">
          <p className="font-bold text-secondary dark:text-secondaryDark flex items-center gap-1 ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Please use your referral link to refer your friends and earn
                    rewards. We are working on showing your referral stats and
                    rewards here. Stay tuned!
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            Referal Stats (Coming soon)
          </p>
          <div className="flex gap-8">
            <div className="flex items-start gap-4 mt-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeDisplayCard 
        referralCode={referralCode}
        handleGenerate={handleGenerate}
        loading={loading}

        />
      </div>
    </MentorConsole>
  );
};

export default ReferralHome;
