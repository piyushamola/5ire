import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './Dropdown.css';

function DropdownElement(props) {
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a>1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a >2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
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