import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function ButtonComp({ size, label, className}) {
    return (
        <div>
          <Button type="primary" size={size} className={className}>
                 {label}
         </Button>
        </div>
    );
}

export default ButtonComp;