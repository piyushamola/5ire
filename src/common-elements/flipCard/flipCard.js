import React from 'react';
import styles from './flipCard.scss';

function flipCard(props) {
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                <img src={props?.image}  style={{...props?.imgSize}} alt="image"/>
                    <h1>{props?.heading}</h1>
                    <p>{props?.subPara}</p>
                </div>
                <div className={styles.flipCardBack}>
                    <p>{props?.paraAfterFlip}</p>
                </div>
            </div>
</div>
    );
}

export default flipCard;