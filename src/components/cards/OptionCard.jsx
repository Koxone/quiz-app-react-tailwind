import React, { useState } from "react";

function OptionCard({
  letter,
  text,
  onSelect,
  isSelected,
  hasError,
  isCorrect,
}) {
  return (
    <label
      onClick={onSelect}
      className={`flex w-full ${isSelected ? "outline-2 outline-purple-600" : ""} ${isCorrect ? "outline-2 outline-green-500" : ""} ${hasError ? "outline-2 outline-red-500" : ""} 
      ${isSelected && !isCorrect && !hasError ? "outline-2 outline-purple-600" : ""} cursor-pointer items-center justify-start gap-4 rounded-xl bg-[#3B4D66] p-3 transition-colors duration-200 hover:bg-[#4A5B7A]`}
    >
      <input type="radio" name="option" className="peer hidden" />
      <div className="flex min-h-10 min-w-10 items-center justify-center rounded-md bg-white font-semibold text-black peer-checked:bg-purple-600 peer-checked:text-white">
        {letter}
      </div>
      <span className="text-sm font-medium text-white">{text}</span>
    </label>
  );
}

export default OptionCard;
