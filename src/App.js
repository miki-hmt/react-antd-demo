
//demo2 #1 使用日期选择插件
import React, { useState } from 'react';
//import logo from './logo.svg';  #4. 注释无用代码
//import './App.css';             #5. 注释无用代码

//demo1 #1 引入antd样式
//import 'antd/dist/antd.css';   //;注释该文件，改为babelantd按需加载，提高页面加载性能    ;建议讲此css文件放入最外层index.js文件中，因为许多组件库都要用到此文件   2020.08.20 miki

//demo2 #2 使用日期选择插件，消息提示窗
//demo3 #1 引入分页
import { Button, DatePicker, message, Pagination } from 'antd';

//demo4 #1 引入函数声明式组件方式  必须要加{}，否则会找不到该组件位置
import {Demo} from './demo';

function App() {

    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };

    const pageChange =(page, pageSize) =>{
        console.log("当前页:"+page,pageSize);
        //调用接口：网络请求 TODO
    }

  return (
    <div className="App" style={{ width: 400,margin: '0 0 0 60px'}}>

    <h1>demo1- hello,this antd study</h1>
    {/* demo1 #2 创建button按钮 */}
    <Button type="primary">Button</Button>
    <br/><br/>

    {/* demo2 #3 创建日期选择组件 */}
    <div style={{ width: 400, border: '1px solid lightgray'}}>    {/* 添加样式，去除居中： margin: '0px auto'  */}
        <div style={{margin: '0 0 0 60px'}}>
            <h1>demo2- 日期选择组件</h1>
            <DatePicker onChange={handleChange} />
            <div style={{ marginTop: 16 }}>
                当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
            </div>
        </div>
    </div>
    <br/><br/>

    <div style={{ width: 400, border: '1px solid lightgray'}}>    {/* 添加样式，去除居中： margin: '0px auto'  */}
        <div style={{margin: '0 0 10px 60px'}}>
            <h1>demo3- 分页组件</h1>
            <Pagination defaultCurrent={1} total={50} onChange={pageChange}/>
        </div>

    </div>
    <br/><br/>

    {/* demo4 #2 引入函数声明式组件方式必须要加{}，否则会找不到该组件位置    */}
    <Demo/>

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
