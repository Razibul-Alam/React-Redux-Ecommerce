import React,{useEffect} from 'react';
import { Row} from 'antd';
import SingleProduct from './SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts } from '../../Redux-Services/Actions/Actions';
const AllProducts = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(loadProducts())
    },[])
    const products=useSelector(state=>state.products)
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Row gutter={[16, 16]}>
            {products.slice(42,54).map(product=><SingleProduct product={product} key={product.key}/>)}
    </Row>     
        </div>
    );
};

export default AllProducts;