
import style from './Income.module.css'
export function Income() {
    return (
        <div className={style.container}>
            <div>
                <div>
                    <span>$25038</span>
                    <span>Income in current month</span>
                </div>
            </div>
            <div>
                <div>
                    <span>$25038</span>
                    <span>Income in current week</span>
                </div>
            </div>
            <div>
                <div>
                    <span>$2195</span>
                    <span>Income in current day
                  </span>
                </div>
            </div>
        </div>
    );
};

