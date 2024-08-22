import { Link, } from 'react-router-dom';
import style from './SensaCategory.module.css';
import { useTranslation } from 'react-i18next';
import { useSencaCategory } from '../../../../hooks/useSencaCategory';


interface SencaCategoryItem {
    _id: string;
    category_name: string;
    image?: string;
}

export function SencaCategory() {
    const [sencaCategory, loading] = useSencaCategory();
    const { t } = useTranslation();


    if (loading) {
        return <div>{t('sencaCategory.loading')}</div>;
    }

    return (
        <div className={style.container}>
            {sencaCategory.map((item: SencaCategoryItem) => (
                <Link
                    className={style.category}
                    key={item._id}
                    to={`/${item.category_name}`}
                >
                    {item.image && <img src={item.image} alt='/' />} 
                    <h3>{t(`sencaCategory.${item.category_name.toLowerCase()}`)}</h3>
                </Link>
            ))}
        </div>
    );
}
