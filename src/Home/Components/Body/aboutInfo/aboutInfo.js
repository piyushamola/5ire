import React from 'react';
import './aboutInfo.scss';

function AboutInfo(props) {
    return (
        <div className="aboutInfo">
              <img src={props.image} className="aboutDescImage" alt="about"/>
              <h1>{props.heading}</h1>
              <p>{props.para}</p>
        </div>
    );
}

export default AboutInfo;