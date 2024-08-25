import React, { useState, useRef } from 'react';
import './products.css'; 
import { PRODUCTS } from '../products'; 

const categories = ['T Shirt', 'Hoodie', 'Mug', 'Cap', 'Pen'];

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsRef = useRef(null); 

  const handleCategoryClick = (category) => {
    const filtered = PRODUCTS.filter(product => product.productName === category);
    setFilteredProducts(filtered);

   
    setTimeout(() => {
      if (productsRef.current) {
        productsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); 
  };

  return (
    <div className="products-page">
      <div className="products-container">
        {categories.map((category, index) => (
          <button key={index} className="product-button" onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      
     
      {filteredProducts.length > 0 && (
        <div className="filtered-products" ref={productsRef}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.productImage} alt={product.productName} className="product-image" />
              <h2>{product.productName}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
