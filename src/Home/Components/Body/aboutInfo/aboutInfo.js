import React from 'react';
import styles from './aboutInfo.scss';
import Heading from '../../../../common-elements/typography/Heading/Heading';

function AboutInfo(props) {
    return (
        <div className={styles.aboutInfo}>
              <img src={props.image} className={styles.aboutDescImage} alt="about"/>
              <Heading size="1" style={{ alignSelf: 'start', marginTop: '2rem', width: '30rem', ...props.style}}>{props.heading}</Heading>
              <p>{props.para}</p>
        </div>
    );
}

export default AboutInfo;