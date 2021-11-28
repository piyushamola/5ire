import React, { useState } from 'react';
import i18next from 'i18next'
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

import styles from './Header.scss';
import fire from '../../assets2/fire.png'
import burger from '../../assets2/frontPageLogos/burger.svg'
import github from '../../assets2/headerIcons/github.png'
import twitter from '../../assets2/headerIcons/twitter.png'
import telegram from '../../assets2/headerIcons/telegram.png';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import WhitePaper from '../../assets2/documents/WhitePaper.pdf'
import LightPaper from '../../assets2/documents/LightPaper.pdf';

const languages = [
  {
    code: 'zh',
    name: '中國人',
    symbol: 'ZH-CH',
  },
  {
    code: 'en',
    name: 'English',
    symbol: 'EN'
  },
  {
    code: 'ja',
    name: '日本',
    symbol: 'JA',
  }
]

function Header(props) {

  const [cookies] = useCookies(['i18next']);
  const [sideBarState, setSideBarState] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const languageCode = cookies?.["i18next"] || 'en';
  const lang = languages.filter(langu => langu.code === languageCode);
  const [symbol, setSymbol] = useState(lang[0].symbol);

  let itemsClasses = [styles.items, styles.Close];
  if(sideBarState) {
      itemsClasses = [styles.flexItems, styles.Open];
  }
  const { t } = useTranslation();
  const history = useHistory();
    return (
      <div>
        <div className={styles.topHeader}>
        <div className={styles.dropdown}>
            <div className={styles.langButton}>
              <button onClick={() => setShowContent(!showContent)} className={styles.dropbtn}><p>{symbol}<i className={styles.arrowDown}></i></p></button>
            </div>
            <div className={styles.dropdownContent}>
              { showContent && languages?.map((lang) => (
                  <button onClick={() =>  {
                    i18next.changeLanguage(lang?.code);
                    setShowContent(false);
                    setSymbol(lang?.symbol);
                  }}>{lang.name}</button>
                ))
              }
            </div>
          </div>
          <div className={styles.topHeaderInner}>
            <a onClick={() => window.open(WhitePaper, '_blank')}>{t("Whitepaper")}</a>
            <a onClick={() => window.open(LightPaper, '_blank')}>{t("Lightpaper")}</a>
            <a onClick={() => window.open('https://5ire.gitbook.io/5ire-wiki/')}>{t("Wiki")}</a>
            <img src={github}  onClick={() => window.open("https://github.com/orgs/5ire-org/") }  className={styles.Logo} alt="logo" />
            <img src={twitter} onClick={() => window.open('https://twitter.com/5ireChain') } className={styles.Logo} alt="logo" />
            <img src={telegram} onClick={() => window.open('https://t.me/OfficialFireChain')} className={styles.Logo} alt="logo" />
          </div>
       </div>
       <div className={styles.Header}>
         {/* <div>
         </div> */}
        <div className={styles.logoStyles} onClick={() => history.push('/')}>
             <img src={fire} className={styles.appLogo} alt="logo"/>
        </div>
        <div className={itemsClasses.join(' ')}>
            <NavigationItem link="/" exact active={true}>{t("Home")}</NavigationItem>
            <NavigationItem link="/technology">{t("Technology")}</NavigationItem>
            <NavigationItem link="/about">{t("Our Team")}</NavigationItem>
            <NavigationItem link="/roadmap">{t("Roadmap")}</NavigationItem>
            <NavigationItem link="/contact">{t("Contact")}</NavigationItem>
        </div>
        <div className={styles.burgerIcon} onClick={() => setSideBarState(!sideBarState)}>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
        </div>
      </div>
      </div>
    );
}

export default Header;