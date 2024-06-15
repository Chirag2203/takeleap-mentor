import React from "react";
import { Button } from "../ui/button";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-secondary gap-4 dark:bg-gray-900 py-4 flex items-center justify-end px-4">
      <Link to="mailto:hi@takeleap.xyz">
        <Button className="dark:bg-gray-950 px-6 rounded-lg flex items-center gap-2">
          <IoMdContacts className="text-2xl" /> Contact us
        </Button>
      </Link>
      <Link to="/profile/home">
        <Button className="dark:bg-gray-950 px-6 rounded-lg flex items-center gap-2">
          <IoPersonCircleOutline className="text-2xl" /> Username
        </Button>
      </Link>
    </div>
  );
};

export default Header;
