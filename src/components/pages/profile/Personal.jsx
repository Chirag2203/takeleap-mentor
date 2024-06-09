import React, { useState } from "react";
import axios from "axios";
import MentorConsole from "@/components/MentorConsole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProfileFooter from "@/components/shared/ProfileFooter";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsInfoCircleFill } from "react-icons/bs";
import { IoIosRemoveCircle } from "react-icons/io";

const Personal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "123",
    name: "",
    gender: "",
    currentLocation: "",
    currentStatus: "",
    greScore: "",
    toeflScore: "",
    contactNumber: "",
    avatar: null,
    admits: [{ programName: "", universityName: "", scholarshipAmount: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        setFormData({ ...formData, avatar: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdmitChange = (index, e) => {
    const { name, value } = e.target;
    const newAdmits = [...formData.admits];
    newAdmits[index][name] = value;
    setFormData({ ...formData, admits: newAdmits });
  };

  const addAdmit = () => {
    setFormData({
      ...formData,
      admits: [...formData.admits, { programName: "", universityName: "", scholarshipAmount: "" }],
    });
  };

  const removeAdmit = (index) => {
    const newAdmits = [...formData.admits];
    newAdmits.splice(index, 1);
    setFormData({ ...formData, admits: newAdmits });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const payload = {
      id: formData.id,
      name: formData.name,
      gender: formData.gender,
      currentLocation: formData.currentLocation,
      currentStatus: formData.currentStatus,
      greScore: formData.greScore,
      toeflScore: formData.toeflScore,
      contactNumber: formData.contactNumber,
      admits: formData.admits,
    };

    if (formData.avatar) {
      payload.avatar = {
        name: "avatar",
        mediaType: "image/*",
        base64Content: formData.avatar,
      };
    }

    try {
      const response = await axios.post(
        "https://takeleap-backend-23blhztdv-srinivasjoshis-projects.vercel.app/takeleap/addMentorPersonalData",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNext = () => {
    navigate("/profile/academic");
  };

  const handlePrev = () => {
  };

  return (
    <MentorConsole>
      <div className="p-6">
        <h2 className="page-title">Personal Details</h2>
        <form className="flex flex-wrap gap-4">
        <div className="w-full">
            <label className="label-input">Profile Image</label>
            <div className="flex items-center space-x-6">
              <div className="shrink-0">
                {formData.avatar ? (
                  <img
                  id="preview_img"
                  className="h-16 w-16 object-cover rounded-full"
                  src={
                    formData.avatar
                      ? `data:image/*;base64,${formData.avatar}`
                      : ""
                  }
                  alt="Current profile photo"
                />
                ) : (
                  
                  <img className="h-16 w-16 border bg-slate-300 object-cover rounded-full" src="https://robohash.org/mail@ashallendesign.co.uk"/>
                )}
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md cursor-pointer file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                  "
                />
              </label>
            </div>
          </div>
          <div className="w-1/3">
            <label className="label-input">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/3 ">
            <label className="label-input">Gender</label>
            <Select onValueChange={(value) => handleSelectChange("gender", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3">
            <label className="label-input">Current Location</label>
            <Select onValueChange={(value) => handleSelectChange("currentLocation", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="location1">Location 1</SelectItem>
                  <SelectItem value="location2">Location 2</SelectItem>
                  <SelectItem value="location3">Location 3</SelectItem>
                  {/* Add more locations as needed */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3">
            <label className="label-input">Current Status</label>
            <Select onValueChange={(value) => handleSelectChange("currentStatus", value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="working-professional">Working Professional</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3">
            <label className="label-input">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-transparent border-none p-0">
                    <BsInfoCircleFill />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This will be used to connect you with your mentee.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              Contact Number
            </label>
            <Input
              type="number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number. Ex +91 0000000000"
              required
            />
          </div>
          <div className="w-full flex gap-4">
            <div className="w-1/3">
              <label className="label-input">GRE Score</label>
              <Input
                type="number"
                name="greScore"
                value={formData.greScore}
                onChange={handleChange}
                placeholder="GRE Score"
                required
              />
            </div>
            <div className="w-1/3 ">
              <label className="label-input">TOEFL Score</label>
              <Input
                type="number"
                name="toeflScore"
                value={formData.toeflScore}
                onChange={handleChange}
                placeholder="TOEFL Score"
                required
              />
            </div>
          </div>
          
          <div className="w-full">
            <label className="label-input">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-transparent border-none p-0">
                    <BsInfoCircleFill />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Fill the information about all the admits you received. If you didn't get a scholarship, please leave it empty.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              Admits Received
            </label>
            {formData.admits.map((admit, index) => (
              <div key={index} className="flex gap-2 mb-4">
                <div className="w-5/6 flex flex-col gap-2 mb-4">
                  <Input
                    type="text"
                    name="programName"
                    placeholder="Program Name"
                    value={admit.programName}
                    onChange={(e) => handleAdmitChange(index, e)}
                    required
                  />
                  <Input
                    type="text"
                    name="universityName"
                    placeholder="University Name"
                    value={admit.universityName}
                    onChange={(e) => handleAdmitChange(index, e)}
                    required
                  />
                  <Input
                    type="number"
                    name="scholarshipAmount"
                    placeholder="Scholarship Amount in US dollars"
                    value={admit.scholarshipAmount}
                    onChange={(e) => handleAdmitChange(index, e)}
                  />
                </div>
                {index > 0 && (
                  <IoIosRemoveCircle onClick={() => removeAdmit(index)} className="text-3xl hover:text-red-700 text-red-600 cursor-pointer" />
                )}
              </div>
            ))}
            <Button onClick={addAdmit} variant={"formBtn"}>
              Add Admit
            </Button>
          </div>
          <ProfileFooter handleSave={handleSave} handleNext={handleNext} handlePrev={handlePrev} />
        </form>
      </div>
    </MentorConsole>
  );
};

export default Personal;
