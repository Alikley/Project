import { Routes, Route, Navigate,  } from "react-router-dom";
import { useContext } from 'react';
import { LoginContext } from './context/LoginContext';
import Home from './components/pages/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/pages/login/Login';
import Panel from './components/pages/panel/Panel';
import Shop from "./components/pages/shop/Shop";
import Product from "./components/pages/shop/Product";
import Products from "./components/pages/shop/Products";
import Cart from "./components/pages/shop/Cart";



function App() {
  const userLog = useContext(LoginContext)

  return (
    <div className="App"> 
      <Routes>
      <Route  element={<Layout />}>
       <Route  path='/' element={<Home  />} />
       <Route  path='/Shop' element={<Shop  />} />
       <Route  path='/products' element={<Products  />} />
       <Route  path='/cart' element={<Cart  />} />


       <Route  path="/products/:id" element={<Product />} />

       <Route  path='/login' element={
         userLog.isLogin?
         <Navigate to='/panel' replace={true} />
         :
              <Login />
       }/>
       <Route  path='/panel' element={
        userLog.isLogin?
              <Panel  />
            :
        <Navigate to='/login' replace={true} />
        }/>

      </Route>
    </Routes>
    </div>
  );
}

export default App;