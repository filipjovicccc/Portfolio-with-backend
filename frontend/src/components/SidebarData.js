import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, name: "nav-text" },
  { title: "About", path: "/", icon: <IoIcons.IoIosPaper />, name: "nav-text" },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPeople />,
    name: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    name: "nav-text",
  },
];
