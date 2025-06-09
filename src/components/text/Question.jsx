import React from "react";

function Question({ number, text }) {
  return (
    <div className="mt-auto flex w-full flex-col items-center justify-start gap-4 rounded-xl">
      <p className="self-start text-sm text-[#ABC1E1] italic">
        Question {number} of 10
      </p>
      <p className="text-xl leading-[120%] font-bold">{text}</p>
    </div>
  );
}

export default Question;
