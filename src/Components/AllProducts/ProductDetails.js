import React from 'react';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetaiils.css'
const ProductDetails = () => {
  const{productKey}=useParams()
  const products=useSelector(state=>state.products)
  const singleProduct=products.find(product=>product.key==productKey)
  console.log(singleProduct,productKey,products)
    return (
        <>
            <div className='product'>
            <img src={singleProduct?.img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{singleProduct?.name}</p>
                <p>Price: ${singleProduct?.price}</p>
                <p><small>Seller: {singleProduct?.seller}</small></p>
                <p><small>Ratings: {singleProduct?.star} stars</small></p>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
  {/* <div>
    <Descriptions
      title="Responsive Descriptions"
      bordered
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
      <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
      <Descriptions.Item label="time">18:00:00</Descriptions.Item>
      <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
      <Descriptions.Item label="Official">$60.00</Descriptions.Item>
      <Descriptions.Item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </Descriptions.Item>
    </Descriptions>
  </div> */}
  </>
);
};

export default ProductDetails;