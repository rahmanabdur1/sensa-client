
import { useTranslation } from 'react-i18next';
import style from './SensaInfo.module.css';
import info1 from '../../../assets/images/info1.jpg';
import info2 from '../../../assets/images/info2.jpg';
import info3 from '../../../assets/images/info3.jpg';

export const sensaInfo = [
  {
    imageSrc: info3,
    descriptions: [{ key: "content1" }],
  },
  {
    imageSrc: info1,
    descriptions: [{ key: "content2" }],
  },
  {
    imageSrc: info2,
    descriptions: [{ key: "content3" }],
  },
];

export function SensaInfo() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.sensa_text}>
        <h2>{t('sensaInfo.title')}</h2>
        <p>{t('sensaInfo.intro')}</p>
      </div>
      <div className={style.info_content}>
        {sensaInfo.map((info, index) => (
          <div key={index} className={style.infoItem}>
            <img className={style.infoImage} src={info.imageSrc} alt='/' />
            {info.descriptions.map((item, i) => (
              <p key={i}>{t(`sensaInfo.${item.key}`)}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
