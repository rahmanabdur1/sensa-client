import style from './ProcrastinationPercentics.module.css'
import percentage_img from '../../../assets/images/checkout/percentage_img.jpg'
export function ProcrastinationPercentics() {

    return (
        <div className={style.container}>
            <div className={style.procrastination_Percentics}>

                <div className={style.content1}>
                    <img src={percentage_img} alt='/' />
                </div>
                <div className={style.content2}>
                    <div>
                        <span>   83%</span>
                        <h2>
                            of users were able <span>o stop procrastinating </span> after just 6 weeks
                        </h2>

                    </div>
                    <div>
                        <span>77%</span>
                        <h2>of users started with <span> similar levels </span>of stress and anxiety as you</h2>
                    </div>
                    <div>
                        <span>45%</span>
                        <h2>of users suffer from the same <span>procrastination triggers</span> as you</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

