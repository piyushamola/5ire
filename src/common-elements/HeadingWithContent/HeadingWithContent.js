import React from 'react';
import './HeadingWithContent.scss';

function HeadingWithContent(props) {
    return (
        <div className="contentStyle">
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
        </div>
    );
}

export default HeadingWithContent;