import { Typography, Badge } from 'antd';
import React,{useState} from 'react';
import './HeaderPage.css'
import {Link} from 'react-router-dom'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import {CCollapse, CContainer, CForm, CFormInput, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import CreateAccount from './../Create-Account/CreateAccount';
const { Title } = Typography;


const HeaderPage = () => {
  const [show,setShow] = useState(false);

  const showDrawer = () => {
    setShow(true);
  };
  const [visible, setVisible] = useState(false)
  const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user)
console.log(user)
    return (
      <>
      <CreateAccount visible={show} setVisible={setShow}/>
    <CNavbar expand="lg bg-dark" colorScheme='dark' >
      <CContainer>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarBrand href="#">Transport Mall</CNavbarBrand>
          <CNavbarNav className="me-auto mb-2 mb-lg-0">
            <CNavItem>
             <Link to='/'> <CNavLink>
                Home
              </CNavLink></Link>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex">
          <span onClick={showDrawer} style={{color:"white"}}><UserOutlined /> {user.email? 'Logout':'SignUp'}</span>
            <CFormInput type="search" className="me-3 ms-2" placeholder="Search" />
      <Link to='cart'><Badge count={cart.length}><Title style={{color:"white"}} level={3}><ShoppingCartOutlined /></Title></Badge></Link>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
  //       <div>
  //           <PageHeader
  //   title="Transport Mall"
  //   className="site-page-header page-header"
  //   tags={<SearchComplete/>}
  //   extra={[
  //     <Link to='login'><Title level={4} type={'secondary'} style={{color:"white"}}><UserOutlined /> {user.email? 'Logout':'Signin'}</Title></Link>,
  //     <Title level={cart.length} style={{color:"white"}} type={'secondary'}>Orders</Title>,
  //     <Link to='cart'><Badge count={cart.length}><Title style={{color:"white"}} level={3}><ShoppingCartOutlined /></Title></Badge></Link>
  //   //   <DropdownMenu key="more" />,
  //   ]}
  //   avatar={{ src: 'https://transportmall.com/assets/images/tm-logo-2-296x144.png' }}
  // >
  //   <Content
  //     extraContent={
  //       <img
  //         src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
  //         alt="content"
  //         width="100%"
  //       />
  //     }
  //   >
  //     {/* {content} */}
  //   </Content>
  // </PageHeader>
  //       </div>
    );
};

export default HeaderPage;