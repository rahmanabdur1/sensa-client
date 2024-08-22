import { useEffect, useState } from 'react';

 interface Question {
    options: QuizOption[]
    questionId: number;
    question_text: string;
    question_img?:string;
    question_des:string;
    question_shot_des:string
  }

  type QuizOption=string;

export function useQuizeQuestion(categoryId:string, currentQuestionInd: number) {
  const [currentQuestion, setcurrentQuestion] = useState<Question | null>(null);
  console.log(currentQuestion,'ccc')
  const [errors, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sensa-server.vercel.app/${categoryId}/quize/${currentQuestionInd}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: Question = await response.json();
        setcurrentQuestion(data);

      } catch (error) {
        console.error('Error fetching quiz question:', error);
        setError('Error fetching quiz question');
      }
    };

    fetchData();
  }, [categoryId, currentQuestionInd]);

  return [currentQuestion, errors] as const;
}
