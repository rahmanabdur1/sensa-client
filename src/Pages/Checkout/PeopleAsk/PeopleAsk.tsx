import React from 'react';
import style from './PeopleAsk.module.css';

const faqData = [
    {
        question: 'What is Sensa?',
        answer: 'Sensa is a mobile app designed to help people fight against multiple mental health issues, find their inner peace, and calm their mind. App content is crafted by behavioral psychologists, and you can choose to follow the plan for 1, 3, or 6 months, depending on how you feel. You\'ll be able to access the plan and content through the Sensa mobile app – available on both iOS and Android.'
    },
    {
        question: 'What happens after I order?',
        answer: 'In order to access the Sensa app, you will need to download it from the App Store or Google Play Store – depending on if you use an iPhone or Android phone. You will receive an email with further instructions within 2 hours – if you can\'t see it, please check your SPAM folder.'
    },
    {
        question: 'Is this a one-time payment?',
        answer: 'Sensa is based on a subscription model. You can choose to subscribe to a 1, 3, or 6-month plan.'
    },
    {
        question: 'How can I cancel my subscription?',
        answer: 'If you decide to cancel your subscription, you can do so by visiting the “Manage Subscription” page on our website. You can also drop an email to hello@sensa.health.'
    },
    {
        question: 'How is my plan prepared?',
        answer: 'Your plan will be prepared by our experts in behavioral psychology and mental health. Each program is verified to ensure you have access to the most relevant and up-to-date information and tips for your particular situation.'
    }
];

export function PeopleAsk() {

    return (
        <div className={style.container}>
            <div className={style.peopleAsk}>
                {faqData.map((item, index) => (
                    <div key={index}>
                        <div className={style.question}>
                            <h3>{item.question}</h3>
                        </div>
                        <div className={style.answer}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
