import React from 'react';
import Header from './Components/Header/Header.js';
import Body from './Components/Body/Body.js';

import './Home.css'

function Home(props) {
    return (
        <div className="Home">
            <Header/>
            <Body/>
        </div>
    );
}

export default Home;