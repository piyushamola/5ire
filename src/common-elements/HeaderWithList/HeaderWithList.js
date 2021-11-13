import React from 'react';
import styles from './HeaderWithList.scss';
import { useHistory } from "react-router-dom";
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

function HeaderWithList(props) {

    const history = useHistory();
    const { t } = useTranslation();
    return (
        <div className={styles.listStyles}>
            <h1>{t(props?.heading)}</h1>
            { props?.list.map((list) => (
                <li onClick={() => list?.link ? history.push(list?.link): window.open(list?.open)} className={cx({[styles.list]: !list?.link && !list?.open})}>{t(list?.label)}</li>
            ))}
        </div>
    );
}

export default HeaderWithList;