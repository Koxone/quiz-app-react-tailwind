import React, { useState } from "react";
import QuizzCard from "../cards/QuizzCard";
import quizData from "/data";
import { useNavigate } from "react-router-dom";

function WelcomeOptionsContainer() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleClick = (value) => {
    setSelected(value);
    navigate("/main", { state: { quizzSelectedByUser: value } });
  };

  const quizzes = quizData.quizzes;
  return (
    <div className="flex w-full flex-col gap-4">
      {quizzes.map((quiz, index) => (
        <QuizzCard
          key={index}
          icon={quiz.icon}
          title={quiz.title}
          value={quiz.title}
          onClick={() => handleClick(quiz.title)}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default WelcomeOptionsContainer;
