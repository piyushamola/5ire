import React from 'react';
import styles from './about.scss';

import Header from '../common-elements/Header/Header.js';
import AboutBody from './Component/AboutBody/AboutBody.js'

function about(props) {
    return (
        <div className={styles.Home}> 
            <Header/>
            <AboutBody/>
       </div>
    );
}

export default about;