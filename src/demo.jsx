

import React, { useState } from 'react';
//使用日期选择插件，消息提示窗
import { Button, DatePicker, message } from 'antd';

export const Demo = () => {

    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };

    return (
        <div className="App" style={{ width: 400,}}>

            <h1>demo4- 函数声明式组件引入方式引入Demo.jsx</h1>

            {/* demo4 #3 创建日期选择组件 */}
            <div style={{ width: 400,border: '1px solid lightgray'}}>    {/* 添加样式，去除居中： margin: '0px auto'  */}
                <h1>demo4-1- 日期选择组件</h1>
                <DatePicker onChange={handleChange} />
                <div style={{ marginTop: 16 }}>
                    当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
                </div>
            </div>
        </div>
    )
};