import React from 'react';
import { Card, Avatar, Col, Button,message} from 'antd';
import { EditOutlined, EllipsisOutlined, PlusOutlined} from '@ant-design/icons';
// import { useAddToCart } from '../../Custom-Hooks/useAddToCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './../../Redux-Services/Actions/Actions';

const { Meta } = Card;

const SingleProduct = ({product}) => {
  const success = () => {
    message.success('Added Successfully');
  };
 const dispatch=useDispatch()
  const{name,img}=product;
    return (
        <Col xs={24} sm={4} md={6} lg={8} xl={8}>
           <Card
    style={{ width: 300,padding:"10px"}}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
    actions={[
      // <PlusOutlined/>,
      <Button  onClick={()=>dispatch(addToCart(product))} block><PlusOutlined onClick={success}/> Add to Cart</Button>,
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
    );
};

export default SingleProduct;