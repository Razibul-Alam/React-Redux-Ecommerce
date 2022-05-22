import React,{useState} from 'react'
import { Carousel } from 'antd';
import SingleProduct from '../AllProducts/SingleProduct';
import Register from '../Register/Register';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

 const ProductsSlider=()=>{ 
     return (
  <Carousel autoplay>
      <div style={{contentStyle}}>
    <Register/>
    </div>
  </Carousel>
);
 }
 export default ProductsSlider;