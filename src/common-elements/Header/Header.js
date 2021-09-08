import React, { useState } from 'react';
import styles from './Header.scss';
import fire from '../../assets2/fire.png'
import burger from '../../assets2/frontPageLogos/burger.svg'
import github from '../../assets2/headerIcons/github.png'
import twitter from '../../assets2/headerIcons/twitter.png'

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import WhitePaper from '../../assets2/documents/WhitePaper.pdf'
import LightPaper from '../../assets2/documents/LightPaper.pdf';

import { useHistory } from "react-router-dom";

function Header(props) {

  const [sideBarState, setSideBarState] = useState(false);
  let itemsClasses = [styles.items, styles.Close];
  if(sideBarState) {
      itemsClasses = [styles.flexItems, styles.Open];
  }

  const history = useHistory();
    return (
      <div>
        <div className={styles.topHeader}>
          <div className={styles.topHeaderInner}>
            <a onClick={() => window.open(WhitePaper, '_blank')}>Whitepaper</a>
            <a onClick={() => window.open(LightPaper, '_blank')}>Lightpaper</a>
            <a onClick={() => window.open('https://5ire.gitbook.io/5ire-wiki/')}>Wiki</a>
            <img src={github}  onClick={() => window.open("https://github.com/orgs/5ire-org/") }  className={styles.Logo} alt="logo" />
            <img src={twitter} onClick={() => window.open('https://twitter.com/5ireChain') } className={styles.Logo} alt="logo" />
        </div>
       </div>
       <div className={styles.Header}>
         {/* <div>
         </div> */}
        <div className={styles.logoStyles} onClick={() => history.push('/')}>
             <img src={fire} className={styles.appLogo} alt="logo"/>
        </div>
        <div className={itemsClasses.join(' ')}>
            <NavigationItem link="/" exact active={true}>Home</NavigationItem>
            <NavigationItem link="/technology" >Technology</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
            <NavigationItem link="/roadmap">RoadMap</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
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