import React from 'react';
import { Drawer, message } from 'antd';

import Register from '../Register/Register';
import { useSelector, useDispatch } from 'react-redux';
import { CButton } from '@coreui/react';
import { logOut } from './../../Redux-Services/Actions/Actions';

const CreateAccount = ({visible,setVisible}) =>{
  const user=useSelector(state=>state.user)
  console.log(user)
  const dispatch=useDispatch()
  // drawer closer
    const onClose = () => {  
         setVisible(false);
    };
    // this is just a message
    const success = () => {
      message.success('Successfully logged out');
    };
    // signout function
    const signOut=()=>{
      dispatch(logOut())
      success()
      onClose()

    }
    return (
        <>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        {user.email?<div><h3>{user.email}</h3>
        <CButton color="primary" size="sm" onClick={signOut}>Logout</CButton></div>:<Register onClose={onClose}/>}
      </Drawer>
    </>
    );
};

export default CreateAccount;