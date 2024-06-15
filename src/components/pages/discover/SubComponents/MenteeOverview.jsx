import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const MenteeOverview = () => {
  const data=["MS CS", "MEM"]
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
        <div className="flex flex-wrap gap-2">
          {data.map((d,i)=>(
            <p key={i} className="text-sm font-semibold bg-purple-300 px-4 py-1 rounded-md dark:text-gray-900 text-gray-900">{d}</p>
          ))
          }
        </div>
      </div>
      </div>
        <Link to=""><FaLinkedin className="text-2xl text-secondary dark:text-secondaryDark" /></Link>
    </div>
  );
};

export default MenteeOverview;
