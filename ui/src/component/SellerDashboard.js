// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import "./SellerDashboard.css";

// const SellerDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const sellerId = localStorage.getItem("sellerId")?.trim();

//   useEffect(() => {
//     if (!sellerId) {
//       alert("You must be logged in as a seller!");
//       navigate("/login-seller");
//       return;
//     }

//     axios.get(`http://localhost:8080/api/products/seller/${sellerId}`)
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           setProducts([]);
//         }
//       })
//       .catch(error => {
//         console.error("Error fetching products:", error);
//         setProducts([]);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [navigate, sellerId]);

//   useEffect(() => {
//     if (location.state?.newProduct) {
//       setProducts(prevProducts => [location.state.newProduct, ...prevProducts]);
//     }
//   }, [location.state]);

//   const handleAddProduct = () => {
//     navigate("/add-product");
//   };

//   return (
//     <div className="dashboard-container">
//       <h2>Seller Dashboard</h2>
//       <button className="add-product-btn" onClick={handleAddProduct}>Add New Product</button>

//       <h3>Your Products</h3>

//       {loading ? <p className="loading-text">Loading products...</p> : null}
//       {products.length === 0 && !loading ? <p className="no-products">No products found. Add some!</p> : null}

//       <div className="product-grid">
//         {products.map(product => (
//           <div className="product-card" key={product.pid}>
//             {product.image ? (
//               <img 
//                 src={`http://localhost:8080/api/products/images/${product.image}`}  
//                 alt={product.name} 
//                 className="product-image"
//               />
//             ) : (
//               <p className="no-image">No Image</p>
//             )}
//             <p className="product-name">{product.name}</p>
//             <p className="product-price">₹{product.price}</p>
//             <p className="product-category">{product.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SellerDashboard;

//=======================================((new ))======================================
// src/component/SellerDashboard.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SellerDashboard.css"; // Optional for custom CSS

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const sellerId = localStorage.getItem("sellerId");

  useEffect(() => {
    if (sellerId) {
      axios
        .get(`http://localhost:8080/products/seller/${sellerId}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching seller products:", error);
        });
    }
  }, [sellerId]);

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Seller Dashboard</h2>
      <div className="text-center mb-4">
        <button className="btn btn-outline-dark px-4" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-muted">No products found</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`data:image/jpeg;base64,${product.image}`}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="mt-auto">
                    <span className="text-primary fw-bold">₹{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
