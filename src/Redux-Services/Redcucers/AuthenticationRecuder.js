const user=
{

}
// const loginUser={

// }
export const AuthenticationReducer=(state=user,action)=>{
    console.log(action.payload,state)
    if(action.type==="signup"){
    state=action.payload
    }if(action.type==="signin"){
        state.authentic=action.payload
    }
    return state;
    }