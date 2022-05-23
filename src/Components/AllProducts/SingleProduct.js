import React,{useState} from 'react';
import { Card, Avatar, Col, Button,message} from 'antd';
import { EditOutlined, EllipsisOutlined, PlusOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../Redux-Services/Actions/Actions';
import { Link } from 'react-router-dom';
import CreateAccount from './../Create-Account/CreateAccount';

const { Meta } = Card;

const SingleProduct = ({product}) => {
  const [show,setShow] = useState(false);
  const showDrawer = () => {
    setShow(true);
  };
  const success = () => {
    message.success('Added Successfully');
  };
 const dispatch=useDispatch()
  const{name,img,key}=product;
    return (
      <>
      <CreateAccount visible={show} setVisible={setShow}/>
        <Col xs={24} sm={4} md={6} lg={8} xl={8}>
          <Card
    style={{ width: 300,padding:"10px"}}
    cover={
     <Link onClick={showDrawer} to={`details/${key}`}> <img
        alt="example"
        src={img}
        
      /></Link>
    }
    actions={[
      // <PlusOutlined/>,
      <Button  onClick={()=>dispatch(addToCart(product))} block className='bg-dark text-light'><PlusOutlined onClick={success}/> Add to Cart</Button>,
      // <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={name}
      // description="This is the description"
    />
  </Card>
  </Col>
  </>
    );
};

export default SingleProduct;