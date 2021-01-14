import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },

  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsPersonFill />,
    cName: "nav-text"
  },

  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaTools />,
    cName: "nav-text"
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlineMail />,
    cName: "nav-text"
  }
];
