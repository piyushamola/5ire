import React from 'react';
import styles from './Card.scss';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.container}>
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );
}

export default Card;