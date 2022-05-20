import React,{useState,useEffect} from 'react';
export const useAddToCart=(product)=>{
const[cart,setCart]=useState(['a'])
const addCart=(product)=>{
    // console.log('clicked',typeof(cart.length))
    const newCart=[...cart,product]
    setCart(newCart)
}
return{cart,addCart}
}
