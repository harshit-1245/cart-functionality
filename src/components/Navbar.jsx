import React,{useState,useEffect} from 'react'
import './Navbar.css'
import {ShoppingCart} from "phosphor-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled,setScrolled]=useState(false)
  const handleScroll= ()=>{
  const offset=window.scrollY
  if(offset>200){
    setScrolled(true)
  }else{
  setScrolled(false)
  }
  };

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
  })


  return (
    <div className={`navbar ${scrolled ? 'sticky-header':''}`} >
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
        <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
