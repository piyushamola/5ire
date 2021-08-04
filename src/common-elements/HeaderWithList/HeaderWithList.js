import React from 'react';
import styles from './HeaderWithList.scss';

function HeaderWithList(props) {
    return (
        <div className={styles.listStyles}>
            <h1>{props.heading}</h1>
            { props.list.map((list) => (
                <li>{list}</li>
            ))}
        </div>
    );
}

export default HeaderWithList;