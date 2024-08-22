import style from './Employears.module.css';

import women from '../../assets/images/employers/woman.jpg'
import stress_anxiety from '../../assets/images/employers/stress_anxiety.jpg'
import social_anxiety from '../../assets/images/employers/social_anxiety.jpg'
import self_esteem from '../../assets/images/employers/self_esteem.jpg'
import pstd from '../../assets/images/employers/ptsd.jpg'
import procrestination from '../../assets/images/employers/procrastination.jpg'
import fatigue_exhaustion from '../../assets/images/employers/fatigue_exhaustion.jpg'
import disorganization from '../../assets/images/employers/disorganization.jpg'
import burnout from '../../assets/images/employers/burnout.jpg'
import features_desktop from '../../assets/images/employers/features_desktop.jpg'
import bean_dizzy from '../../assets/images/employers/bean_dizzy.jpg'
import bean_holding_emojis from '../../assets/images/employers/bean_holding_emojis.jpg'
import get_in_touch_desktop from '../../assets/images/employers/get_in_touch_desktop.jpg'

const categoryData = [
    {
        imgSrc: stress_anxiety,
        name: "Stress",
        title: 'Stress is often the first sign of trouble',
    },
    {
        imgSrc: social_anxiety,
        name: "Anxiety",
        title: 'Anxiety is the culmination of stressful factors',
    },
    {
        imgSrc: burnout,
        name: "Burnout",
        title: 'Burnout is usually caused by work – and can lead to anxiety or depression',
    },
    {
        imgSrc: procrestination,
        name: "Procrastination",
        title: 'Procrastination sounds less serious, but often, if left untreated, leads to serious conditions like anxiety/depression',
    },
    {
        imgSrc: self_esteem,
        name: "Self-esteem",
        title: 'Low self-esteem can leading to overworking, overthinking, and serious conditions like anxiety or depression.',
    },
    {
        imgSrc: fatigue_exhaustion,
        name: "Fatigue & Exhaustion",
        title: 'Fatigue is often a symptom of mental health issues and can be caused by stress and anxiety',
    },
    {
        imgSrc: social_anxiety,
        name: "Social anxiety",
        title: 'Social anxiety can be caused by low self-esteem and develop into deeper anxiety if left unchecked        ',
    },
    {
        imgSrc: pstd,
        name: "PTSD",
        title: 'Caused by experiencing or witnessing trauma. Learning coping strategies is important to manage symptoms and improve quality of life.',
    },
    {
        imgSrc: disorganization,
        name: "Disorganization",
        title: 'The precursor to missed opportunities and unfulfilled potential.',
    },

];

export function Employers() {

    const display = {
        backgroundImage: `url(${get_in_touch_desktop})`,
        backgroundSize: 'cover',
    };

    return (
        <div>
            <div className={style.banner_container}>
                <div className={style.banner}>
                    <div className={style.banner_content}>
                        <h2>Your employees are vital – equip them with the tools they need to be at their best</h2>
                        <p>We need to talk about mental health. <span>76% of Americans encountered stress or anxiety</span> issues in the past year alone.</p>
                        <p>Did you know, suicide is the second leading cause of death among 15-29 year-olds, and people with severe mental health conditions often die prematurely – as much as two decades early.</p>
                        <p>The seriousness of conditions like stress, anxiety, and depression is often understated – these issues can manifest into physical symptoms if not treated properly.</p>
                        <p>Help your employees take the measures they need to identify, manage, eliminate, or entirely prevent mental health issues.</p>
                        <button>Get in touch</button>
                    </div>
                    <div className={style.banner_img}>
                        <img src={women} alt="Woman" />
                    </div>
                </div>
            </div>
            <div className={style.categoryContainer}>
                <div className={style.categories}>
                    {categoryData.map((category, index) => (
                        <div key={index} className={style.categoryItem}>
                            <img className={style.categoryImage} src={category.imgSrc} alt={category.name} />
                            <div className={style.category_text}>
                                <h3>{category.name}</h3>
                                <p>{category.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.text}>
                    <p> The Sensa app is a tool that utilizes the science of Cognitive Behavorial Therapy (CBT). By evaluating individual needs and requirements, Sensa is able to provide a personalized plan designed to deliver distinctive results to each and every user.</p>
                </div>
            </div>


            <div className={style.features_desktop_container}>
                <div className={style.features_desktop}>
                    <div className={style.features_desktop_img}>
                        <img src={features_desktop} />
                    </div>
                    <div className={style.features_desktop_content}>
                        <h2>Designed by expert psychoanalysts & behavioral therapists</h2>
                        <p>Sensa is designed to make the journey towards better mental health easy. By offering a friendly UI with daily guidance as well as engaging and useful activities, it helps users eliminate stress, anxiety, and even depression.</p>
                        <p>After taking a quick quiz, Sensa provides users with many features, including a quick relief tool, helping keep them calm and collected even when panic or anxiety hits. Easy to use, and incredibly effective.</p>
                        <p>Every feature of the app has a purpose – and they all lead to the same end result: building healthy habits and fostering a positive, happy mindset.</p>
                    </div>
                </div>
            </div>

            <div className={style.health_affects}>
            <div className={style.health_affects_heading}>
                    <h2>Mental health affects us all</h2>
                    <p>Every day more and more users positively talk about Sensa. But Sensa is just getting started. The journey ahead is long, but we're ready for anything. Watch this space!</p>
                </div>
                <div className={style.health_affects_contents}>
                <div className={style.health_affects_content}>
                        <img src={bean_dizzy} />
                        <p>Burnout affects up to 84% of the millennial population of the US.
                        </p>
                    </div>
                    <div className={style.health_affects_content}>
                        <img src={bean_holding_emojis} />
                        <p>Burnout affects up to 84% of the millennial population of the US.
                        </p>
                    </div>
                </div>
            </div>

            <div className={style.bg_img} style={display} >
                    <h2>Equip your employees with the tools they need to lead a healthier, happier life</h2>
                    <button>Get in touch</button>
                </div>


        </div>
    );
}