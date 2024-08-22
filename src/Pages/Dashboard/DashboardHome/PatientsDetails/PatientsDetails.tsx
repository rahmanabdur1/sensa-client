
import style from './PatientsDetails.module.css'


const PatientsDetails = () => {
    return (
        <div className={style.container}>
            <div>
                <h2>Patients age</h2>
            </div>
            <div>
                <h2>Patients gender</h2>
            </div>
        </div>
    );
};

export default PatientsDetails;