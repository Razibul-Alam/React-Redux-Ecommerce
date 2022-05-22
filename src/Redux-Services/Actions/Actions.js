// add to cart
export const addToCart=(payload)=>{
    return{
        type:'addCart',
        payload:payload
    }

}
// remove from cart
export const removeCart=(payload)=>{
    return{
        type:'removeCart',
        payload:payload
    }

}
// clear cart
export const placeOrder=(payload)=>{
    return{
        type:'placeOrder',
        payload:payload
    }

}
// load products
export const loadProducts=()=>{
    return async (dispatch)=>{
     fetch('../../../Products.json')
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"loadProducts",
            payload:data
        })
        }   
        )
      }

}
// Signup
export const signUp=(payload)=>{
    return{
        type:'signup',
        payload:payload
    }
}
// Signin
export const signIn=(payload)=>{
    return{
        type:'signin',
        payload:payload
    }
}