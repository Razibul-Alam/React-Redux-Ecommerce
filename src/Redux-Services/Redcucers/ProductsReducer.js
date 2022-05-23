// products load reducer
export const ProductsReducer=(state=[],action)=>{
    if(action.type==="loadProducts"){
        console.log('click')
state=action.payload
    }
    return state;
}