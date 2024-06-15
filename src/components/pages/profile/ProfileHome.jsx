import React from "react";
import discover from "@/assets/images/discover.png";
import { Button } from "@/components/ui/button";
import {
  MentorAdmitsRecieved,
  MentorEducation,
  MentorOverview,
  MentorPreferences,
  MentorPublication,
  MentorReviews,
  MentorWorkExperience,
} from "./SubComponents";
import MentorConsole from "@/components/MentorConsole";
import { Link } from "react-router-dom";

const ProfileHome = () => {
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
            <MentorOverview />
            <MentorEducation />
            <MentorPublication />
            <MentorWorkExperience />
            <MentorAdmitsRecieved />
          </div>
          <div className="flex flex-col justify-start w-1/2">
            <div className="flex flex-col  gap-2">
              <Button className="absolute top-4 right-4  bg-white dark:bg-gray-800 text-secondary dark:text-gray-300">
                Contact
              </Button>
               <Link to={"/profile/personal"}>
              <Button className="absolute bg-secondary hover:bg-secondary/95 text-white top-24 right-4">
               Edit Profile
              </Button>
              </Link>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <MentorPreferences />
              <MentorReviews />
            </div>
          </div>
        </div>
      </div>
    </MentorConsole>
  );
};

export default ProfileHome;
