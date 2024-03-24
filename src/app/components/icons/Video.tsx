import React from "react";

const Video: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <defs>
        <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#FFDAB9", stopOpacity: 1 }} />{" "}
          {/* Red */}
          <stop
            offset="100%"
            style={{ stopColor: "#FFA500", stopOpacity: 1 }}
          />{" "}
          {/* Darker Red */}
        </linearGradient>
      </defs>
      <path
        fill="url(#videoGradient)"
        d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z"
      />
      ;
    </svg>
  );
};

export default Video;
