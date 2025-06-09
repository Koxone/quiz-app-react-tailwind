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

  const [selectedOption, setSelectedOption] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showResult, setShowResult] = useState(false);

  const progressPercent = questionNumber * 10;

  const stopHandler = () => {
    if (questionNumber >= 10) return;

    const currentQuiz = quizData.quizzes.find(
      (quiz) => quiz.title === quizzSelectedByUser,
    );
    const currentQuestion = currentQuiz.questions[questionNumber - 1];

    const isCorrect = selectedOption === currentQuestion.answer;

    setHasError(!isCorrect);
    setShowResult(true); // activa el resultado visual

    // espera 2 segundos y luego avanza
    setTimeout(() => {
      setShowResult(false);
      setHasError(false);
      setSelectedOption(null);
      setQuestionNumber((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <MainHeader text="Quiz Time" src="html" />
      <QuestionContainer
        number={questionNumber}
        navbar={`${progressPercent}%`}
      />
      <OptionsContainer
        number={questionNumber}
        hasError={hasError}
        selectedOption={selectedOption}
        setHasError={setHasError}
        setSelectedOption={setSelectedOption}
        showResult={showResult}
      />
      <MainButton onClick={() => stopHandler()} text="Submit Answer" />
    </div>
  );
}

export default MainView;
