import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Dropdown.css';

function DropdownElement(props) {
    const menu = (
        <Menu>
          {props.menuList.map((item, index) => (
              <Menu.Item key={index}>
                <a>{item}</a>
              </Menu.Item>
          ))}
        </Menu>
      );
    return (
        <div>
          <Dropdown overlay={menu} trigger={['click']}>
             <div className="Dropdown" onClick={e => e.preventDefault()}>
                {props.name} <DownOutlined />
                </div>
          </Dropdown>
        </div>
    );
}

export default DropdownElement;