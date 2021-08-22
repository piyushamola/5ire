import React from 'react';
import styles from './Button.scss';
import cx from 'classnames';

function ButtonComp({ label, className, btnClick, ...restProps}) {
    const finalClass = cx(styles.buttonStyles, className)
    return (
        <div>
          <button className={finalClass} onClick={btnClick} {...restProps}>
                 {label}
         </button>
        </div>
    );
}

export default ButtonComp;