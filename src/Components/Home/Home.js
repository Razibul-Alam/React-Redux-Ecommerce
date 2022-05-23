import React from 'react';
import { Layout} from 'antd';
import './Home.css'
import AllProducts from '../AllProducts/AllProducts';
import { CContainer } from '@coreui/react';

const {Content, Footer } = Layout;
const Home = () => {
    return (
        <div>
             {/* <Layout className=""> */}
    <Content>
      <div className="">
        <CContainer>
          <AllProducts/>
          </CContainer>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Transport Mall ©2022 Created by Razibul</Footer>
  {/* </Layout> */}
            
        </div>
    );
};

export default Home;