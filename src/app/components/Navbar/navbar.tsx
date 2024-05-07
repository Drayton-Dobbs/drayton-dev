"use client";

import React, { useEffect, useState } from "react";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";
import Home from "../icons/Home";
import About from "../icons/About";
import Book from "../icons/Book";
import Video from "../icons/Video";
import CodeBracket from "../icons/CodeBracket";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const navItems: string[] = ["Home", "About", "Blog", "Vlog", "Projects"];

  const navIconArray = [
    { name: "Home", icon: Home },
    { name: "About", icon: About },
    { name: "Blog", icon: Book },
    { name: "Vlog", icon: Video },
    { name: "Projects", icon: CodeBracket },
  ];

  const renderIcon = (ni: string) => {
    const matchingIcon = navIconArray.find((n) => n.name === ni);
    if (matchingIcon) {
      const Icon = matchingIcon.icon;
      return <Icon />;
    }
  };

  useEffect(() => {
    if (isDarkTheme === true) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  const updateTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className="h-[60px] dark:bg-main bg-white border-b-gray-300 dark:border-b-highLight border-b-2 flex justify-between items-center px-4">
      <div className="flex">
        {navItems.map((ni: string) => {
          return (
            <Link
              key={ni}
              href={ni === "Home" ? "/" : "/" + ni}
              className="flex items-center justify-center p-1 md:px-2 md:py-1 bg-white dark:bg-main text-gray-500 dark:text-gray-300 mr-2 cursor-pointer hover:bg-highLight/10 dark:hover:bg-highLight/60 rounded-md border-2 dark:border-highLight"
            >
              <div className="hidden sm:block">{renderIcon(ni)}</div>{" "}
              {/* Fix applied here */}
              <div>
                <div className="md:ml-1 text-sm">{ni}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        onClick={() => updateTheme()}
        className="p-1 md:px-2 md:py-1 dark:bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2  dark:border-highLight"
      >
        {isDarkTheme === true ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default Navbar;
