import React, { useState } from 'react';
import { MdWorkHistory } from 'react-icons/md';
import {
  CustomAccordion,
  CustomAccordionItem,
} from '@/components/ui/custom-accordion'; // Adjust this import path as needed
import { FaAward } from "react-icons/fa";
const MenteeWorkExperience = () => {
  const data = [
    {
      company: "Google",
      role: "Software Engineer",
      duration: "June 2019 - March 2021",
      award: ["Best Employee of the year 2020"],
      promotions: "2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      duration: "June 2019 - March 2021",
      award: ["Best Employee of the year 2020", "Best Employee of the year 2021"],
      promotions: "2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="mt-6 w-full">
      <p className="discover-title ">
        <MdWorkHistory /> Work Experience
      </p>
      <CustomAccordion>
        {data.map((d, i) => (
          <CustomAccordionItem
            key={i}
            title={
              <div className="flex w-full justify-between items-center">
                <p className='font-medium text-lg'>{d.role}</p>
                <p>{d.company}</p>
              </div>
            }
            isOpen={openIndexes.includes(i)}
            onClick={() => toggleItem(i)}
          >
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <p className='font-medium'>Promotions Received: {d.promotions}</p>
                <p>{d.duration}</p>
              </div>
                <div className="flex flex-wrap gap-2 my-1">
                    {d.award.map((a, i) => (
                      <p className='flex gap-1 items-center font-medium dark:text-secondaryDark text-secondary'><FaAward/>{a}</p>
                    ))}
                </div>
              <p className='text-md'>{d.description}</p>
            </div>
          </CustomAccordionItem>
        ))}
      </CustomAccordion>
    </div>
  );
};

export default MenteeWorkExperience;
