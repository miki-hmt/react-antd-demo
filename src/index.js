import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';             #1. 注释无用代码
import App from './App';
//import * as serviceWorker from './serviceWorker';     #2. 注释无用代码

//demo1 #1 引入antd样式
// 注释antd样式文件，改为babel antd按需加载，提高页面加载性能
//import 'antd/dist/antd.css';   //;注释该文件，改为babel antd按需加载，提高页面加载性能    ;建议讲此css文件放入最外层index.js文件中，因为许多组件库都要用到此文件   2020.08.20 miki

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
