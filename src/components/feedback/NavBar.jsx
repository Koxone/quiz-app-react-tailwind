import React from "react";

function NavBar({ width = "10%" }) {
  return (
    <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#3B4D66] p-1">
      <div
        className="h-2 rounded-full bg-purple-600"
        style={{ width: width }}
      ></div>
    </div>
  );
}

export default NavBar;
