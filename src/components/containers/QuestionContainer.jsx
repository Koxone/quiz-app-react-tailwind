import React from "react";
import NavBar from "../feedback/NavBar";
import Question from "../text/Question";
import quizData from "/data";
import { useLocation } from "react-router-dom";

function QuestionContainer({ number, navbar }) {
  const location = useLocation();
  const { quizzSelectedByUser } = location.state;

  const quizzes = quizData.quizzes;
  const currentQuiz = quizzes.find(
    (quiz) => quiz.title === quizzSelectedByUser,
  );

  const index = parseInt(number) - 1;
  const questionText = currentQuiz.questions[index]?.question;

  return (
    <div className="flex w-full flex-col gap-7">
      <Question text={questionText} number={index + 1} />
      <NavBar width={navbar} />
    </div>
  );
}

export default QuestionContainer;
