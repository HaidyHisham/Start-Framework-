import React from "react";

export default function Heading({ text, starbgColor, textColor, bgColor }) {
  return (
    <>
      <h2 className={`text-center ${textColor} my-6 text-4xl font-bold `}>
        {text}
      </h2>
      <div className="center-div my-6">
            <div className={`h-1 w-1/4 ${bgColor}`}></div>
            <i className={`fa-solid fa-star ${textColor}  ${starbgColor} mx-4`}></i>
            <div className={`h-1 w-1/4  ${bgColor}`}></div>
          </div>
    </>
  );
}