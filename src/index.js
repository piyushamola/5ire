import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Home from './Home';
import Wiki from './Wiki'

ReactDOM.render(
  <React.StrictMode>
      <App>
      <BrowserRouter>
      <Switch>
        <Route path="/wiki" component={Wiki}/>
        <Route path="/"  exact component={Home}/>
      </Switch>
      </BrowserRouter>
      </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
