import { useNavigate, useParams } from 'react-router-dom';
import style from './Procrastination.module.css';
import { useQuizData } from '../../hooks/useQuizeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function Procrastination() {
  const { categoryId } = useParams();
  const [quizData, error] = useQuizData(String(categoryId));
  const [cat] = useState(1);

  let navigate = useNavigate();

  const handleGenderClick = () => {
    navigate(`/${categoryId}/quize/${cat}`);
  };

  if (error) {
    return <div className='questioncontainer'>Error loading quiz data: {error}</div>;
  }

  if (!quizData) {
    return <div className='questioncontainer'>Loading...</div>;
  }

  const quize_category = quizData.category_id === 10 ? `${style.quize_category_reverse}` : style.quize_category;

  let btnContent;
  switch (quizData.category_id) {
    case 3:
      btnContent = <span>Start by selecting your gender:</span>;
      break;
    case 5:
      btnContent = <span>Ready to develop empowering habits? Select your gender:</span>;
      break;
    case 9:
      btnContent = <span>Start your journey today:</span>;
      break;
    default:
      btnContent = <span>Start the quiz now to find out.</span>;
  }

  return (
    <div className={style.container}>
      <div className={quize_category}>
        <div className={style.quize_category_content}>
          <div>
          <div className={style.starss}>
            {quizData?.category_rating ? (
              [...Array(5)].map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))
            ) : null}
          </div>
            <span>{quizData?.category_rating}</span>
          </div>
          <div>
            <h2>{quizData?.category_text}</h2>
          </div>
          <div>
            <h2>{quizData?.category_des}</h2>
          </div>
          <div className={style.quize_category__btn_content}>
            <div>
              {btnContent}
            </div>
            <div className={style.quize_category_btn}>
              <button onClick={() => handleGenderClick()}>Male</button>
              <button onClick={() => handleGenderClick()}>Female</button>
              <button onClick={() => handleGenderClick()}>Others</button>
            </div>
          </div>
        </div>

        <div className={style.quize_category_img}>
          <img src={quizData.img} alt='/' />
        </div>
      </div>
    </div>
  );
}
