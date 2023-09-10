import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ShoppingCart}from "phosphor-react"
import "./navbar.css";

export const Navbar = () => {
  const Navi=useNavigate();
  return (
    <div className="navbar">
      <h1 className='title' onClick={()=>Navi('/')}>FIRST CHOICE</h1>
        <div className='links'>
<Link to="/" >Shop</Link>
<Link to="/cart"><ShoppingCart size={32}/></Link>
        </div>
    </div>
  )
}
