import React from "react";
import AuthSideBar from "./AuthSideBar";

const AuthConsole = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex w-full">
      <div className="w-1/2  p-12">
        <AuthSideBar/>
      </div>
      <div className="w-1/2  p-12 bg-gray-950">{children}</div>
    </div>
  );
};

export default AuthConsole;
