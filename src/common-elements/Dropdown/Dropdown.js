import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
import styles from './Dropdown.scss';

function DropdownElement(props) {
    return (
      <div className={styles.dropdown}>
      <p className={styles.dropbtn}>{props.name}</p>
      <div className={styles.dropdownContent}>
      {props?.menuList?.map((item, index) => (
                <a href="#">{item}</a>
          ))}
      </div>
    </div>
    );
}

export default DropdownElement;