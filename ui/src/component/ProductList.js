// import React from "react";
// import "./ProductList.css"; 

// const ProductList = ({ products }) => {
//   return (
//     <div className="product-grid">
//       {products.map(product => (
//         <div key={product.pid} className="product-card">
//           <img 
//             //src={product.imageUrl} 
//             src={`http://localhost:8080${product.imageUrl}`} 
//             alt={product.name} 
//             className="product-image"
//           />
//           <h3>{product.name}</h3>
//           <p>₹{product.price}</p>
//           <p>{product.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


// src/component/ProductList.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.pid} className="product-card">
          <img
            src={`http://localhost:8080${product.imageUrl}`}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p className="text-muted">{product.category}</p>

          <div className="product-buttons">
            <button
              className="btn btn-sm btn-primary me-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/product/${product.pid}`} className="btn btn-sm btn-outline-secondary">
              Quick View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;







