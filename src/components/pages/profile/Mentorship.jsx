import React, { useState } from "react";
import MentorConsole from "@/components/MentorConsole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ProfileFooter from "@/components/shared/ProfileFooter";
import axios from "axios";

import { useNavigate } from "react-router-dom";
const Mentorship = () => {
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [numberOfStudents, setNumberOfStudents] = useState(0);
  const[formData, setFormData] = useState({});
  const navigate = useNavigate();

  const mentorshipPrograms = [
    "Engineering Management (MEM)",
    "Information Systems & Management",
    "Business Analytics/Data Science",
    "MS/CS",
    "MS Engg. (Core)",
    "MBA",
    "MPP",
  ];
  const expertiseAreas = [
    "Profile Building",
    "GRE/GMAT/ TOEFL/ IELTS",
    "Mock Interviews",
    "Application Process",
  ];
  const reasonsToMentor = [
    "Pay it forward",
    "Personal Fulfillment",
    "Expand Your Network",
    "Develop Your Skills",
    "Money",
  ];

  const handleToggle = (setSelected, selected, value) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  };

  const incrementStudents = () => setNumberOfStudents((prev) => prev + 1);
  const decrementStudents = () =>
    setNumberOfStudents((prev) => Math.max(0, prev - 1));

  const handleSave = async (e) => {
    formData.programs = selectedPrograms;
    formData.expertise = selectedExpertise;
    formData.reasons = selectedReasons;
    formData.students = numberOfStudents;

    e.preventDefault();
    try {
      console.log("Form Data:", formData);
      const response = await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Response:", response.data);
      // Add success handling here
    } catch (error) {
      console.error("Error:", error);
      // Add error handling here
    }
  };

  const handleNext = () => {
    // move to /personal/professional
    navigate("/profile/professional");

  };

  const handlePrev = () => {
    // Add logic to navigate to the previous page
    navigate("/profile/professional");
  };
  return (
    <MentorConsole>
      <div className="p-6">
        <h2 className="page-title">Mentorship Details</h2>

        <div className="mb-8">
          <label className="label-title">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>What programs do you want to be the mentor of.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            Programs for Mentorship
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedPrograms.map((program, index) => (
              <span key={index} className="toggle-display">
                {program}
              </span>
            ))}
          </div>
          <ToggleGroup type="multiple" className="mentorship-toggle-group">
            {mentorshipPrograms.map((program, index) => (
              <ToggleGroupItem
                key={index}
                value={program}
                aria-label={program}
                onClick={() =>
                  handleToggle(setSelectedPrograms, selectedPrograms, program)
                }
                className={` ${
                  selectedPrograms.includes(program)
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {program}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="mb-8">
          <label className="label-title"> <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your field of expertise.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>Expertise</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedExpertise.map((expertise, index) => (
              <span key={index} className="toggle-display">
                {expertise}
              </span>
            ))}
          </div>
          <ToggleGroup type="multiple" className="mentorship-toggle-group">
            {expertiseAreas.map((expertise, index) => (
              <ToggleGroupItem
                key={index}
                value={expertise}
                aria-label={expertise}
                onClick={() =>
                  handleToggle(
                    setSelectedExpertise,
                    selectedExpertise,
                    expertise
                  )
                }
                className={` ${
                  selectedExpertise.includes(expertise)
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {expertise}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="mb-8">
          <label className="label-title"> <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Your reasons to take up mentorship.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>Why You Want to Mentor</label>
          <div className="mt-2 flex flex-wrap gap-2 ">
            {selectedReasons.map((reason, index) => (
              <span key={index} className="toggle-display">
                {reason}
              </span>
            ))}
          </div>
          <ToggleGroup type="multiple" className="mentorship-toggle-group">
            {reasonsToMentor.map((reason, index) => (
              <ToggleGroupItem
                key={index}
                value={reason}
                aria-label={reason}
                onClick={() =>
                  handleToggle(setSelectedReasons, selectedReasons, reason)
                }
                className={` ${
                  selectedReasons.includes(reason)
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {reason}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="mb-8">
          <label className="label-title"> <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="bg-transparent border-none p-0">
                  <BsInfoCircleFill />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Number of students you want to mentor.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>Number of Students</label>
          <div className="flex items-center gap-2">
            <Button onClick={decrementStudents}>-</Button>
            <Input
              type="number"
              value={numberOfStudents}
              onChange={(e) => setNumberOfStudents(e.target.value)}
              className="text-center w-fit"
            />
            <Button onClick={incrementStudents}>+</Button>
          </div>
        </div>
        <ProfileFooter handleSave={handleSave} handleNext={handleNext} handlePrev={handlePrev} /> 
      </div>
    </MentorConsole>
  );
};

export default Mentorship;
