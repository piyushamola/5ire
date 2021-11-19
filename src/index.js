import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { CookiesProvider } from 'react-cookie';

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

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'zh', 'ja'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
})

const loadingMarkup = (
  <div>
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
    <CookiesProvider>
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
      </CookiesProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
