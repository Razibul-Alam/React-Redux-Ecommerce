// initial state
const user={}
export const AuthenticationReducer=(state=user,action)=>{
    console.log(action.payload,state)
    if(action.type==="signup"){
    state=action.payload
    }if(action.type==="signin"){
        state.authentic=action.payload
    }
    if(action.type==="logout"){
        state={}
    }
    return state;
    }