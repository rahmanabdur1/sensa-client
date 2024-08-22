import style from './OffersPlan.module.css';
import  payment_methodsCard_img from '../../../assets/images/checkout/payment_methods.jpg'

export function OfferPlan() {
    return (
        <div className={style.container}>
            <div>
                <h2>Your special offer expires soon!</h2>
                <div className={style.time}></div>
            </div>

            <div>
                <div>  <h2>Choose your plan:</h2></div>
                <div className={style.plans}>
                    {data.map((plan, index) => (
                        <div key={index} className={style.plan}>
                            <h3>{plan.time}</h3>
                            <p>Discount: {plan.discount.join(', ')}</p>
                            <p>{plan.billed}</p>
                            <p>Rate: {plan.rate}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.apply_plan}>
                <div>
                    <div>
                        <input />
                        <label>Have a coupon code?</label>
                    </div>
                    <button>Apply</button>
                </div>

                <div>
                    <div>
                        <span>By chossing a payment method you agree to the T&Cs and Privacy Policy</span>
                    </div>
                    <button>Claim my plan</button>
                </div>

            </div>

            <div className={style.payment_methodsCard}>
                <h3>GUARANTEED <span>SAFE </span> CHECKOUT</h3>
                <div>
                <img src={payment_methodsCard_img} alt='/'/>
                </div>
            </div>

        </div>
    );
};



const data = [
    {
        time: '3-month plan',
        discount: ['89.97 USD 59.97 USD'],
        billed: 'Billed every 3 months',
        rate: '0.66 USD'
    },
    {
        time: '6-month plan',
        discount: ['179.94 USD 59.97 USD'],
        billed: 'Billed every 6 months',
        rate: '0.33 USD'
    },
    {
        time: ' 1-month plan',
        discount: ['29.99 USD'],
        billed: 'Billed every 1 months',
        rate: '0.66 USD'
    },
];