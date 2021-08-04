import React from 'react';
import Header from './Components/Header/Header.js';
import Body from './Components/Body/Body.js';

import styles from './Home.scss'

function Home(props) {
    return (
        <div className={styles.Home}> 
            <Header/>
            <Body/>
        </div>
    );
}

export default Home;