import React,{useState} from 'react';
import { Card,Col, Button,message} from 'antd';
import { useDispatch} from 'react-redux';
import { addToCart } from './../../Redux-Services/Actions/Actions';
import { Link } from 'react-router-dom';
import CreateAccount from './../Create-Account/CreateAccount';
import { PlusOutlined } from '@ant-design/icons';
import { CCol } from '@coreui/react';
const { Meta } = Card;

const SingleProduct = ({product}) => {
  // drawe state for showing drawer
  const [show,setShow] = useState(false);
  const showDrawer = () => {
    setShow(true);
  };
  // this is just a message after success
  const success = () => {
    message.success('Added Successfully');
  };
 const dispatch=useDispatch()
//  destructuring properties from product
  const{name,img,key}=product;
    return (
      <>
      <CreateAccount visible={show} setVisible={setShow}/>
        <CCol xs={24} sm={12} md={4} lg={3} xl={3} style={{display:'flex',justifyContent:"center"}} className='mb-4'>
          <Card
    style={{ width: 300,padding:"10px"}}
    cover={
     <Link onClick={showDrawer} to={`details/${key}`}> <img
        alt="example"
        src={img}
        
      /></Link>
    }
    // add to cart button
    actions={[
      <Button  onClick={()=>dispatch(addToCart(product))} block className='bg-dark text-light'><PlusOutlined onClick={success}/> Add to Cart</Button>,
    ]}
  >
    <Meta
      title={name}
    />
  </Card>
  </CCol>
  </>
    );
};

export default SingleProduct;