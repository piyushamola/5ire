import React from 'react';
import './getStartedInfo.scss'

function getStartedInfo(props) {
    return (
        <div className="imageLayout">
            <div className="boxStyles">
            <img src={props.image} className="startedImages" alt="logo" />
                <div className="textStyles">
                    <h2>{props.head}</h2>
                    <p>{props.para}</p>
                </div>
            </div>
        </div>
    );
}

export default getStartedInfo;