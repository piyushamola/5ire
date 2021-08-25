import React from 'react';
import styles from './HeaderWithList.scss';
import { useHistory } from "react-router-dom";
import cx from 'classnames';

function HeaderWithList(props) {

    const history = useHistory();
    return (
        <div className={styles.listStyles}>
            <h1>{props?.heading}</h1>
            { props?.list.map((list) => (
                <li onClick={() => list?.link ? history.push(list?.link): window.open(list?.open)} className={cx({[styles.list]: !list?.link && !list?.open})}>{list?.label}</li>
            ))}
        </div>
    );
}

export default HeaderWithList;