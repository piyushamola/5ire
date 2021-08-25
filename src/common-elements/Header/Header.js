import React, { useState } from 'react';
import styles from './Header.scss';
import fire from '../../assets2/fire.png'
import burger from '../../assets2/frontPageLogos/burger.svg'

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

function Header(props) {

  const [sideBarState, setSideBarState] = useState(false);
  let itemsClasses = [styles.items, styles.Close];
  if(sideBarState) {
      itemsClasses = [styles.flexItems, styles.Open];
  }
    return (
      <div>
          <div className={styles.topHeader}>
            <a>Whitepaper</a>
            <a>Lightpaper</a>
            <a onClick={() => window.open('https://5ire.gitbook.io/5ire-wiki/')}>Wiki</a>
          </div>
       <div className={styles.Header}>
         <div>
         </div>
        <div className={styles.logoStyles}>
             <img src={fire} className={styles.appLogo} alt="logo" />
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