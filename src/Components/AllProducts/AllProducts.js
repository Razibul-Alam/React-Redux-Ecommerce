import React from 'react';
import { Row, Col } from 'antd';
import SingleProduct from './SingleProduct';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const AllProducts = () => {
    const products=useSelector(state=>state.products)
    return (
        <div style={{display:"felx",justifyContent:"center"}}>
            <Row gutter={[16, 16]}>
            {products.slice(42,54).map(product=><SingleProduct product={product} key={product.key}/>)}
    </Row>     
        </div>
    );
};

export default AllProducts;