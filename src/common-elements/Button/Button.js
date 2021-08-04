import React from 'react';

function ButtonComp({ label, className}) {
    return (
        <div>
          <button className={className}>
                 {label}
         </button>
        </div>
    );
}

export default ButtonComp;