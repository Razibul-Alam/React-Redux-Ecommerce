import React from 'react';
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { signUp } from './../../Redux-Services/Actions/Actions';
import { CContainer } from '@coreui/react';

const Register = ({onClose}) => {
  const success = () => {
    message.success('Successfully registered');
  };
  const dispatch=useDispatch()
    const onFinish = (values) => {
      console.log(values)
        if(values.password===values.Cpassword){
          dispatch(signUp(values))
        onClose()
        success()
        }else{
          alert('password not matched')
        }
      };
    return (
      
      <CContainer>
        <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
            <div className='p-4' style={{width:"75%"}}>
            <h3 className='text-center mb-4'>Sign Up</h3>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
        className='mb-5'
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
        className='mb-5'
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
        className='mb-5'
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
        <Form.Item
        className='mb-5'
          name="Cpassword"
          rules={[
            {
              required: true,
              message: 'Please Confirm Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Your Password"
          />
        </Form.Item>
        <Form.Item className='mb-5'>
          <Button type="primary" htmlType="submit" className="login-form-button" size='lg' block>
            Register
          </Button>
          Or <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
      </div>
      </div>
      </CContainer>
    );
};

export default Register;