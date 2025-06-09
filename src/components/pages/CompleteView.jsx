import React from "react";
import MainHeader from "../header/MainHeader";
import { useLocation, useNavigate } from "react-router-dom";
import quizData from "/data";

function CompleteView() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };

  const location = useLocation();
  const { quizzSelected, score } = location.state;
  console.log(quizzSelected);

  const quizzes = quizData.quizzes;
  //   const currentQuiz =

  return (
    <div className="flex h-screen flex-col items-center">
      <MainHeader
        src={`/src/assets/${quizzSelected}.svg`}
        title={quizzSelected}
      />
      <div className="mt-[30%] flex flex-col gap-8">
        <div>
          <h1 className="text-[40px]">Quiz Completed</h1>
          <h2 className="text-[40px] font-semibold">You scored...</h2>
        </div>
        <div className="flex h-[242px] w-[327px] flex-col items-center justify-center rounded-2xl border-transparent bg-[#3B4D66] p-8">
          <div className="flex items-center justify-center gap-4">
            <img
              className="rounded-md border bg-white"
              src={`/src/assets/${quizzSelected}.svg`}
              alt="icon"
            />
            <p className="text-lg font-semibold text-white">{quizzSelected}</p>
          </div>
          <div className="text-center">
            <h2 className="text-[88px] font-semibold">{score}</h2>
            <p className="text-lg font-medium text-[#ABC1E1]">out of 10</p>
          </div>
        </div>
        <button
          onClick={clickHandler}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-purple-600 p-3 font-semibold text-white transition-colors duration-200 hover:bg-purple-900"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default CompleteView;
