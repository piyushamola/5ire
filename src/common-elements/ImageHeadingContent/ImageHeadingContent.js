import React from 'react';
import styles from './ImageHeadingContent.scss';

function ImageHeadingContent(props) {
    let itemsClasses = [styles.imageStyles];
    if(props.imgSize) {
        itemsClasses = [styles.imageStyles, props.imgSize];
    }

    return (
        <div className={styles.container}>
                <img src={props.image} className={itemsClasses.join(' ')} alt="about"/>
                <h1 className={props?.headingStyles}>{props.heading}</h1>
                <p className={props?.paragraphStyles}>{props.para}</p>
        </div>
    );
}

export default ImageHeadingContent;
