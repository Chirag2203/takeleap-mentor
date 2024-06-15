import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsInfoCircleFill } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";
const MenteeCard = ({ menteeStatus = false, menteeDetails }) => {
  return (
    <div className="mt-4">
      <p className="label-input">Mentee Details</p>
      {menteeStatus == false ? (
        <div className=" p-4 rounded-lg w-3/4">
          <p className="font-bold text-secondary flex items-center gap-1 ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    Please wait for a mentee to be alloted to you. You will be
                    notified when a mentee is alloted to you. For any queries, contact
                    us.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            Mentee Allotment Pending.
          </p>
          <div className="flex items-start gap-4 mt-4">
            <Skeleton className="h-12 w-12 rounded-full" />
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
      ) : (
        <div className="flex flex-wrap gap-4">
          {menteeDetails.map((item, index) => (
            <Link to="/discover/mentee">
            <div className="border flex gap-4 dark:border-purple-700 p-4 rounded-lg  items-center bg-gradient-to-tr from-violet-600 to-purple-700">
              <div className="flex gap-4 w-5/6">
                <img
                  src={"https://avatar.iran.liara.run/public/22"}
                  alt=""
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-gray-100 text-lg ">
                    {item.name}
                  </p>
                  <p className="text-sm flex items-center gap-1 text-gray-200 ">
                    <MdEmail />
                    {item.email}
                  </p>
                  <p className="text-sm flex items-center gap-1 text-gray-200 ">
                    <FaPhoneAlt />
                    {item.phone}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.programs.map((program, i) => (
                      <p
                        key={i}
                        className="text-sm font-semibold bg-purple-300 px-2 py-1 rounded-md dark:text-gray-900 text-gray-900"
                      >
                        {program}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <RiArrowDropRightLine className=" text-3xl text-white justify-end w-1/5  " />
            </div>
          </Link>))}
        </div>
      )}
    </div>
  );
};

export default MenteeCard;
