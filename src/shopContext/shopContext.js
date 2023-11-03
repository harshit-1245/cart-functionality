import React, { useEffect, useState, createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 23; i++) {
    cart[i] = 0;
  }
  return cart;
};




const ShopContextProvider = ({ children }) => {
const [cartItem,setCartItem]=useState(getDefaultCart())
  
const addToCart=(itemId)=>{
  setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
}

const removeCart=(itemId)=>{
  setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}


  return (
    <ShopContext.Provider value={{ addToCart, removeCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
