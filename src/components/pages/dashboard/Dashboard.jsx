import MentorConsole from "@/components/MentorConsole";
import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
const Dashboard = () => {
  return (
    <MentorConsole>
      <div>
        <div className="w-full text-center bg-secondaryDark dark:bg-secondary dark:text-gray-300  text-gray-800 font-bold  text-2xl rounded-full py-2">
          Coming soon!
        </div>
        <h2 className="page-title mt-8">Dashboard</h2>
        <div className="flex flex-col">
          <p className="label-title">Your profile</p>
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
        <div className="flex flex-col">
          <p className="label-title mt-12">Student profile</p>
          <div className="flex gap-8">
            <div className="flex items-start gap-4 mt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[120px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[120px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          </div>
        <div className="flex flex-col">
          <p className="label-title mt-12">Student Feedback</p>
          <div className="flex gap-8">
            <div className="flex items-start gap-4 mt-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[50px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[50px]" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </div>
    </MentorConsole>
  );
};

export default Dashboard;
