import React, { useState } from 'react';
import styles from './Header.scss';
import fire from '../../../assets/fire.png'
import burger from '../../../assets/frontPageLogos/burger.svg'
import DropdownElement from '../../../common-elements/Dropdown/Dropdown.js';

const Headings = ["Use 5ire", "Learn", "Developers", "Enterprise", "Community"];
// const HeadingsMenuItem = [["5ire Wallets", "Get 5ire", "Decentralized applications (dapps)",  "Stake 5ire"],
// ["What is 5ire", "5ire Whitepaper","5ire Glossary","5ire Improvement Proposals"],
// ["Get started", "Documentation", "Tutorials", "Developer", "Resources"],
// ["Mainnet 5ire", "Private 5ire", "Enterprise"], []]
{/* <DropdownElement name={name} key={index} menuList={HeadingsMenuItem[index]}/> */}

function Header(props) {

  const [sideBarState, setSideBarState] = useState(false);
  let itemsClasses = [styles.items, styles.Close];
  if(sideBarState) {
      itemsClasses = [styles.flexItems, styles.Open];
  }
    return (
       <div className={styles.Header}>
        <div className={styles.logoStyles}>
             <img src={fire} className={styles.appLogo} alt="logo" />
        </div>
        <div className={itemsClasses.join(' ')}>
        {Headings.map((name, index) => (
          <div>
            <DropdownElement name={name} key={index}/>
          </div>
        ))}
        </div>
        <div className={styles.burgerIcon} onClick={() => setSideBarState(!sideBarState)}>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
        </div>
      </div>
    );
}

export default Header;