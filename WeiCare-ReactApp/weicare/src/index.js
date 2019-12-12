import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Footer = () => (
  <footer className="footer">
    <p>Some footer nonsense!</p>
  </footer>
);

ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
