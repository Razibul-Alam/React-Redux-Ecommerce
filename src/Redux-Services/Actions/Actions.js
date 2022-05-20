// add to cart
export const addToCart=(payload)=>{
    return{
        type:'addCart',
        payload:payload
    }

}
// load products
export const loadProducts=()=>{
    return async (dispatch)=>{
     fetch('https://jsonplaceholder.typicode.com/users')
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