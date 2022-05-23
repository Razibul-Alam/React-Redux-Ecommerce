import React from 'react';
import { Avatar } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { CBadge, CContainer, CListGroup, CListGroupItem, CButton } from '@coreui/react';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { removeCart } from '../../Redux-Services/Actions/Actions';
import { placeOrder } from './../../Redux-Services/Actions/Actions';

const Cart = () => {
  const dispatch=useDispatch()
  // get cart from redux
    const cart=useSelector(state=>state.cart)
    const totalResult=cart.reduce((sum,item)=>sum+item.price,0)
// remove from cart function
   const removeFromCart=(key)=>{
     console.log(key)
     dispatch(removeCart(key))
   }
  //  confirm order function
   const confirmOrder=()=>{
     dispatch(placeOrder())
     alert('successfull')
   }
    return (
      <CContainer>
        <div className='contianer-fluid mt-3'>
           
            <CListGroup>
  {cart.map(item=><CListGroupItem className="d-flex justify-content-between align-items-center">
  <span><Avatar src={item.img} />
    {item.name.slice(0,12)}</span>
    <span className='text-danger' onClick={()=>removeFromCart(item.key)}><DeleteOutlined /></span>
   <span><PlusOutlined /><CBadge color="primary" shape="rounded-pill">
     {1} 
    </CBadge><MinusOutlined /></span> 
    <CBadge color="primary" shape="rounded-pill">
      {item.price}
    </CBadge>
  </CListGroupItem>)}
</CListGroup>
<div style={{display:'flex', justifyContent:'flex-end', marginTop:'5px'}} >
    <h4>Total Amount= {totalResult}</h4></div>
<div style={{display:'flex', justifyContent:'flex-end', marginTop:'5px'}} >
    <CButton size='lg' color='success' className='text-light' onClick={confirmOrder}>Place Order</CButton></div>
        </div>
        </CContainer>
    );
};

export default Cart;