import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbLogout2, TbSettings2 } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Sidebar = ({ data }) => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    // Check if the current path is one of the profile sub-pages and open the profile dropdown if so
    const profilePaths = [
      "/profile/academic",
      "/profile/personal",
      "/profile/mentorship",
      "/profile/professional",
      "/profile/home",
    ];
    if (profilePaths.includes(location.pathname)) {
      setIsProfileOpen(true);
    }
  }, [location.pathname, data]);

  const signOut = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/";
    }, 1300);
  };

  const handleThemeChange = () => {
    const currTheme = localStorage.getItem("theme");
    if (currTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <ToastContainer />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-1/3 lg:w-1/4 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary flex flex-col justify-between pb-12 shadow-md dark:bg-gray-900">
          <div>
          <a href="/" className="flex items-center gap-2 mb-5 ml-2">
            <div className="mt-2">
              <p className="text-4xl font-semibold dark:text-purple-400 text-white">
                takeleap.
              </p>
            </div>
          </a>
          <div className="space-y-2 font-medium flex flex-col items-start w-full">
            {data.map((item, index) => (
              <div key={index} className="w-full">
                {item.subPages ? (
                  <div>
                    <div
                      onClick={toggleProfileMenu}
                      className={`w-full flex gap-2 transition-all justify-between items-center p-2 ${
                        location.pathname.startsWith(item.link)
                          ? " text-white   rounded-md dark:text-primaryLight"
                          : "hover:text-white hover:bg-gradient-to-r hover:to-primaryLight hover:from-primaryDark dark:hover:bg-gray-700 group rounded-lg dark:text-white group-hover:text-white"
                      } cursor-pointer`}
                    >
                      <div className="flex gap-2 items-center">
                        <item.logo className="text-2xl  " />
                        <p className="text-lg">{item.title}</p>
                      </div>
                      {isProfileOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {isProfileOpen && (
                      <div className="pl-6 mt-2 space-y-1 flex flex-col gap-2">
                        {item.subPages.map((subItem, subIndex) => (
                          <Link
                            to={subItem.link}
                            key={subIndex}
                            className="w-full"
                          >
                            <div disabled={subItem.status}
                              className={`w-full flex gap-2 justify-start items-center p-2 ${
                                location.pathname === subItem.link
                                  ? "  border-purple-400 dark:text-white text-purple-900  bg-gradient-to-tr dark:border-purple-800 dark:from-purple-800 dark:to-violet-800  bg-white   rounded-md "
                                  : " hover:bg-gradient-to-tr hover:to-purple-400 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:from-purple-400 dark:hover:bg-gray-700 group rounded-lg text-white dark:text-gray-200 group-hover:text-white"
                              }`}
                            >
                              <p className="text-lg">{subItem.title}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={item.link} className="w-full">
                    <div
                      className={` w-full flex gap-2 justify-start items-center p-2 ${
                        location.pathname === item.link
                          ? "  border-purple-400 bg-gradient-to-tr dark:border-purple-800 dark:from-purple-800 dark:to-violet-800  bg-white  rounded-md dark:text-white text-purple-800 "
                          : " hover:bg-gradient-to-tr hover:to-purple-400   dark:hover:from-gray-800 dark:hover:to-gray-700 hover:from-purple-400 dark:hover:bg-gray-700 group rounded-lg dark:text-white text-white group-hover:text-white"
                      }`}
                    >
                      <item.logo className="text-2xl" />
                      <p className="text-lg">{item.title}</p>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
          </div>
          <div className="mt-8 flex-col flex gap-2">
            <Button
              onClick={handleThemeChange}
              className="flex gap-2 w-full cursor-pointer justify-start items-center p-2 rounded-lg  dark:bg-gray-900  bg-secondary hover:bg-white hover:text-gray-900 text-white "
            >
              <TbSettings2 className="w-5 h-5 transition-colors duration-75 " />
              <p className="text-lg font-medium">Switch theme </p>
            </Button>
            <Button
              onClick={signOut}
              className="flex gap-2 w-full cursor-pointer justify-start items-center p-2 rounded-lg  dark:bg-gray-900  bg-secondary hover:bg-white hover:text-red-600 text-red-500"
            >
              <TbLogout2 className="w-5 h-5 transition-colors duration-75 " />
              <p className="text-lg font-medium">Log out</p>
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
