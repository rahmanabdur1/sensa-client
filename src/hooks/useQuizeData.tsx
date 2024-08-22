import { useEffect, useState } from 'react';


interface QuizData {
  category_name: string;
  category_text: string;
  category_des: string;
  img: string;
  category_id: number;
  category_rating: string;
  questions: Array<Question>;
}

interface Question {
  question_text: string;
  
question_img:string
  options: Array<string>;
  correct_option: number | null;
}

export function useQuizData(categoryId: string) {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sensa-server.vercel.app/${categoryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: QuizData = await response.json();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setError('Error fetching quiz data');
      }
    };

    fetchData();
  }, [categoryId]);

  return [quizData, error] as const;
}

