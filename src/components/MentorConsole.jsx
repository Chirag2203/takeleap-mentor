import React from "react";
import Sidebar from "./shared/Sidebar";
import Header from "./shared/Header";
import { SidebarData } from "@/lib/data/sidebar";

const MentorConsole = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex">
        <div className="w-1/4">
          <Sidebar data={SidebarData} />
        </div>
        <div className="w-3/4 p-8 dark:bg-gray-950 bg-white dark:text-gray-200 text-gray-900 ">{children}</div>
      </div>
    </div>
  );
};

export default MentorConsole;
