import style from './About.module.css';
import bg from '../../../assets/images/beans.jpg';
import bean1 from '../../../assets/images/about/bean_champion.jpg';
import bean2 from '../../../assets/images/about/bean_hugging_smaller_bean.jpg';
import bean3 from '../../../assets/images/about/bean_praising_other.jpg';
import bean4 from '../../../assets/images/about/bean_with_emoticons.jpg';
import dainius from '../../../assets/images/Dainius.jpg';
import features from '../../../assets/images/features.jpg';
import bean_medi from '../../../assets/images/bean_meditation.jpg';
import { useEffect, useState } from 'react';

const successData = [
  {
    imgSrc: bean1,
    title: 'Over 50,000 happy users',
  },
  {
    imgSrc: bean2,
    title: 'Used in over 100 countries',
  },
  {
    imgSrc: bean3,
    title: 'Available in multiple languages',
  },
  {
    imgSrc: bean4,
    title: '30+ carefully crafted activities',
  },
];

export function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render loading screen
    return (
      <div className={style.loading}>
        <h2>Loading...</h2>
      </div>
    );
  }

    return (
        <div className={style.container}>
            {/* 1 */}
            <div className={style.banner_container}>
            <div className={style.banner}>
                <div className={style.banner_heading}>
                    <h2>Ready for your second chance?</h2>
                    <p>Sensa has been designed with one thing in mind: you.</p>
                </div>
                <div className={style.banner_content}>
                    <div className={style.banner_text}>
                        <h2> Feel the effects of a revitalized you.</h2>
                        <p>At the end of the day, the only person who can make a real change in your life is you – we aim to teach you how.</p>
                        <p>From scientifically-backed CBT (Cognitive Behavioral Therapy) content to calming exercises, and even guides on self-improvement your journey to a stress-free life has never been quite so simple.</p>
                    </div>
                    <div className={style.banner_img}>
                        <img src={bg} alt='/' />
                    </div>
                </div>
                </div>
            </div>
            {/* 2 */}
            <div className={style.about}>
                {successData.map((success, index) => (
                    <div key={index} className={style.success_info}>
                        <div className={style.success_img}>
                            <img src={success.imgSrc} alt={`Bean ${index + 1}`} />
                        </div>
                        <div className={style.success_text}>
                            <h3>{success.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className={style.advisor_content}>
                <div className={style.advisor_text}>
                    <h2>Meet our advisor</h2>
                    <p>Dainius has been with Sensa from the beginning, helping craft and mold the app into a tool that has been successfully used by thousands of people looking to improve their lives.</p>
                    <p>Danius is a qualified Family Physician, with a post-graduate degree as a Psychotherapist specializing in Cognitive Behavioral Therapy.</p>
                </div>
                <div className={style.advisor_img}>
                    <div>
                    <img src={dainius} alt='/' />
                    <div className={style.advisor_info}>
                        <span>Dainius Jakučionis MD</span>
                        <span>The brains behind Sensa</span>
                    </div>
                    </div>
                   
                </div>
            </div>

            <div className={style.sensa_right}>
                <div>
                    <h2>Why Sensa is right for you</h2>
                </div>
                <div>
                    We know how you feel. That seemingly never-ending cycle of searching for solutions to feel the way you deserve to – it’s exhausting.
                </div>
            </div>


            <div className={style.vision_statement}>
                <div>
                    <img src={bean_medi} />
                </div>
         
                    <h3>We’re here to change that – and our Vision Statement reflects it:</h3>
                    <h2>"Be the first-hand solution for self-growth and better mental health. Simple."</h2>
             

            </div>
            <div className={style.healthy_habits}>
                <div className={style.healthy_habits_img}>
                    <img src={features} alt='/' />
                </div>
                <div className={style.healthy_habits_text}>
                    <h2>Build healthy habits – one step at a time</h2>
                    <p>By utilizing modern Cognitive Behavioral Therapy (CBT) in an interactive way, Sensa is able to really dig deep into the causes of your problems and provide a personalized plan that helps you get on the right track towards feeling the way you deserve.</p>
                    <button>Check out Sensa's features</button>
                </div>
            </div>
        </div>
    );
};
