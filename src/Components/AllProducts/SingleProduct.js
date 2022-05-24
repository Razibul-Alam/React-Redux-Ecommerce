import React,{useState} from 'react';
import { Card,Button} from 'antd';
import { useDispatch} from 'react-redux';
import { addToCart } from './../../Redux-Services/Actions/Actions';
import { Link } from 'react-router-dom';
import CreateAccount from './../Create-Account/CreateAccount';
import { PlusOutlined } from '@ant-design/icons';
import { CCol } from '@coreui/react';
import { useMessage } from './../../Custom-Hooks/useMessage';
const { Meta } = Card;

const SingleProduct = ({product}) => {
  // This is the alert message
  const {success}=useMessage()
  // drawe state for showing drawer
  const [show,setShow] = useState(false);
 const dispatch=useDispatch()
//  destructuring properties from product
  const{name,img,key}=product;
  // add product to Cart function
  const addProductToCart=(item)=>{
    dispatch(addToCart(item))
    success('The product added')
  }
    return (
      <>

      <CreateAccount visible={show} setVisible={setShow}/>
        <CCol xs={24} sm={12} md={4} lg={3} xl={3} style={{display:'flex',justifyContent:"center"}} className='mb-4'>
          <Card
    style={{ width: 300,padding:"10px"}}
    cover={
     <Link to={`details/${key}`}> <img
        alt="example"
        src={img}
        
      /></Link>
    }
    // add to cart button
    actions={[
      <Button  onClick={()=>dispatch(addProductToCart(product))} block className='bg-dark text-light'><PlusOutlined/> Add to Cart</Button>,
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