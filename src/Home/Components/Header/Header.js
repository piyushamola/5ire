import React from 'react';
import './Header.css';
import fire from '../../../assets/fire.png'
import './Header.css';
import DropdownElement from '../../../common-elements/Dropdown/Dropdown.js';

const Headings = ["Use 5ire", "Learn", "Developers", "Enterprise", "Community"];

function Header(props) {
    return (
       <div className="Header">
        <div className="logoStyles">
             <img src={fire} className="App-logo" alt="logo" />
        </div>
        <div className="items">
        {Headings.map((name, index) => (
          <div className="itemsDiv">
            <DropdownElement name={name} key={index}/>
          </div>
        ))}
        </div>
        <div>
        </div>
      </div>
    );
}

export default Header;