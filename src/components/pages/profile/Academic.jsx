import React, { useState } from "react";
import axios from "axios";
import MentorConsole from "@/components/MentorConsole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileFooter from "@/components/shared/ProfileFooter";
import { useNavigate } from "react-router-dom";

const Academic = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      masterUni: "",
      masterProgram: "",
      gpaScore: "",
      gpaTotal: "",
      startTerm: "",
      startYear: "",
      endTerm: "",
      endYear: "",
      undergradUni: "",
      undergradProgram: "",
      undergradGpaScore: "",
      undergradGpaTotal: "",
      classRank: "",
      totalStudents: "",
      underStartYear: "",
      underEndYear: "",
      doi: [{ id: "", doi: "" }],
      numberOfDoi: "",
      id:"123"
  });

  const handleChange = (e, field) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handlePublicationChange = (index, e) => {
    const { name, value } = e.target;
    const newDoi = [...formData.doi];
    newDoi[index][name] = value;
    setFormData({
      ...formData,
      doi: newDoi,
    });
  };

  const addPublication = () => {
    const newId = formData.doi.length + 1;
    setFormData({
      ...formData,
      doi: [...formData.doi, { id: newId.toString(), doi: "" }],
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      console.log("FormData:", formData);
      const response = await axios.post("https://takeleap-backend-23blhztdv-srinivasjoshis-projects.vercel.app/takeleap/addMentorAcademicData", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNext = () => {
    navigate("/profile/professional");
  };

  const handlePrev = () => {
    navigate("/profile/personal");
  };

  return (
    <MentorConsole>
      <div className="p-6">
        <h2 className="page-title">Academic Details</h2>
        <form className="flex flex-wrap gap-4">
          <h2 className="w-full text-xl font-semibold">Master's Degree</h2>
          <div className="w-1/3">
            <label className="label-input">University Name</label>
            <Input
              type="text"
              value={formData.masterUni}
              onChange={(e) => handleChange(e, "masterUni")}
              required
              placeholder="University Name"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Program Name</label>
            <Input
              type="text"
              value={formData.masterProgram}
              onChange={(e) => handleChange(e, "masterProgram")}
              required
              placeholder="Program Name"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">GPA Scored</label>
            <Input
              type="number"
              value={formData.gpaScore}
              onChange={(e) => handleChange(e, "gpaScore")}
              required
              placeholder="GPA Scored"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Total GPA</label>
            <Input
              type="number"
              value={formData.gpaTotal}
              onChange={(e) => handleChange(e, "gpaTotal")}
              required
              placeholder="Total GPA"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Starting Term</label>
            <Input
              type="text"
              value={formData.startTerm}
              onChange={(e) => handleChange(e, "startTerm")}
              required
              placeholder="Starting Term"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Starting Year</label>
            <Input
              type="number"
              value={formData.startYear}
              onChange={(e) => handleChange(e, "startYear")}
              required
              placeholder="Starting Year"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Ending Term</label>
            <Input
              type="text"
              value={formData.endTerm}
              onChange={(e) => handleChange(e, "endTerm")}
              required
              placeholder="Ending Term"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Ending Year</label>
            <Input
              type="number"
              value={formData.endYear}
              onChange={(e) => handleChange(e, "endYear")}
              required
              placeholder="Ending Year"
            />
          </div>

          <h2 className="w-full text-xl font-semibold mt-8">Undergraduate Degree</h2>
          <div className="w-1/3">
            <label className="label-input">University Name</label>
            <Input
              type="text"
              value={formData.undergradUni}
              onChange={(e) => handleChange(e, "undergradUni")}
              required
              placeholder="University Name"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Program Name</label>
            <Input
              type="text"
              value={formData.undergradProgram}
              onChange={(e) => handleChange(e, "undergradProgram")}
              required
              placeholder="Program Name"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">GPA Scored</label>
            <Input
              type="number"
              value={formData.undergradGpaScore}
              onChange={(e) => handleChange(e, "undergradGpaScore")}
              required
              placeholder="GPA Scored"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Total GPA</label>
            <Input
              type="number"
              value={formData.undergradGpaTotal}
              onChange={(e) => handleChange(e, "undergradGpaTotal")}
              required
              placeholder="Total GPA"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Class Rank</label>
            <Input
              type="number"
              value={formData.classRank}
              onChange={(e) => handleChange(e, "classRank")}
              required
              placeholder="Class Rank"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Total Students</label>
            <Input
              type="number"
              value={formData.totalStudents}
              onChange={(e) => handleChange(e, "totalStudents")}
              required
              placeholder="Total Students"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Starting Year</label>
            <Input
              type="number"
              value={formData.underStartYear}
              onChange={(e) => handleChange(e, "underStartYear")}
              required
              placeholder="Starting Year"
            />
          </div>
          <div className="w-1/3">
            <label className="label-input">Ending Year</label>
            <Input
              type="number"
              value={formData.underEndYear}
              onChange={(e) => handleChange(e, "underEndYear")}
              required
              placeholder="Ending Year"
            />
          </div>

          <h2 className="w-full text-xl font-semibold mt-8">Publications</h2>
          <div className="w-1/4">
            <label className="label-input">Number of Publications</label>
            <Input
              type="number"
              value={formData.numberOfDoi}
              onChange={(e) => handleChange(e, "numberOfDoi")}
              required
              placeholder="Number of Publications"
            />
          </div>
          <div className="w-full">
            {formData.doi.map((publication, index) => (
              <div key={index} className="flex gap-4 mb-4 items-center mt-4">
                <label className="w-1/6 label-input">Publication {index + 1}</label>
                <Input
                  type="text"
                  name="doi"
                  placeholder="DOI"
                  value={publication.doi}
                  onChange={(e) => handlePublicationChange(index, e)}
                  required
                />
              </div>
            ))}
          </div>
          <Button onClick={addPublication} variant={"formBtn"}>Add Publication</Button>

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

export default Academic;
