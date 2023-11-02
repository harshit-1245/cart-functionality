import React, { useContext } from 'react';
import './Product.css';
import { ShopContext } from '../shopContext/shopContext';

const Products = () => {
  const products = useContext(ShopContext);

  return (
    <>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div className="product-box" key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      ) : (
        <div>Loading products...</div>
      )}
    </>
  );
};

export default Products;
