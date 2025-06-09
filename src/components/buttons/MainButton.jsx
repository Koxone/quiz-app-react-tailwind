import React from "react";

function MainButton({ text = "", onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-purple-600 p-3 font-semibold text-white transition-colors duration-200 hover:bg-purple-900"
    >
      {text}
    </button>
  );
}

export default MainButton;
