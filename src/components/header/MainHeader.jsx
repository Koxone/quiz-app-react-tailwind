import React from "react";
import ThemeToggle from "../buttons/ThemeToggle";

function MainHeader({ text = "", src = "" }) {
  return (
    <div className="flex items-center w-full justify-between text-lg">
      <div className="flex items-center gap-4 ">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white font-semibold text-black">
          <img src={`/src/assets/${src}.svg`} alt="icon" />
        </div>
        <p className="font-bold">{text}</p>
      </div>
      <div className="">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default MainHeader;
