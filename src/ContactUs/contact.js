import React from 'react';
import Header from '../common-elements/Header/Header.js';
import ContactBody from './Components/contactBody/contactBody';

import styles from './contact.scss'

function Home(props) {
    return (
        <div className={styles.Home}>
            <Header/>
            <ContactBody/>
        </div>
    );
}

export default Home;