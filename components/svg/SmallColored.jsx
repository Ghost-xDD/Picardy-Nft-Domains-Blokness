import React from "react";

function SmallColored() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      fill="none"
      viewBox="0 0 200 200"
    >
      <rect
        width="200"
        height="200"
        x="0.5"
        fill="url(#paint0_linear_200_1545)"
        rx="20"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_200_1545"
          x1="-106.22"
          x2="399.412"
          y1="443.808"
          y2="30.544"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9CC16"></stop>
          <stop offset="0.5" stopColor="#F9CC16" stopOpacity="0.604"></stop>
          <stop offset="1" stopColor="violet"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SmallColored;
