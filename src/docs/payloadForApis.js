// profile

//1.Personal {post request}
data = {
  name: "",
  gender: "",
  email: "",
  currentLocation: "",
  currentStatus: "",
  greScore: "",
  toeflScore: "",
  contactNumber: "",
  profileImg: null,
  admits: [{ programName: "", universityName: "", scholarshipAmount: "" }],
};

//2. Academic
data = {
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
};

//3. Professional
data = {
  experiences: [
    {
      title: "",
      companyName: "",
      startDate: "",
      endDate: "",
    },
  ],
};

//4. Mentorship
data = {
  expertise: [""],
  programs: [""],
  reasons: [""],
  students: "",
};
