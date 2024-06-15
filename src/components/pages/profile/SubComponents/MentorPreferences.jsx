import React from "react";
import { IoIosStar } from "react-icons/io";

const MentorPreferences = () => {
  const data = [
    {
      title: "Mentorship Offered for programs",
      content: ["MS CS", "MEM"],
    },
    {
      title: "Communication preferences",
      content: ["Email", "Phone"],
    },
    {
      title: "Expertise Areas",
      content: [
        "Profile Building",
        "Application Process",
        "Mock Interviews",
        "GRE/GMAT/TOEFL/IELTS",
      ],
    },
  ];
  const Activites = ["activity1", "activity2"];

  const Reviews = [
    {
      name: "name1",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio soluta nesciunt. Sed accusamus ipsam a tenetur animi aperiam totam?",
      rating: "4.4",
    },
    {
      name: "name2",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio soluta nesciunt. Sed accusamus ipsam a tenetur animi aperiam totam?",
      rating: "4.6",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        {data.map((d, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="discover-title">{d.title}</p>
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
        <p className="discover-title">Activites</p>
        <div className="flex flex-wrap gap-2">
          {Activites.map((a, i) => (
            <p
              key={i}
              className="text-sm border border-purple-400 px-4 py-2 rounded-md text-gray-900 dark:text-gray-200 font-medium"
            >
              {a}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="discover-title">Student Reviews</p>
        <div className="flex flex-col gap-4 mt-2">
          {Reviews.map((r, i) => (
            <div key={i} className="flex flex-col gap-2 border-purple-200 p-4 rounded-md border ">
              <div className="flex gap-2">
                <img
                  src={"https://avatar.iran.liara.run/public/22"}
                  alt=""
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-medium dark:text-gray-200 text-gray-700">
                    {r.name}
                  </p>
                  <p className="dark:text-gray-300 text-gray-700 flex items-center gap-1"><IoIosStar className="text-amber-500" />{r.rating}</p>
                </div>
              </div>
              <p className="dark:text-gray-300 text-gray-700">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorPreferences;
