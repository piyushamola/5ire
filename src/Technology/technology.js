import React from 'react';
import Header from '../common-elements/Header/Header.js';
import AboutTechnology from './Component/Technology/AboutTechnology.js'

import styles from './technology.scss'

function Technology(props) {
    return (
        <div className={styles.Home}>
            <Header/>
            <AboutTechnology/>
        </div>
    );
}

export default Technology;