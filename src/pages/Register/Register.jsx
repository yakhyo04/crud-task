import React, { useEffect, useState } from 'react';
import "./Register.scss";
import { useNavigate } from 'react-router-dom';

import { Button, Checkbox, Form, Input } from 'antd';


const Register = () => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/')
        }
    }, [])


    async function signUp(){
        let item = {fullName, username, phone, password}
        console.warn(item)

        let result = await fetch("https://online-excel-heroku.herokuapp.com/auth/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/")
    }


    const onFinish = (values) => {
      console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
        <div className='register'>
            {/* <h1>Register</h1> */}
            {/* <form> */}
                {/* <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" name='fullName' placeholder='fullName' />
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" name='username' placeholder='username' />
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" name='phone' placeholder='phone' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name='password' placeholder='password' />
                <button onClick={signUp}>Submit</button> */}
            {/* </form> */}
            <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="FullName"
        onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" name='fullName' placeholder='fullName'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        onChange={(e) => setUsername(e.target.value)} value={username} type="text" name='username' placeholder='username'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        onChange={(e) => setPhone(e.target.value)} value={phone} type="number" name='phone' placeholder='phone'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' 
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={signUp} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    );
}

export default Register;
