import MentorConsole from "@/components/MentorConsole";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const MentorStats = ({ profileStatus = false, mentorDetails }) => {
  return (
    <div>
      <p className="label-input">Overview</p>
      {profileStatus == false ? (
        
        <div className="flex gap-8">
          <div className="flex items-start gap-4 mt-4 ">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex items-start gap-4 mt-4 ">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      ) : (
        <div>
            
        </div>
      )}
    </div>
  );
};

export default MentorStats;
