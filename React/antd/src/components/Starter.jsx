import React, { useState } from "react";
import './App.css'
import { Button, ConfigProvider, FloatButton, Switch, Input, Space, Select, Form, } from 'antd';

import { AiFillCar } from "react-icons/ai";
import { TinyColor } from '@ctrl/tinycolor';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';

function Starter() {
    const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
    const [open, setOpen] = useState(false);
    const { Search } = Input;
    const onChange = (checked) => {
        setOpen(checked);
        console.log(checked)
    };
    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
        },
    ];
    const optionHandler = (e) => {
        console.log(e)
    }
    const getHoverColors = (colors) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors) =>
        colors.map((color) => new TinyColor(color).darken(5).toString());


    const onChangeOTP = (text) => {
        console.log('onChange:', text);
    };
    const sharedProps = {
        onChangeOTP,
    };
    const formLayout = {
        labelCol: { span: 6 },  // Adjusts the label width
        wrapperCol: { span: 20 },  // Adjusts the input field width
    };
    const submitHandler = (values) => {
        const obj = values;

    }
    return (
        <div className="App">
            <Button type="dashed" loading={true} icon=<AiFillCar />>

            </Button>
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorPrimary: `linear-gradient(116deg,  ${colors3.join(', ')})`,
                            colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                            colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                            lineWidth: 0,
                        },
                    },
                }}
            >
                <Button type="primary" size="large" icon=<AiFillCar />>

                </Button>
            </ConfigProvider>

            <div
                style={{
                    height: '300vh',
                    padding: 10,
                }}
            >
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <div>Scroll to bottom</div>
                <FloatButton.BackTop tooltip="Move to upward " description="Top" />
            </div>

            <FloatButton.Group style={{ left: 10, padding: '10px', }}>
                <FloatButton icon={<QuestionCircleOutlined />} />
                <FloatButton style={{ padding: 0 }} />
                <FloatButton icon={<SyncOutlined />} badge={{
                    count: 5,
                    color: 'blue',
                }} />
            </FloatButton.Group>

            <Switch
                onChange={onChange}
                checked={open} />

            <Input addonBefore="email" addonAfter="submit" placeholder="Enter your mail" style={{
                width: '20%',
            }} />
            <Space.Compact>
                <Input addonBefore="https://" placeholder="input search text" allowClear count={{ max: 10, show: true }} />
                <Button type="primary">submit</Button>
            </Space.Compact>

            <Select defaultValue="Zhejiang" options={options} onChange={optionHandler} />

            <Space direction="vertical">
                <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
            </Space>

            <br></br>
            <br></br>
            <br></br>

            <Form onFinish={submitHandler} style={{ width: "30%", margin: "0 auto" }} >
                <Form.Item wrapperCol={{ span: 29 }} label='Name: ' name='username'>
                    <Input placeholder="Enter name " required />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }} label='Password : ' name='Email'>
                    <Input.Password placeholder="Enter Password " required />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" >submit</Button>
                </Form.Item>
            </Form>
        </div >
    );

}

export default Starter
