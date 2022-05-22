export const cartReducer=(state=[],action)=>{
console.log(action,state)
if(action.type==="addCart"){
state=[...state,action.payload]
} 
if(action.type==="removeCart"){
    state=state.filter(item=>item.key!==action.payload)
}
if(action.type==='placeOrder'){
    state=[]
}
return state;
}