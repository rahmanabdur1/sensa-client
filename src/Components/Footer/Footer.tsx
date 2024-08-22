
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './Footer.module.css';

export function Footer() {
    const { t } = useTranslation();

    return (
        <>
            <div className={style.container}>
                <div className={style.info}>
                    <h3 className={style.heading}>
                        <span>{t('footer.heading')}</span>
                    </h3>
                    <div className={style.text}>
                        <span>{t('footer.disclaimer')}</span>
                        <span>{t('footer.rightsReserved')}</span>
                    </div>
                </div>
                <div className={style.footer_links}>
                    <div className={style.links}>
                        <div className={style.link}>
                            <Link to="/my-subscription">{t('footer.mySubscription')}</Link>
                            <Link to="/contacts">{t('footer.contacts')}</Link>
                            <Link to="/help-center">{t('footer.helpCenter')}</Link>
                        </div>
                        <div className={style.link}>
                            <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
                            <Link to="/terms-conditions">{t('footer.termsConditions')}</Link>
                        </div>
                    </div>
                    <div className={style.social_links}>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

            </div>

            <div className={style.container_sm}>
                <div className={style.sm_footer_links}>
                    <Link to="/my-subscription">{t('footer.mySubscription')}</Link>
                    <Link to="/contacts">{t('footer.contacts')}</Link>
                    <Link to="/help-center">{t('footer.helpCenter')}</Link>
                    <Link to="/privacy-policy">{t('footer.privacyPolicy')}</Link>
                    <Link to="/terms-conditions">{t('footer.termsConditions')}</Link>
                </div>
                <div className={style.sm_info}>
                    <div className={style.heading_social_links}>
                         <h3 className={style.heading}>
                        <span>{t('footer.heading')}</span>
                    </h3>
                        <div className={style.social_links}>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div></div>
                    <div className={style.text}>
                        <span>{t('footer.disclaimer')}</span>
                        <span>{t('footer.rightsReserved')}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
