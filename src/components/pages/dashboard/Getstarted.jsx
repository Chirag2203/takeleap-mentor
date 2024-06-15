import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const Getstarted = ({ profileStatus = false, menteeStatus = false }) => {
  return (
    <div className="flex flex-col">
      {profileStatus == false || menteeStatus == false ? (
        <div>
          <div className="from-primary to-violet-900 bg-gradient-to-tr p-4 rounded-lg">
            <p className="text-white text-xl font-medium">
              Complete your profile to get started
            </p>
          </div>

          <div className="flex gap-4">
            <div className="mt-2">
              {profileStatus == false ? (
                <Link to="/profile/personal">
                  <Button className="bg-purple-200  font-semibold flex items-center gap-1 ">
                    <FaCircleCheck className=" text-gray-500 m-1" /> Complete
                    your profile
                  </Button>
                </Link>
              ) : (
                <Button
                  className="bg-purple-800 text-white font-semibold flex items-center gap-1 "
                  disabled={true}
                >
                  <FaCircleCheck className=" text-green-500 m-1" /> Complete
                  your profile
                </Button>
              )}
            </div>
            <div className="mt-2">
              {menteeStatus == false ? (
                <Link to="/discover">
                  <Button className="bg-purple-200 font-semibold flex items-center gap-1 ">
                    <FaCircleCheck className=" text-gray-500 m-1" /> Mentee
                    Allotment
                  </Button>
                </Link>
              ) : (
                <Button
                  className="bg-purple-800 text-white font-semibold flex items-center gap-1 "
                  disabled={true}
                >
                  <FaCircleCheck className=" text-green-500 m-1" /> Mentee
                  Allotment
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Getstarted;
