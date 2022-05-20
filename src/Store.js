import { createStore,combineReducers,applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from "./Redux-Services/Redcucers/CartReducer";
import thunk from 'redux-thunk'
import { ProductsReducer } from "./Redux-Services/Redcucers/ProductsReducer";
import { AuthenticationReducer } from "./Redux-Services/Redcucers/AuthenticationRecuder";
export const store= createStore(
    combineReducers({
     cart:cartReducer,
     products:ProductsReducer,
     user:AuthenticationReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
