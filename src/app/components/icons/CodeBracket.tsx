import React from "react";

const CodeBracket: React.FC = () => {
  return (
    <svg
      className="w-6 h-6"
      data-slot="icon"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFFFE0", stopOpacity: 1 }} />{" "}
          {/* Red */}
          <stop
            offset="100%"
            style={{ stopColor: "#FFD700", stopOpacity: 1 }}
          />{" "}
          {/* Darker Red */}
        </linearGradient>
      </defs>
      <path
        fill="url(#codeGradient)"
        stroke-linecap="round"
        stroke-linejoin="round"
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
      ></path>
    </svg>
  );
};

export default CodeBracket;
