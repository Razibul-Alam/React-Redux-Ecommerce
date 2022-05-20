import { PageHeader, Tag, Button, Typography,Image, Badge } from 'antd';
import React from 'react';
import './HeaderPage.css'
import { useAddToCart } from '../../Custom-Hooks/useAddToCart';
import {Link} from 'react-router-dom'
import SearchComplete from '../SearchComplete/SearchComplete';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import { useSelector } from 'react-redux';
const { Title } = Typography;


function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
  }


const HeaderPage = () => {
  const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user)
console.log(user)
    return (
        <div>
            <PageHeader
    title="Transport Mall"
    className="site-page-header page-header"
    tags={<SearchComplete/>}
    extra={[
      <Link to='login'><Title level={4} type={'secondary'} style={{color:"white"}}><UserOutlined /> {user.email? 'Logout':'Signin'}</Title></Link>,
      <Title level={cart.length} style={{color:"white"}} type={'secondary'}>Orders</Title>,
      <Link to='cart'><Badge count={cart.length}><Title style={{color:"white"}} level={3}><ShoppingCartOutlined /></Title></Badge></Link>
    //   <DropdownMenu key="more" />,
    ]}
    avatar={{ src: 'https://transportmall.com/assets/images/tm-logo-2-296x144.png' }}
  >
    <Content
      extraContent={
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
          alt="content"
          width="100%"
        />
      }
    >
      {/* {content} */}
    </Content>
  </PageHeader>
        </div>
    );
};

export default HeaderPage;