import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import style from './Calculate.module.css';
import calculate_img from '../../assets/images/calculate/bean_calculating.jpg';
import { useNavigate } from 'react-router-dom';


const solutionsList = [
  'Create a daily routine',
  'Practice mindfulness exercises',
  'Set realistic goals',
  'Creating a list of solutions',
  'Finalizing your personal plan',
];

export function Calculate() {
  const navigate = useNavigate(); 
  const [progressWidth, setProgressWidth] = useState(0);
  const [visibleSolutions, setVisibleSolutions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutIds = [];
    solutionsList.forEach((solution, index) => {
      if (currentIndex >= 4) {
        return;
      }
      const completeCalculation = () => {
        navigate('/');
      };

      const timeoutId = setTimeout(() => {
        setProgressWidth(96);
        setVisibleSolutions((prev) => [...prev, solution]);
        setCurrentIndex(index);

        if (index === solutionsList.length - 1) {
          completeCalculation();
        }

      }, (index + 1) * 200);

      timeoutIds.push(timeoutId);
      
    }); 

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  },[history]);

  return (
    <div className={style.container}>
      <div className={style.calculate_content}>
        <img src={calculate_img} alt="noimgfound" />
        <h2>Calculating your results...</h2>
        <div
          className={style.calculate_progress}
          style={{
            width: `${progressWidth}%`,
            transition: 'width 1s',
          }}
        ></div>
        <div className={style.calculate_result}>
          {visibleSolutions.map((solution, index) => (
            <li className={style.solutionsList} key={index}>
              <span>
                <FontAwesomeIcon icon={faCircleCheck} className={style.checkIcon}/>
              </span>
              <span> {solution}</span>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
