import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import "./Login.scss";
import { SIGNIN } from '../../services/Services';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user-info")){
            navigate('/')
        }
    }, [])

    async function login(){
        console.warn(username, password)
        let item = {username, password}

        let result = await fetch("https://online-excel-heroku.herokuapp.com/auth/token", {
            method: 'POST',
            headers: {  
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user-info", JSON.stringify(result))
        if(username && password){
          navigate('/')
        }
    }

    
    const [studentValue, setStudentValue] = useState({
      username: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setStudentValue({
        ...studentValue,
        [name]: value,
      });
    };
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const res = await SIGNIN(studentValue)
      }catch(err){
        console.log("err: ", err.message)
      }
    }


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className='login'>
            {/* <h1>Login</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' name='username' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' name='password' />
            <button onClick={login}>Submit</button> */}

            

            <Form
            className='login__form'
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
        label="Username"
        name="username"
        type="text" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'
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
        <Button onClick={login} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    );
}

export default Login;
