import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Home from './Home';
import about from './About';
import contact from './ContactUs'
import technology from './Technology';
import roadmap from './Roadmap';
import ScrollToTop from './common-elements/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
      <App>
      <BrowserRouter>
      <ScrollToTop/>
      <Switch>
        <Route path="/about" component={about}/>
        <Route path="/contact"component={contact}/>
        <Route path="/technology" component={technology}/>
        <Route path="/roadmap" component={roadmap}/>
        <Route path="/"  exact component={Home}/>
      </Switch>
      </BrowserRouter>
      </App>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
