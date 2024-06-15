import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/pages/dashboard/Dashboard";
import {
  Academic,
  Mentorship,
  Personal,
  Professional,
  ProfileHome,
} from "./components/pages/profile";
import PlatformFeedback from "./components/pages/feedbacks/PlatformFeedback";
import MenteeFeedback from "./components/pages/feedbacks/MenteeFeedback";
import MenteeProfile from "./components/pages/discover/MenteeProfile";
import ReferralHome from "./components/pages/Referral/ReferralHome";
import {
  Privacy,
  Terms,
  ReferralPolicy,
  Compensation,
} from "./components/pages/policies";

function App() {
  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile/academic" element={<Academic />} />
          <Route path="/profile/personal" element={<Personal />} />
          <Route path="/profile/mentorship" element={<Mentorship />} />
          <Route path="/profile/professional" element={<Professional />} />
          <Route path="/profile/home" element={<ProfileHome />} />

          <Route path="/discover/mentee" element={<MenteeProfile />} />

          <Route path="/policy/privacy" element={<Privacy />} />
          <Route path="/policy/terms" element={<Terms />} />
          <Route path="/policy/compensation" element={<Compensation />} />
          <Route path="/policy/referral" element={<ReferralPolicy />} />

          <Route path="/referral" element={<ReferralHome />} />

          <Route path="/feedback/platform" element={<PlatformFeedback />} />
          <Route path="/feedback/mentee" element={<MenteeFeedback />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
