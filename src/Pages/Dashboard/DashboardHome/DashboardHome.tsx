import style from './DashboardHome.module.css'
import { HealthSurvey } from './HealthSurvey/HealthSurvey';
import { Income } from './Income/Income';
import PatientsDetails from './PatientsDetails/PatientsDetails';

export function DashboardHome() {
    return (
        <div className={style.container}>
            <div>
                <div className={style.health_info}>
                    <div>
                        <span>Appointments</span>
                        <span>213</span>
                    </div>
                    <div>
                        <span>New patients</span>
                        <span>104</span>
                    </div>
                    <div>
                        <span>Operations</span>
                        <span>23</span>
                    </div>
                    <div>
                        <span>
                            Hospital Earning</span>
                        <span>$5238</span>
                    </div>
                </div>
            </div>

            <HealthSurvey />
            <Income/>
            <PatientsDetails/>
        </div>
    );
};

export default DashboardHome