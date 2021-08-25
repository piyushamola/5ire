import React from 'react';
import Header from '../common-elements/Header/Header';
import Footer from '../common-elements/Footer/Footer';
import styles from './roadmap.scss'
import Roadmap from '../assets2/Roadmap.svg';
function roadmap(props) {
    return (
        <div>
            <Header/>
            <img src={Roadmap} className={styles.roadmap} alt="about"/>
            <Footer/>
        </div>
    );
}

export default roadmap;