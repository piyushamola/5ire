import React from 'react';
import './HeaderWithList.scss';

function HeaderWithList(props) {
    return (
        <div class="listStyles">
            <h1>{props.heading}</h1>
            { props.list.map((list) => (
                <li>{list}</li>
            ))}
        </div>
    );
}

export default HeaderWithList;