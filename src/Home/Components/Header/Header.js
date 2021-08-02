import React from 'react';
import './Header.css';
import fire from '../../../assets/fire.png'
import burger from '../../../assets/frontPageLogos/burger.svg'
import styles from './Header.css';
import DropdownElement from '../../../common-elements/Dropdown/Dropdown.js';

const Headings = ["Use 5ire", "Learn", "Developers", "Enterprise", "Community"];
const HeadingsMenuItem = [["5ire Wallets", "Get 5ire", "Decentralized applications (dapps)",  "Stake 5ire"],
["What is 5ire", "5ire Whitepaper","5ire Glossary","5ire Improvement Proposals"],
["Get started", "Documentation", "Tutorials", "Developer", "Resources"],
["Mainnet 5ire", "Private 5ire", "Enterprise"], []]

function Header(props) {
    return (
       <div className="Header">
        <div className="logoStyles">
             <img src={fire} className="App-logo" alt="logo" />
        </div>
        <div className="items">
        {Headings.map((name, index) => (
          <div className="itemsDiv">
            <DropdownElement name={name} key={index} menuList={HeadingsMenuItem[index]}/>
          </div>
        ))}
        </div>
        <div className={styles.burgerIcon}>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
          <img src={burger} alt="burger"/>
        </div>
      </div>
    );
}

export default Header;