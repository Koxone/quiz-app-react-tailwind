import React from "react";

function OptionCard({ letter, text }) {
  return (
    <label className="flex w-full cursor-pointer items-center justify-start gap-4 rounded-xl bg-[#3B4D66] p-3 transition-colors duration-200 hover:bg-[#4A5B7A]">
      <input type="radio" name="option" className="peer hidden" />
      <div className="flex min-h-10 min-w-10 items-center justify-center rounded-md bg-white font-semibold text-black peer-checked:bg-purple-600 peer-checked:text-white">
        {letter}
      </div>
      <span className="text-sm font-medium text-white">{text}</span>
    </label>
  );
}

export default OptionCard;
