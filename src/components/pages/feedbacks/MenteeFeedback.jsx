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
const MenteeFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    menteeName: "name1",
    description: "",
    rating:"",
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
        <h2 className="page-title">Mentee Feedback</h2>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          <div className="w-1/3 ">
            <label className="label-input">Mentee</label>
            <Select
              onValueChange={(value) =>
                handleSelectChange("menteeName", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Mentee" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Name1">Name1</SelectItem>
                  <SelectItem value="Name2">CName2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/3">
            <label className="label-input" htmlFor="additionalComments">
              Rating
            </label>
            <Input
              id="description"
              name="rating"
              type="number"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating out og 5"
              className=""
            />
          </div>
          <div className="w-full">
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

          <Button type="submit" variant="formBtn" className="w-full">
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

export default MenteeFeedback;
