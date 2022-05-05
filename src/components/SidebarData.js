import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdDashboard />,
  },
  {
    title: "Service Categories",
    path: "/dashboard",
    icon: <IoIcons.IoIosPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Register To Category",
        path: "/serviceCategories/RegisterToCategory",
        icon: <GiIcons.GiArchiveRegister />,
      },
      {
        title: "My Services",
        path: "/serviceCategories/myServices",
        icon: <BiIcons.BiGroup />,
      },
    ],
  },
  {
    title: "Bookings",
    path: "/dashboard",
    icon: <BiIcons.BiCalendar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "My Bookings",
        path: "/bookings/myBookings",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Create a booking",
        path: "/bookings/createABookings",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Payments",
    path: "/dashboard",
    icon: <GiIcons.GiTakeMyMoney />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Transactions",
        path: "/payments/transactions",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Payment Methods",
        path: "/payments/paymentMethods",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Feedback & Complaints",
    path: "/feedback&Complaints",
    icon: <MdIcons.MdOutlineFeedback />,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <GoIcons.GoSettings />,
  },
  {
    title: "Feedback & Complaints",
    path: "/feedback&Complaints",
    icon: <MdIcons.MdOutlineFeedback />,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <GoIcons.GoSettings />,
  },
  {
    title: "Feedback & Complaints",
    path: "/feedback&Complaints",
    icon: <MdIcons.MdOutlineFeedback />,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <GoIcons.GoSettings />,
  },
];
