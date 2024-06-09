import React, { useState } from "react";
import axios from "axios";
import MentorConsole from "@/components/MentorConsole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileFooter from "@/components/shared/ProfileFooter";
import { useNavigate } from "react-router-dom";

const Professional = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    experiences: [{ title: "", companyName: "", startDate: "", endDate: "" }],
  });

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...formData.experiences];
    newExperiences[index][name] = value;
    setFormData({ ...formData, experiences: newExperiences });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { title: "", companyName: "", startDate: "", endDate: "" }],
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNext = () => {
    navigate("/profile/mentorship");
  };

  const handlePrev = () => {
    navigate("/profile/academic");
  };

  return (
    <MentorConsole>
      <div className="p-6">
        <form className="flex flex-wrap gap-4">
          <h2 className="page-title">Professional Experiences</h2>
          {formData.experiences.map((experience, index) => (
            <div key={index} className="w-full flex flex-wrap gap-4 mb-4">
              <div className="w-1/3">
                <label className="label-input">Title</label>
                <Input
                  type="text"
                  name="title"
                  value={experience.title}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="label-input">Company Name</label>
                <Input
                  type="text"
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="label-input">Start Date</label>
                <Input
                  type="date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
              <div className="w-1/3">
                <label className="label-input">End Date</label>
                <Input
                  type="date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
              </div>
            </div>
          ))}
          <Button onClick={addExperience} variant={"formBtn"}>
            Add Position
          </Button>

          <ProfileFooter
            handleSave={handleSave}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </form>
      </div>
    </MentorConsole>
  );
};

export default Professional;
