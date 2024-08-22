import { Link } from "react-router-dom";
import style from './Sidenav.module.css'

export function Sidenav ()  {
    return (
        <div className={style.container}>
            <div>
                <span>BDS.health</span>

            </div>
            <div className={style.sidebar}>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/dashboard/patients'>Patients</Link>                   
                    <Link to='/dashboard/payments'>Payments</Link>
                    <Link to='/dashboard/doctors'>Doctors</Link>
                    <Link to='/dashboard/adddoctors'>Add Doctors</Link>
                </div>
        </div>
    );
};

