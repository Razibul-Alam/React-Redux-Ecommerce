import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { signUp } from './../../Redux-Services/Actions/Actions';
const Register = () => {
  const success = () => {
    message.success('This is a success message');
  };
  const dispatch=useDispatch()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(signUp(values))
        success()
      };
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
            <div style={{width:"50%"}}>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          Or <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
};

export default Register;