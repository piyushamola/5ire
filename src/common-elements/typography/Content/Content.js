import React from 'react';
import cx from 'classnames';
import styles from './Content.scss';

const sizes = {
    1: styles.content1,
    2: styles.content2,
    3: styles.content3,
    4: styles.content4,
    5: styles.content5,
  };

const getSizeAsClass = (size) => sizes[size];

const Content = (props) => {
    const {
      children, size, className, ...extraProps
    } = props;

    return (
      <div
        className={cx(getSizeAsClass(size), className)}
        {...extraProps}
      >
        {children}
      </div>
    );
  };


export default Content;