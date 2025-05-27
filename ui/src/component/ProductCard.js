// src/component/ProductCard.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./ProductCard.css"; // Optional CSS styling

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img
        src={`http://localhost:8080${product.imageUrl}`}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <div className="button-group">
        <button
          className="btn btn-sm btn-success"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <Link to={`/product/${product.pid}`} className="btn btn-sm btn-outline-primary ms-2">
          Quick View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
