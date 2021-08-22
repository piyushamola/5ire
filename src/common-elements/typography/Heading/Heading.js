import React from 'react';
import cx from 'classnames';

import styles from './Heading.scss';
const sizes = {
    1: styles.h1,
    2: styles.h2,
    3: styles.h3,
    4: styles.h4,
    5: styles.h5,
  };

const getSizeAsClass = (size) => sizes[size];

const Heading = (props) => {
    const {
      size, children, className, ...rest
    } = props;

    const totalClass = cx(getSizeAsClass(size), className);

    return (
      <div {...rest} className={totalClass} >{children}</div>
    );
  };

export default Heading;