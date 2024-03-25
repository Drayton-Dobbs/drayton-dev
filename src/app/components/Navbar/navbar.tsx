"use client";

import React, { useState } from "react";
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

  const updateTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className="h-[60px] bg-main border-b-highLight border-b-2 flex justify-between items-center px-4">
      <div className="flex">
        <Link
          href={"/"}
          className=" flex items-center justify-center p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/60 rounded-md border-2 border-highLight"
        >
          <div className="iconContainer">
            <Home />{" "}
          </div>
          <div>
            {" "}
            <div className="md:ml-1 text-sm">Home</div>
          </div>
        </Link>
        <Link
          href={"/About"}
          className=" flex items-center justify-center p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/60 rounded-md border-2 border-highLight"
        >
          <div className="iconContainer">
            <About />{" "}
          </div>
          <div>
            {" "}
            <div className="md:ml-1 text-sm">About</div>
          </div>
        </Link>
        <Link
          href={"/Blog"}
          className=" flex items-center justify-center p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/60 rounded-md border-2 border-highLight"
        >
          <div className="iconContainer">
            <Book />{" "}
          </div>
          <div>
            {" "}
            <div className="md:ml-1 text-sm">Blog</div>
          </div>
        </Link>

        <Link
          href={"/Vlog"}
          className=" flex items-center justify-center p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/60 rounded-md border-2 border-highLight"
        >
          <div className="iconContainer">
            <Video />{" "}
          </div>
          <div>
            {" "}
            <div className="md:ml-1 text-sm">Vlog</div>
          </div>
        </Link>

        <Link
          href={"/Projects"}
          className=" flex items-center justify-center p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/60 rounded-md border-2 border-highLight"
        >
          <div className="iconContainer">
            <CodeBracket />{" "}
          </div>
          <div>
            {" "}
            <div className="md:ml-1 text-sm">Projects</div>
          </div>
        </Link>
      </div>
      <div
        onClick={() => updateTheme()}
        className="p-1 md:px-2 md:py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight"
      >
        {isDarkTheme === true ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default Navbar;
