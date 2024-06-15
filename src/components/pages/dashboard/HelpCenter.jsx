import { data } from "autoprefixer";
import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { MdHelpCenter } from "react-icons/md";
import { Link } from "react-router-dom";

const helpData = [
  {
    title: "Mentorship",
    data: [
      {
        title: "Mentorship Guidlines",
        link: "",
      },
      {
        title: "Contact your mentee",
        link: "",
      },
      {
        title: "Change your mentee",
        link: "",
      },

      {
        title: "Platform Feedback",
        link: "/feedback/platform",
      },
      {
        title: "Mentee Feedback",
        link: "/feedback/mentee",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [{ title: "How to mentor", link: "" }],
  },{
    title:"Policies",
    data : [
      {
        title: "Privacy Policy",
        link: "/policy/privacy",
      },
      {
        title: "Terms of Service",
        link: "/policy/terms",

      },
      {
        title: "Compensation Policy",
        link: "/policy/compensation",
      },
      {
        title:"Referral Policy",
        link:"/policy/referral",
      }
    ]
  },
  {
    title: "Others",
    data: [
      {
        title: "My Profile",
        link: "/profile/home",
      },
      {
        title: "Contact us",
        link: "mailto:hi@takeleap.xyz",
      },
    ],
  },
  
];
const HelpCenter = () => {
  return (
    <div className="w-1/5 h-fit flex flex-col items-start p-2 rounded-lg bg-purple-50 dark:bg-gray-900  ">
      <p className=" font-semibold flex items-center gap-1 text-primary dark:text-secondaryDark">
        {" "}
        <MdHelpCenter className="text-lg " />
        Help Center
      </p>
      <div>
        {helpData.map((item, index) => (
          <div className="">
            <p className="helpcenter-subtitle">{item.title}</p>
            <div className="ml-3 flex flex-col gap-1 ">
            {item.data.map((subitem, index) => (
              <Link
                to={subitem.link}
                key={index}
                className="flex items-center gap-2"
              >
                <p className="helpcenter-item">
                  {subitem.title} <HiExternalLink className="text-md mb-0.5 " />
                </p>
              </Link>
            ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HelpCenter;
