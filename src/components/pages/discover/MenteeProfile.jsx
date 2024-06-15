import MentorConsole from "@/components/MentorConsole";
import React from "react";
import discover from "@/assets/images/discover.png";
import { Button } from "@/components/ui/button";
import {
  MenteeEducation,
  MenteeOverview,
  MenteePreferences ,
  MenteePublication,
  MenteeWorkExperience,
} from "./SubComponents";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const MenteeProfile = () => {
  return (
    <MentorConsole>
      <div className="relative">
        <img
          src={discover}
          alt=""
          className="h-48 w-full top-0 left-0  object-cover"
        />

        <div className="flex w-full z-999 gap-8 p-4">
          <div className="flex flex-col w-1/2 p-4 py-6 bg-white dark:bg-gray-900 -mt-16 rounded-md shadow-md border-gray-600">
            <MenteeOverview />
            <MenteeEducation />
            <MenteePublication />
          </div>
          <div className="flex flex-col justify-start w-1/2">
            
            <Link to="/profile/personal">
              <Button className="absolute flex gap-2 items-center bg-secondary hover:bg-secondary/95 text-white top-12 right-4">
               Contact Mentee<GoArrowUpRight />
              </Button>
            </Link>
            <div className="flex w-full flex-col gap-4 items-start">
              <MenteeWorkExperience />
              <MenteePreferences />
            </div>
          </div>
        </div>
      </div>
    </MentorConsole>
  );
};

export default MenteeProfile;
