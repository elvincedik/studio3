import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/products';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/dashboard';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/products/ProductDetails';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([])

  console.log(cart.length);

  const handleAddToCart = (product) => {
    console.log(product);

    const isProductInCart = cart.find(item => item.id === product.id)

    if(isProductInCart) {
      alert("product is already in cart")
    } else {
      setCart(prevCart => [...prevCart, product])
      alert("product has been added to cart")
    }

    console.log(cart);
    
    
  }

  const handleRemoveCart = (id) => {
    setCart((prev) =>prev.filter(item => item.id !== id))
    alert("item was removed successfully")
  }
  
  
  return (
    <BrowserRouter>
      <MainLayout cartNo={cart.length} >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products' element={<Products handleAddToCart={handleAddToCart} />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/cart' element={<CartPage cartItems={cart} removeCart={handleRemoveCart} />}/>
          <Route path='/product/:id' element={<ProductDetails />}/>
        </Routes>
      </ MainLayout>
    </BrowserRouter>
      
  )
}

export default App
