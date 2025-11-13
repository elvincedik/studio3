import './App.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/dashboard';


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <MainLayout >
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </ MainLayout>
    </BrowserRouter>
      
  )
}

export default App
