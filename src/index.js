import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import hello from './home'
import * as serviceWorker from './serviceWorker';
import Counters from './counters';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();