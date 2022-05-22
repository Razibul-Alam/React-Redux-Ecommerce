import React from 'react';
import { Drawer } from 'antd';

import Register from '../Register/Register';

const CreateAccount = ({visible,setVisible}) =>{
    const onClose = () => {
      setVisible(false);
    };
    return (
        <>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Register onClose={onClose}/>
      </Drawer>
    </>
    );
};

export default CreateAccount;