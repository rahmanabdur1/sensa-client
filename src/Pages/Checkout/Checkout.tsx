import style from './Checkout.module.css'
import img1 from '../../assets/images/checkout/level_graph_down.jpg'
import img2 from '../../assets/images/checkout/bean_can_do_it_en.jpg'
import img3 from '../../assets/images/checkout/now_vs_after_graph.jpg'
import img4 from '../../assets/images/checkout/bean_holding_heart.jpg'
import img5 from '../../assets/images/checkout/MedicalTeam.jpg'
import img6 from '../../assets/images/checkout/bean_champion (1).jpg'
import info1 from '../../assets/images/checkout/lessons.jpg'
import info2 from '../../assets/images/checkout/activities.jpg'
import info3 from '../../assets/images/checkout/guidance.jpg'
import info4 from '../../assets/images/checkout/personalized_content.jpg'
import info5 from '../../assets/images/checkout/habits_plan.jpg'
import info6 from '../../assets/images/checkout/exercises.jpg'
import clock from '../../assets/images/checkout/clock.jpg'
import pie_chart from '../../assets/images/checkout/pie_chart.jpg'
import thumb_up from '../../assets/images/checkout/thumb_up.jpg'
import { OfferPlan } from './OfferPlan/OfferPlan'
import { ProcrastinationPercentics } from './ProcrastinationPercentics/ProcrastinationPercentics'
import { PeopleAsk } from './PeopleAsk/PeopleAsk'
import { Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const beforeData = [
    "Letting things slip your mind",
    "Procrastination",
    "Anxiety and stress",
    "Difficulty controlling emotions",
    "Lack of self-control",
    "Low self-esteem"
];

const afterData = [
    "Clarity and understanding",
    "Drive and energy",
    "A relaxed state of mind",
    "The ability to change how you think",
    "Complete self-control",
    "Learning to love yourself"
];

const infoData = [
    {
        imageSrc: info1,
        altText: '28+ self-paced lessons',
        description: 'developed by professional behavioral therapists.      ',
    },
    {
        imageSrc: info2,
        altText: 'Simple 10 to 30 minute activities',
        description: 'for you to complete each day. Small steps lead to big results.',
    },
    {
        imageSrc: info3,
        altText: 'Daily guidance',
        description: 'helping you to maintain your routine and make your procrastination-free journey easy.',
    },

    {
        imageSrc: info4,
        altText: 'Concise content',
        description: 'that will help you both understand and manage your procrastination triggers.        ',
    },
    {
        imageSrc: info5,
        altText: 'A customizable habit planner',
        description: 'allows you to track your progress, eliminate bad habits, and create new, healthy ones.',
    },
    {
        imageSrc: info6,
        altText: 'Quick-relief exercises',
        description: 'to help you relax during stressful situations.',
    },

];

const data = [
    {
        imageSrc: clock,
        title: 'Bedtime procrastination',
        description: 'Your scores indicate that you may be struggling with sleep.',
    },
    {
        imageSrc: pie_chart,
        title: 'Frustration tolerance',
        description: 'You tend to default your mind to negativity when facing frustrating situations.',
    },
    {
        imageSrc: thumb_up,
        title: 'Perfectionism',
        description: 'Sounds like a good thing, but being a perfectionist can lead to you being rarely satisfied with your achievements.',
    },
];

export function Checkout() {
    const [isShowModal, setIsShowModal] = useState(false)


    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (isShowModal && event.target.classList.contains(style.overlayActive)) {
                setIsShowModal(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isShowModal]);

    const handleClaimPlan = () => {
        setIsShowModal(true)
    };

    return (
        <div className={style.container}>
            {isShowModal && (
                <div className={style.overlayActive}>
                    <div className={style.modal_content}>    <h1>Your fresh start begins today</h1></div>
                </div>
            )}

            <div>
                <div className={style.procrastination}>


                    <div className={style.calculate}>
                        <div className={style.info1}>
                            <h1>Your fresh start begins today</h1>
                            <p>Using the answers you provided we calculated your procrastination levels – check out the results.</p>
                        </div>

                        <div className={style.info2}>
                            <div className={style.des}>
                                <span>Your procrastination symptom level is:</span>
                                <span>8/57 (Normal)</span>
                            </div>
                            <img src={img1} />
                        </div>
                    </div>



                    <div className={style.mode}>
                        <div className={style.mode1}>
                            <div>
                                <h2>Based on your data, we recommend to start with our <span>6-month plan </span> for the most effective results.</h2>
                            </div>
                            <img src={img2} />
                        </div>
                        <div className={style.mode2}>
                            <div>
                                <span>Improve your overall mood</span>
                                <span>Your outlook on life will drastically improve</span>
                            </div>
                            <img src={img3} />
                        </div>
                    </div>
                    <button onClick={handleClaimPlan} ><Link to='/checkout/payment'>Claim my plan</Link></button>
                </div>
            </div>

            {/* personal summary */}

            <div className={style.personal_summary}>

                <div className={style.personal_summaryContent}>
                    <h2>Your personal summary</h2>
                    <p>Your answers tell us that you could be suffering from:</p>
                </div>

                <div className={style.summaries}>
                    {data.map((item, index) => (
                        <div className={style.summari} key={index}>
                            <div>
                                <img src={item.imageSrc} alt='/' />
                            </div>
                            <div className={style.summari_text}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProcrastinationPercentics />
            <OfferPlan />
            {/* percent */}

            {/* 
promise */}
            <div className={style.container_promise}>
                <div className={style.promise}>
                    <div className={style.promise_content1}>
                        <h2>Our promise</h2>
                        <p>Feeling like you are constantly grappling with a restless mind and unable to concentrate can be emotionally draining, regardless of the circumstances.</p>
                        <p>But here's the good news: you are not alone on this journey.</p>
                        <p>Sensa is here to partner with you every step of the way, offering you the tools and support you need to regain your sense of control and peace of mind.</p>
                        <p>
                            With Sensa by your side, you have the power to champion your mental well-being – are you ready to embark on this transformative journey?</p>
                        <span>Monisha and Dainius @ Sensa</span>
                    </div>
                    <div className={style.promise_content2}>
                        <img src={img5} />
                        <p>Monisha Vasa MD and Dainius Jakučionis MD</p>
                        <span>Sensa consultants</span>
                    </div>
                </div>
            </div>

            <div className={style.usingSensa_container}>
                <div className={style.content}>
                    <h2>
                        If you feel like you have the weight of the world on your shoulders the <span>Sensa anti-procrastination</span> plan is perfect for you
                    </h2>
                </div>
                <div className={style.using_Sensas}>
                    <div className={style.using_Sensa}>
                        <img src={img6} alt='/' />
                    </div>
                    <div className={`${style.using_Sensa} ${style.before}`}>
                        <h2>Life before you start using Sensa</h2>
                        {beforeData.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div className={`${style.using_Sensa} ${style.after}`}>
                        <h2>Life after you start using Sensa</h2>

                        {afterData.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>


            <div className={style.includes_container}>
                <h2>So, what's included?</h2>
                <div className={style.includes}>
                    {infoData.map((item, index) => (
                        <div key={index} className={style.include}>
                            <img src={item.imageSrc} alt={item.altText} />
                            <div>
                                <span>{item.altText}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <PeopleAsk />
        </div>

    );
};

export default Checkout;