import  { useState } from 'react';
import style from './AppFeatures.module.css';
import checked from '../../../assets/images/app_features/checked.jpg';
import graph_up from '../../../assets/images/app_features/graph_up.jpg';
import emoji from '../../../assets/images/app_features/emojis.jpg';
import sparkles from '../../../assets/images/app_features/sparkles.jpg';
import self_paced_lessons from '../../../assets/images/app_features/self_paced_lessons.jpg';
import daily_tasks from '../../../assets/images/app_features/daily_tasks.jpg';
import weekly_assessments from '../../../assets/images/app_features/weekly_assesments.jpg';
import mood_journal from '../../../assets/images/app_features/mood_journal.jpg';
import { Plan } from './Plan/Plan';
import { ClientReviews } from '../../Home/ClientReviews/ClientReviews';
import { MisingPiece } from './MisingPiece/MisingPiece';

export function AppFeatures() {
  const [selectedFeature, setSelectedFeature] = useState(1);

  const featuresData = [
    {
      id: 1,
      img: checked,
      title: 'Self-paced lessons',
      des: 'Work through your issues at your own pace',
    },
    {
      id: 2,
      img: sparkles,
      title: 'Weekly assessments',
      des: 'Keep on top of your progress with regular assessments',
    },
    {
      id: 3,
      img: graph_up,
      title: 'Simple daily tasks',
      des: 'Quick, yet effective from just 10-30 minutes each day',
    },
    {
      id: 4,
      img: emoji,
      title: 'Mood Journal',
      des: 'Identify your emotional triggers, and understand yourself better with each passing day',
    },
  ];

  const showCardFeatures = [
    {
      id: 1,
      img: self_paced_lessons,
    },
    {
      id: 2,
      img: daily_tasks,
    },
    {
      id: 3,
      img: weekly_assessments,
    },
    {
      id: 4,
      img: mood_journal,
    },
  ];

  const handleFeatureClick = (id:any) => {
    setSelectedFeature(id);
  };

  return (
    <div className={style.container}>
      <div className={style.appFeatures}>
        <div className={style.appFeatures_heading}>
          <h2>Self-improvement every day – it's easy with Sensa</h2>
          <p>Build inner peace from the ground up</p>
        </div>

        <div className={style.appFeatures_content}>
          <div className={style.leftside_features}>
            {featuresData.slice(0, 2).map((feature) => (
              <div
                key={feature.id}
                className={`${style.featureCard} ${selectedFeature === feature.id ? style.selected : ''}`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.des}</p>
              </div>
            ))}
          </div>

          <div className={style.show_card_features}>
            {selectedFeature && (
              <div className={style.showCardFeature}>
                <img src={showCardFeatures.find((card) => card.id === selectedFeature)?.img} alt={`show_card_feature_${selectedFeature}`} />
              </div>
            )}
          </div>

          <div className={style.rightside_features}>
            {featuresData.slice(2).map((feature) => (
              <div
                key={feature.id}
                className={`${style.featureCard} ${selectedFeature === feature.id ? style.selected : ''}`}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <img src={feature.img} alt={feature.title} />
                <h3>{feature.title}</h3>
                <p>{feature.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MisingPiece/>
      <Plan/>
      <ClientReviews/>
    </div>
  );
}
