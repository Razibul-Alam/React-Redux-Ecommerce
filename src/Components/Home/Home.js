import React from 'react';
import { Layout, Menu} from 'antd';
import './Home.css'
import AllProducts from '../AllProducts/AllProducts';
import ProductsSlider from '../Products-Slider/ProductsSlider';
import { CContainer } from '@coreui/react';

const { Header, Content, Footer } = Layout;
const menuItems=["All","Today's deal","Customer service","Gift Card"]
const Home = () => {
    return (
        <div>
             <Layout className="">
    {/* <Header> */}
      {/* <div className="logo" />
      <div className='container-fluid'>
     <CContainer>
     <Menu
     className='bg-dark'
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
     </CContainer>
     </div> */}
    {/* </Header> */}
    <Content>
      <div className="site-layout-content">
        <CContainer>
          <AllProducts/>
          </CContainer>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Transport Mall ©2022 Created by Razibul</Footer>
  </Layout>
            
        </div>
    );
};

export default Home;