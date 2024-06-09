import { IoHome } from "react-icons/io5";
import { MdAddHomeWork } from "react-icons/md";
import { FaUserPlus, FaUserCheck, FaUserShield } from "react-icons/fa";
import { MdSpaceDashboard, MdManageAccounts } from "react-icons/md";
import { SiBlockchaindotcom } from "react-icons/si";
import { FaFileCircleCheck } from "react-icons/fa6";

export const SidebarData = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    logo: MdSpaceDashboard,
    status: 'deactive',
  },
  {
    title: 'Profile',
    link: '/profile/home',
    logo: MdManageAccounts,
    status: 'active',
    subPages: [
        { title: 'Personal', link: '/profile/personal', status: 'active'},
      { title: 'Academic', link: '/profile/academic', status: 'active' },
      { title: 'Professional', link: '/profile/professional' , status: 'active'},
      { title: 'Mentorship', link: '/profile/mentorship', status: 'active' },
    ],
  },
];
