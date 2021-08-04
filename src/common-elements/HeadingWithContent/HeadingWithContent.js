import React from 'react';
import styles from './HeadingWithContent.scss';

function HeadingWithContent(props) {
    return (
        <div className={styles.contentStyles}>
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
        </div>
    );
}

export default HeadingWithContent;