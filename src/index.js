import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';             #1. 注释无用代码
import App from './App';
//import * as serviceWorker from './serviceWorker';     #2. 注释无用代码

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();   #3. 注释无用代码
