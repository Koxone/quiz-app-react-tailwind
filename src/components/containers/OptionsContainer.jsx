import React, { useState } from "react";
import OptionCard from "../cards/OptionCard";
import quizData from "/data";
import { useLocation } from "react-router-dom";

function OptionsContainer({ number = "1" }) {
  const location = useLocation();
  const { quizzSelectedByUser } = location.state;

  const quizzes = quizData.quizzes;
  const currentQuiz = quizzes.find(
    (quiz) => quiz.title === quizzSelectedByUser,
  );
  const index = parseInt(number) - 1;

  const currentQuestion = currentQuiz.questions[index];
  const options = currentQuestion.options;

  const [selectedOption, setSelectedOption] = useState(null);

  const isError = selectedOption && selectedOption !== currentQuestion.answer;
  const isCorrect = selectedOption && selectedOption === currentQuestion.answer;

  return (
    <div className="flex w-full flex-col gap-4">
      {options.map((optionText, index) => (
        <OptionCard
          isSelected={selectedOption === optionText}
          onSelect={() => setSelectedOption(optionText)}
          key={index}
          isCorrect={isCorrect}
          hasError={isError}
          letter={String.fromCharCode(65 + index)}
          text={optionText}
        />
      ))}
    </div>
  );
}

export default OptionsContainer;
