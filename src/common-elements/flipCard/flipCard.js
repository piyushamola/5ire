import React from 'react';
import styles from './flipCard.scss';
import linkedInImage from '../../assets2/linkedIn.png';

function flipCard(props) {
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                     <img src={props?.image}  style={{...props?.imgSize}} className={styles.displayImage} alt="image"/>
                    <h1>{props?.heading}</h1>
                    <p>{props?.subPara}</p>
                </div>
                <div className={styles.flipCardBack}>
                    <p>{props?.paraAfterFlip}</p>
                    { props?.linkedIn && <img src={linkedInImage}  onClick={() => window.open(props?.linkedIn)} className={styles.linkedInImage} alt="image"/> }
                </div>
            </div>
</div>
    );
}

export default flipCard;