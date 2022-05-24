import React from 'react';
import { Avatar, Empty } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { CContainer, CButton,CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, } from '@coreui/react';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { removeCart } from '../../Redux-Services/Actions/Actions';
import { placeOrder } from './../../Redux-Services/Actions/Actions';
import { useMessage } from './../../Custom-Hooks/useMessage';
const tableHead=['Item','Action','Quantity','Price']
const Cart = () => {
  const{warning,success}=useMessage()
  const dispatch=useDispatch()
  // get cart from redux
    const cart=useSelector(state=>state.cart)
    const totalResult=cart.reduce((sum,item)=>sum+item.price,0)
// remove from cart function
   const removeFromCart=(key)=>{
     dispatch(removeCart(key))
     warning()

   }
  //  confirm order function
   const confirmOrder=()=>{
     dispatch(placeOrder())
     success('Order place')
   }
    return (
      <>
      {cart.length?<CContainer>
<CTable>
  <CTableHead>
    <CTableRow>
      {tableHead.map(itemName=><CTableHeaderCell scope="col">{itemName}</CTableHeaderCell>)}
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {cart?.map(item=><CTableRow>
      {/* <CTableDataCell></CTableDataCell> */}
      <CTableDataCell><Avatar src={item.img} />{item.name}</CTableDataCell>
      <CTableDataCell><span className='text-danger' onClick={()=>removeFromCart(item.key)}><DeleteOutlined /></span></CTableDataCell>
      <CTableDataCell>1</CTableDataCell>
      <CTableDataCell>{item.price}</CTableDataCell>
    </CTableRow>)}

  </CTableBody>
</CTable>
<div style={{display:'flex', justifyContent:'flex-end', marginTop:'5px'}} >
    <h4>Total Amount= {totalResult}</h4></div>
<div style={{display:'flex', justifyContent:'flex-end', marginTop:'5px'}} >
    <CButton size='lg' color='success' className='text-light' onClick={confirmOrder}>Place Order</CButton></div>
        </CContainer>:<Empty/>}
        </>
    );
};

export default Cart;