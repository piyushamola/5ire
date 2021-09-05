import React from 'react';
import cx from 'classnames';
import styles from './ImageHeadingContent.scss';

function ImageHeadingContent(props) {

    return (
        <div className={cx(styles.container, props?.containerClass)}>
            <img src={props.image} style={{...props.imgSize}} alt="about"/>
            {props.heading && <h1 className={props?.headingStyles}>{props.heading}</h1> }
            {props.subHead && <p className={props?.subHeadStyles}>{props.subHead}</p>}
            { props.para && <p className={props?.paragraphStyles}>{props.para}</p> }
        </div>
    );
}

export default ImageHeadingContent;
