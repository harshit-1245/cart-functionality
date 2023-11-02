import React from "react";
import "./App.css"

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Shop from "../src/pages/Shop"
import Cart from "../src/pages/Cart"
import {ShopContext} from "./shopContext/shopContext";


function App() {
  return (
    <>
    {/* //all of thins get information of shop-context */}
  
   
      <BrowserRouter>
     
     <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
     
      </>
  )
}

export default App;
