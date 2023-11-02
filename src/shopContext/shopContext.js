import React, { useEffect, useState, createContext } from 'react';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <ShopContext.Provider value={products}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
