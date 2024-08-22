import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import us from '../../assets/images/us.png';
import spanish from '../../assets/images/spanish.jpg';
import portuguese from '../../assets/images/portuguese.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    languagename:'English',
    flag: us,
  });

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const selectOption = (option:any) => {
    setSelectedOption(option);
    toggleDropdown();
    changeLanguage(option.language);
  };

  const changeLanguage = (language:any) => {
    i18n.changeLanguage(language);
  };




  return (
    <header>
      {isMenuOpen && (
        <div className={`${isMenuOpen ? styles.overlayActive : ''}`} onClick={closeMenu}></div>
      )}
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.a : ''}`}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span> sensa.</span>health
        </Link>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link to="/about" className={styles.navLink}>
              {t('navbar.about')}
            </Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link to="/appfeatures" className={styles.navLink}>
              {t('navbar.appFeatures')}
            </Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link to="/employers" className={styles.navLink}>
              {t('navbar.forEmployers')}
            </Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link to="/blogs" className={styles.navLink}>
              {t('navbar.blog')}
            </Link>
          </li>
          <li className={styles.navItem}>
            <div className={styles.custom_dropdown}>
              <div className={styles.selected_option} onClick={toggleDropdown}>
                <img src={selectedOption.flag} alt={selectedOption.languagename}/>
                {isDropdownVisible ?    <FontAwesomeIcon icon={faAngleUp} /> :    <FontAwesomeIcon icon={faAngleDown} />}
              </div>
              <ul className={`${styles.dropdown_list} ${isDropdownVisible ? styles.visible : ''}`}>
                {[
                  { language: 'en', languagename:'English', flag: us },
                  { language: 'es',  languagename:'Spanish', flag: spanish },
                  { language: 'pt',  languagename:'Portuguese', flag: portuguese },
                ].map((option, index) => (
                  <li key={index} onClick={() => selectOption(option)}>
                    <img src={option.flag} alt={option.language} />
                    {option.languagename}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.actives : ''}`} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;