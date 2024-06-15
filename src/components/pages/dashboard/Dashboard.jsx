import MentorConsole from "@/components/MentorConsole";
import React, { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import HelpCenter from "./HelpCenter";
import Getstarted from "./Getstarted";
import MenteeCard from "./MenteeCard";
import MentorStats from "./MentorStats";

const userData={
  name:"Chirag",
  slotsAvailable:5,
  profileStatus:true,
  menteeStatus:true,
  menteeDetails:[
    {
      name:"Rahul",
      email:"example@gmail.com",
      phone:"+91098273645278",
      programs:["MS","MBA"],
      
    },
    {
      name:"Rahul",
      email:"example@gmail.com",
      phone:"+91098273645278",
      programs:["MS","MBA"],
      
    },
    {
      name:"Rahul",
      email:"example@gmail.com",
      phone:"+91098273645278",
      programs:["MS","MBA"],
      
    },
   {
    name:"Raju",
    email:"example@gmail.com",
    phone:"+91098273645278",
    programs:["MS","MBA"],
   }
  ]
}
const Dashboard = () => {
  const [greetings, setGreetings] = useState("");
  useEffect(() => {
    const currHour = new Date().getHours();
    if (currHour < 12) {
      setGreetings("Good Morning");
    } else if (currHour < 18) {
      setGreetings("Good Afternoon");
    } else {
      setGreetings("Good Evening");
    }
  }, []);
  return (
    <MentorConsole>
      <div>
      <p className="page-title">{greetings}, {userData.name}!</p>

        <div className="flex gap-4 justify-between">
          <div className="w-4/5 flex flex-col gap-4">

          <Getstarted
          profileStatus={userData.profileStatus}
          menteeStatus={userData.menteeStatus}
          />
          {/* <MentorStats/> */}
           <MenteeCard menteeDetails={userData.menteeDetails} menteeStatus={userData.menteeStatus}/>

          </div>
          <HelpCenter/>
        </div>
      </div>
      
    </MentorConsole>
  );
};

export default Dashboard;
