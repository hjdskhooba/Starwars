import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="header d-flex">
      <div className='divka'>
        <h3>
          <Link to="">
            Star Wars
          </Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to="/">{t("header.link1")}</Link>
          </li>
          <li>
            <Link to="/people">{t("header.link2")}</Link>
          </li>
          <li>
            <Link to="/planets">{t("header.link3")}</Link>
          </li>
          <li>
            <Link to="/starships">{t("header.link4")}</Link>
          </li>
        </ul>
      </div>
      <ul className='ulka'>
        <li>
          <p className='lang' onClick={()=>changeLanguage('ru')} >RU</p>
        </li>
        <li>
          <p className='lang' onClick={()=>changeLanguage('en')} >EN</p>
        </li>
        <li>
          <Link className='FAQ' to="/faq">FAQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header