import React, { useContext, useState, useEffect } from 'react';
import './Product.css';
import { ShopContext } from '../shopContext/shopContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, cartItem } = useContext(ShopContext);

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
    <>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="product-box" key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <div>Loading products...</div>
      )}
    </>
  );
};

export default Products;
