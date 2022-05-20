import React from 'react';
import products from '../../fakeData'
import { Row, Col } from 'antd';
import SingleProduct from './SingleProduct';
const AllProducts = () => {
    return (
        <div style={{display:"felx",justifyContent:"center"}}>
            <Row gutter={[16, 16]}>
            {products.slice(0,12).map(product=><SingleProduct product={product} key={product.key}/>)}
    </Row>     
        </div>
    );
};

export default AllProducts;