import React, { useState } from "react";
import axios from "axios";
import MentorConsole from "@/components/MentorConsole";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";
const PlatformFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    feedbackType: "Bugs",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Feedback submitted:", response.data);
      toast.success("Feedback submitted successfully");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Error submitting feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MentorConsole>
      <div className="p-6">
        <h2 className="page-title">Platform Feedback</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="w-1/3 ">
            <label className="label-input">Category</label>
            <Select
              onValueChange={(value) =>
                handleSelectChange("feedbackType", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Bugs">Reporte a Bug</SelectItem>
                  <SelectItem value="Complaint">Complaint</SelectItem>
                  <SelectItem value="Feedback">Feedback</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="label-input" htmlFor="additionalComments">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your feedback here"
              className="textarea"
            />
          </div>

          <Button type="submit" variant="formBtn">
            {loading ? (
              <CgSpinner className="animate-spin text-xl" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
    </MentorConsole>
  );
};

export default PlatformFeedback;
