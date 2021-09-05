import React from 'react';
import styles from './aboutInfo.scss';

function AboutInfo(props) {
    return (
        <div className={styles.aboutInfo}>
              <img src={props.image} className={styles.aboutDescImage} alt="about"/>
              <h1>{props.heading}</h1>
        </div>
    );
}

export default AboutInfo;