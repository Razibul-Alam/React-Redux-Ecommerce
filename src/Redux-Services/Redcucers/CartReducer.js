export const cartReducer=(state=[],action)=>{
console.log(action,state)
if(action.type==="addCart"){
state=[...state,action.payload]
}else{
    console.log('sub')
}
return state;
}