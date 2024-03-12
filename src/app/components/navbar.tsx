"use client";

import React, { useState } from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import Home from "./icons/Home";
import About from "./icons/About";
import Book from "./icons/Book";
import Video from "./icons/Video";
import CodeBracket from "./icons/CodeBracket";

const Navbar: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const updateTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className=" h-[60px] bg-main border-b-highLight border-b-2 flex justify-between items-center px-4">
      <div className="flex">
        <div className="flex justify-center px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight">
          <Home /> <div className="ml-1">Home</div>
        </div>
        <div className="flex justify-center px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight">
          <About /> <div className="ml-1">About</div>
        </div>
        <div className="flex justify-center px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight">
          <Book /> <div className="ml-1">Blog</div>
        </div>

        <div className="flex justify-center px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight">
          <Video /> <div className="ml-1">Vlog</div>
        </div>

        <div className="flex justify-center px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight">
          <CodeBracket /> <div className="ml-1">Projects</div>
        </div>
      </div>
      <div
        onClick={() => updateTheme()}
        className="px-2 py-1 bg-main text-gray-300 mr-2 cursor-pointer hover:bg-highLight/20 rounded-md border-2 border-highLight"
      >
        {isDarkTheme === true ? <Sun /> : <Moon />}
      </div>
    </div>
  );
};

export default Navbar;
