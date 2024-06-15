import React from "react";
import { FaCanadianMapleLeaf, FaUniversity } from "react-icons/fa";
import { GiBrazilFlag } from "react-icons/gi";

const MenteeEducation = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 mt-8">
      <p className="discover-title">
        <FaUniversity />
        Education
      </p>
      <div className="flex flex-col w-full  gap-2 items-center">
        <div className="flex gap-2 border rounded-md dark:border-gray-700  w-full p-4">
          <img
            src={"https://avatar.iran.liara.run/public/22"}
            alt=""
            className="rounded-full w-24 h-24 object-cover"
          />
          {/* <img
            src={data.profileImage}
            alt=""
            className="rounded-full w-16 h-16 object-cover"
          /> */}
          <div className="w-full">
            <p className="font-bold text-lg">NITK Surathkal</p>
            <p className="text-xs font-medium dark:text-gray-300 text-gray-700">
              Btech
            </p>
            <p className="text-xs font-medium dark:text-gray-300 text-gray-700">
              Computer Science
            </p>
            <div className="flex items-center justify-start gap-4 mt-4">
              <div className="flex items-center gap-2">
                <GiBrazilFlag /> Brazil
              </div>
              <div className="flex items-center gap-2">
                <FaCanadianMapleLeaf /> Fall 2024
              </div>
            </div>
            <div className="flex text-sm mt-4 font-medium justify-between gap-1">
              <div className="flex flex-col items-center">
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  UG CGPA
                </p>
                <p>9.23</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  Class rank
                </p>
                <p>9/23</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  GRE
                </p>
                <p>320</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold text-gray-700 dark:text-gray-300">
                  IELTS
                </p>
                <p>7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeEducation;
