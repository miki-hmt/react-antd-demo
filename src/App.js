import React from 'react';
//import logo from './logo.svg';  #4. 注释无用代码
//import './App.css';             #5. 注释无用代码

import { Button } from 'antd';

function App() {
  return (
    <div className="App">

      hello,this antd study
      <br/>
      <Button type="primary">Button</Button>

      {/* #6. 注释无用代码  */}

      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
