import style from './Plan.module.css';
import img1 from '../../../../assets/images/app_features/bean_focused (1).jpg';
import img2 from '../../../../assets/images/app_features/bean_with_pie_diagram (1).jpg';
import img3 from '../../../../assets/images/app_features/bean_yellow_walking (1).jpg';

export function Plan() {
    const plansData = [
        {
            img: img1,
            title: 'Choose a plan',
            des: 'What are you suffering with?',
        },
        {
            img: img2,
            title: 'Get your personalized action-plan',
            des: 'Designed to work with you in mind',
        },
        {
            img: img3,
            title: 'Become the best version of yourself!',
            des: 'Designed to work with you in mind',
        },
    ];

  
    return (
        <div className={style.container}>
            <div className={style.plan_content}>
                <h2 className={style.heading}>How it works</h2>
                <div className={style.plans}>
                    {plansData.map((plan, index) => (
                <div key={index} className={style.planCard}>
                            <img src={plan.img} alt={`plan_image_${index}`} />
                            <div className={style.text}>
                                <span>{index + 1}</span>
                                <h3>{plan.title}</h3>
                            </div>
                            <p>{plan.des}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
