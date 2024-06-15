import React from "react";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiSpeakFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
const MenteePreferences = () => {
  const data = [
    {
      title: "Communication preferences",
      content: ["Email", "Phone"],
      logo: RiSpeakFill,
    },
  ];
  const Activites = ["activity1", "activity2"];
  const LORs = ["LOR1", "LOR2"];
  const SOPs = ["SOP1", "SOP2"];
  const resume = ["resume1", "resume2"];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        {data.map((d, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="discover-title"><d.logo/>{d.title}</p>
            <div className="flex flex-wrap gap-2">
              {d.content.map((c, i) => (
                <p
                  key={i}
                  className="text-sm bg-purple-300 px-4 py-2 rounded-md  dark:text-gray-900 font-medium"
                >
                  {c}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="discover-title"><MdMarkEmailRead/>LORs</p>
        <div className="flex flex-wrap gap-2">
          {LORs.map((a, i) => (
            <Link to={a}>
              <p key={i} className="preference-text-t1">
                {a}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="discover-title"><MdMarkEmailRead/>SOPs</p>
        <div className="flex flex-wrap gap-2">
          {SOPs.map((a, i) => (
            <Link to={a}>
              <p key={i} className="preference-text-t1">
                {a}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="discover-title"><IoNewspaperSharp/>Resume</p>
        <div className="flex flex-wrap gap-2">
          {resume.map((a, i) => (
            <Link to={a}>
              <p key={i} className="preference-text-t1">
                {a}
              </p>
            </Link>
          ))}
        </div>
        </div>
    </div>
  );
};

export default MenteePreferences;
