
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Register from './Components/Register/Register';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HeaderPage from './Components/HeaderPage/HeaderPage';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/AllProducts/ProductDetails';

function App() {
  return (
    <div>
      <Router>
      <HeaderPage/>
      {/* All routes here */}
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
