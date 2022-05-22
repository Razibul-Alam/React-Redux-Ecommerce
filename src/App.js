
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Register from './Components/Register/Register';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HeaderPage from './Components/HeaderPage/HeaderPage';
import AllProducts from './Components/AllProducts/AllProducts';
import Home from './Components/Home/Home';
import {useSelector,useDispatch} from'react-redux'
import Cart from './Components/Cart/Cart';
import { useEffect } from 'react';
import { loadProducts } from './Redux-Services/Actions/Actions';
import ProductDetails from './Components/AllProducts/ProductDetails';

function App() {
  const states=useSelector(state=>state)
  console.log(states)
  const dispatch=useDispatch()
useEffect(()=>{
dispatch(loadProducts())
},[])

// useEffect(()=>{
//   fetch('./Products.json')
//   .then(res=>res.json())
//   .then(data=>console.log(data))
// },[])
  return (
    <div>
      <Router>
      <HeaderPage/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='details/:productKey' element={<ProductDetails/>}/>

     </Routes>
     </Router>
    </div>
  );
}

export default App;
