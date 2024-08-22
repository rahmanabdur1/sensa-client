import React, { useState } from 'react';

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizData: QuizQuestion[] = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  // Add more questions as needed
];

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswerClick = (selectedAnswer: string) => {
    setUserAnswers([...userAnswers, selectedAnswer]);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div>
      {showResults ? (
        <div>
          <h2>Quiz Results</h2>
          <ul>
            {quizData.map((question, index) => (
              <li key={index}>
                {question.question} - Your Answer: {userAnswers[index]}
              </li>
            ))}
          </ul>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
