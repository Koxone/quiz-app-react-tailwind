import React from "react";

function QuizzCard({ title, icon, value, onClick, selected }) {
  return (
    <label className="flex w-full cursor-pointer items-center justify-start gap-4 rounded-xl bg-[#3B4D66] p-3 transition-colors duration-200 hover:bg-[#4A5B7A]">
      <input
        type="radio"
        value={value}
        name="option"
        checked={selected === value}
        onChange={() => onClick(value)}
        className="peer hidden"
      />
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white font-semibold text-black peer-checked:text-white">
        <img src={icon} alt="icon" />
      </div>
      <span className="font-medium text-white">{title}</span>
    </label>
  );
}

export default QuizzCard;
