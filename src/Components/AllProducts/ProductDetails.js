import React from 'react';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetaiils.css'
import { CContainer, CRow, CButton } from '@coreui/react';
const ProductDetails = () => {
  const{productKey}=useParams()
  const products=useSelector(state=>state.products)
  const singleProduct=products.find(product=>product.key==productKey)
  console.log(singleProduct,productKey,products)
    return (
        <>
        <CContainer className='mt-5'>
        <CRow>
            <div className='product'>
            <img src={singleProduct?.img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{singleProduct?.name}</p>
                <p>Price: ${singleProduct?.price}</p>
                <p><small>Seller: {singleProduct?.seller}</small></p>
                <p><small>Ratings: {singleProduct?.star} stars</small></p>
            </div>
            <CButton className='btn-cart bg-dark text-light'>
                <p className='btn-text'>Add to Cart</p>
            </CButton>
        </div>
  <div>
    <Descriptions
      title="Product Full Dedails"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="Category">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="Delivery time">3 Days</Descriptions.Item>
      <Descriptions.Item label="Stock">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Shipping">$10.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
       {singleProduct?.features.map(pd=><p>{pd?.description} {pd.value}</p>)}
      </Descriptions.Item>
    </Descriptions>
  </div>
  </CRow>
  </CContainer>
  </>
);
};

export default ProductDetails;