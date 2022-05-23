import React,{useEffect} from 'react';
import SingleProduct from './SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts } from '../../Redux-Services/Actions/Actions';
import { CRow} from '@coreui/react';

const AllProducts = () => {
    const dispatch=useDispatch()
    // all data loaded here from redux
    useEffect(()=>{
    dispatch(loadProducts())
    },[])
    
    // take products from redux
    const products=useSelector(state=>state.products)
    // unique category findout
    const category=[]
    products.map(product=>{if(category.indexOf(product.category)===-1){
        category.push(product.category)
    }})
    return (
        <>
           {category?.map(category=> <div><h2 className='text-primary mt-4'>{category.toUpperCase()}</h2>
           <hr className='w-25'/><CRow gutter={[16,16]} className='mt-3'>
            {products?.filter(product=>product.category===category).slice(0,8).map(product=><SingleProduct product={product} key={product.key}/>)}
    </CRow></div>)  }  
    </> 
    );
};

export default AllProducts;