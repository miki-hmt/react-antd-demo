

import React, { useState } from 'react';
//使用日期选择插件，消息提示窗
import { Button, DatePicker, message } from 'antd';
//引入antd样式
import 'antd/dist/antd.css';   //建议讲此css文件放入最外层index.js文件中，因为许多组件库都要用到此文件   2020.08.20 miki

export const Demo = () => {

    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };

    return (
        <div className="App" style={{ width: 400,margin: '0 0 0 60px'}}>

            <h1>demo1- hello,this antd study</h1>
            {/* demo1 #2 创建button按钮 */}
            <Button type="primary">Button</Button>
            <br/><br/>

            {/* demo2 #3 创建日期选择组件 */}
            <div style={{ width: 400,border: '1px solid lightgray'}}>    {/* 添加样式，去除居中： margin: '0px auto'  */}
                <h1>demo2- 日期选择组件</h1>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                    当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                </div>
            </div>
        </div>
    )
};

render(<Demo />, document.getElementById('root'));