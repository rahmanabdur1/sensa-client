
import style from './MisingPiece.module.css';
import journalImage from '../../../../assets/images/app_features/journal_short (1).jpg';
import mindfulnessImage from '../../../../assets/images/app_features/mindfulness_excersises_short (1).jpg';
import selfPacedImage from '../../../../assets/images/app_features/self_paced_lessons_short_procrastination (1).jpg';
import habitBuildingImage from '../../../../assets/images/app_features/habit_building_strategies_short (1).jpg';
import weeklyAssessmentsImage from '../../../../assets/images/app_features/weekly_assesments_short (1).jpg';

const featuresData = [
    {
        id: 1,
        title: 'Self-paced lessons',
        description:
            'Healing at your own pace is a key factor in overall well-being. Lessons are daily, taking just 5-15 minutes of your time, and based on proven Cognitive Behavioral Therapy principles.',
        image: selfPacedImage,
    },
    {
        id: 2,
        title: 'Mindfulness exercises',
        description:
            'Sensa contains a plethora of activities, from deep breathing and meditation to mindfulness and bodily sensation exercises. There\'s something for every moment.',
        image: mindfulnessImage,
    },
    {
        id: 3,
        title: 'Personal insights',
        description:
            'Delve into your personal mood, productivity, and emotional insights to harness the power of tracking. Check your progress at a glance or take a deep-dive into your history.      ',
        image: weeklyAssessmentsImage,
    },
    {
        id: 4,
        title: 'Journal',
        description:
            'By keeping track of your feelings, mood, and thoughts in the Journal, you can reflect back and analyze the patterns that emerge from each passing day.',
        image: journalImage,
    },
    {
        id: 5,
        title: 'Habit-building strategies',
        description:
            'Forming healthy habits can help improve your quality of life by introducing positive reinforcement to your daily routine.',
        image: habitBuildingImage,
    },

];

export function MisingPiece() {
    return (
        <div className={style.container}>
            <div>
                <div>
                    <h2>Sensa – your missing piece</h2>
                    <p>Empowering you to take control of your life and well-being.</p>
                </div>
                <div>
                    {featuresData.map((feature, index) => (
                        <div key={index} className={`${style.missing_piece} ${feature.id === 2 || feature.id === 4 ? style.flexReverse : ''}`}>
                            <div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                           <div>
                           <img src={feature.image} alt={feature.title} />
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
