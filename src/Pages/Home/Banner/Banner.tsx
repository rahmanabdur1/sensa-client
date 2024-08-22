
import bg from '../../../assets/images/bg.jpg';
import style from './Banner.module.css';
import { useTranslation } from 'react-i18next';
import { SencaCategory } from './SensaCategory/SensaCategory';

export function Banner() {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.banner_content}>
        <div className={style.banner_heading}>
          <h2>{t('banner.heading')}</h2>
        </div>
        <div className={style.banner_img}>
          <img src={bg} alt='' />
        </div>
      </div>

      <div className={style.sensa_categories}>
        <h2>{t('banner.category-heading')}</h2>
        <div>
          <SencaCategory />
        </div>
      </div>
    </div>
  );
}
