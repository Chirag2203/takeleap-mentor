import React from "react";
import { MdLocationPin } from "react-icons/md";

const MentorOverview = () => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="flex gap-2 items-center">
      <img
        src={"https://avatar.iran.liara.run/public/22"}
        alt=""
        className="rounded-full w-32 h-32 object-cover"
      />
      <div className="flex flex-col font-medium ">
        <p className="font-bold">Avinash Kumar</p>
        <p className="dark:text-gray-400 text-gray-700 flex items-center gap-1">
          <MdLocationPin />
          California
        </p>
      </div>
      </div>
      <div className="px-4 py-2 rounded-full font-bold text-sm bg-green-600 text-white">
        <p>4 Slots available</p>
      </div>
    </div>
  );
};

export default MentorOverview;
