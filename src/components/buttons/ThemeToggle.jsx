import React from "react";

function ThemeToggle() {
  return (
    <div className="flex items-center gap-4 w-fit">
      <img className="w-4 h-4" src="/src/assets/icon-sun-light.svg" alt="icon" />
      <div className="relative flex items-center justify-center rounded-[999px] bg-purple-600 p-1 w-8 h-5">
        <span className="w-3 h-3 rounded-full bg-white"></span>
        <input className="invisible" type="checkbox" name="theme" />
      </div>
      <img className="w-4 h-4" src="/src/assets/icon-moon-light.svg" alt="icon" />
    </div>
  );
}

export default ThemeToggle;
