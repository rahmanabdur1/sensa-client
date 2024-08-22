
import { useTranslation } from 'react-i18next';
import style from './ImportantOfSansa.module.css';
import app from '../../../assets/images/app.jpg';
import bean from '../../../assets/images/bean.jpg';

export function ImportandOfSansa() {
    const { t } = useTranslation();

    return (
        <div className={style.container}>
            <div className={style.section1}>
                <div className={style.imgs}>
                    <img src={bean} alt="Bean Image" className={style.image} />
                </div>
                <div className={style.text}>
                    <h2>{t('importandOfSansa.section1.title')}</h2>
                    <p>{t('importandOfSansa.section1.text1')}</p>
                    <p>{t('importandOfSansa.section1.text2')}</p>
                    <p>{t('importandOfSansa.section1.text3')}</p>
                </div>
            </div>
            <div className={style.section2}>
                <div className={style.text}>
                    <h2>{t('importandOfSansa.section2.title')}</h2>
                    <p>{t('importandOfSansa.section2.text1')}</p>
                    <p>{t('importandOfSansa.section2.text2')}</p>
                </div>
                <div className={style.imgs}>
                    <img src={app} alt="App Image" className={style.image} />
                </div>
            </div>
        </div>
    );
}
