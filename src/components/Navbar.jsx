import { useState } from "react";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    let [isOpen, setIspon] = useState(false)
    return (
        <header>
        {/* desktop */}
        <nav className='bg-[#010313] text-white justify-between items-center px-8 h-16 flex'>
          <a href="">tutor</a>
          <ul className='hidden space-x-5 md:flex'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">products</Link>
            </li>
            <li>
                <Link to="/services">services</Link>
            </li>
            <li>
                <Link to="/contact">contact Us</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
          </ul>
          <GiHamburgerMenu 
            className='text-3xl inline md:hidden cursor-pointer' 
            onClick={() => setIspon(!isOpen)} 
          />
        </nav>

        {/* mobile */}
        {isOpen ? (
          <nav 
            className='bg-[#010313] text-white justify-between 
              items-center items-start px-8 h-58 flex md:hidden py-3
            '
          >
            <ul className='space-y-8'>
              <li><a href="">About Us</a></li>
              <li><a href="">contact Us</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">Services</a></li>
            </ul>
          </nav>
        ) : ""}

      </header>
    )
} export default Navbar;