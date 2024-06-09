import React from "react";
import { Button } from "../ui/button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { useLocation } from "react-router-dom";

const ProfileFooter = ({ handleSave, handleNext, handlePrev }) => {
    const location = useLocation();
    const prevDisabled = location.pathname === "/profile/personal";
    const nextDisabled = location.pathname === "/profile/mentorship";
  return (
    <div className="flex gap-4 items-center justify-between w-full mt-12">
      <Button disabled={prevDisabled} onClick={handlePrev} variant={"formBtn"} className="flex items-center justify-between gap-1">
        {" "}<MdOutlineNavigateBefore className="text-xl mr-1"/>
        Previous 
      </Button>
      <Button onClick={handleSave} variant={"formBtn"}>
        {" "}
        Save
      </Button>
      <Button disabled={nextDisabled} onClick={handleNext} variant={"formBtn"} className="flex items-center justify-between gap-1">
        {" "}
        Next <MdOutlineNavigateNext className="text-xl ml-1"/>
      </Button>
    </div>
  );
};

export default ProfileFooter;
