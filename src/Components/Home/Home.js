import React from 'react';
import { Layout, Menu} from 'antd';
import './Home.css'
import AllProducts from '../AllProducts/AllProducts';

const { Header, Content, Footer } = Layout;
const menuItems=["All","Today's deal","Customer service","Gift Card"]
const Home = () => {
    return (
        <div>
             <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['2']}
        items={menuItems.map((item, index) => {
          const key = index + 1;
          return {
            key,
            label: `${item}`,
          };
        })}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
          <AllProducts/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Transport Mall ©2022 Created by Razibul</Footer>
  </Layout>
            
        </div>
    );
};

export default Home;