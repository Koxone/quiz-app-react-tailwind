import React from "react";

function WelcomeTitle() {
  return (
    <div className="">
      <h1 className="text-[40px] leading-tight">
        Welcome to the <span className="font-bold">FrontendQuiz!</span>
      </h1>
      <p className="self-start text-sm text-[#ABC1E1] italic">
        Pick a quiz to get started
      </p>
    </div>
  );
}

export default WelcomeTitle;
