import { useLocation } from "react-router-dom";
import React from "react";
import QuestionContainer from "../containers/QuestionContainer";
import OptionsContainer from "../containers/OptionsContainer";
import MainButton from "../buttons/MainButton";
import MainHeader from "../header/MainHeader";
import quizData from "/data";
import { useState } from "react";

function MainView() {
  const location = useLocation();

  const { quizzSelectedByUser } = location.state;

  const [questionNumber, setQuestionNumber] = useState(1);

  const progressPercent = questionNumber * 10;

  const stopHandler = () => {
    if (questionNumber >= 10) {
      return;
    }
    setQuestionNumber((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <MainHeader text="Quiz Time" src="html" />
      <QuestionContainer
        number={questionNumber}
        navbar={`${progressPercent}%`}
      />
      <OptionsContainer number={questionNumber} />
      <MainButton onClick={() => stopHandler()} text="Submit Answer" />
    </div>
  );
}

export default MainView;
