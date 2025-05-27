// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetail = () => {
//   const { pid } = useParams(); // ✅ Get product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (pid) {
//       axios
//         .get(`http://localhost:8080/api/products/${pid}`)
//         .then((response) => {
//           setProduct(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching product details:", error);
//         });
//     }
//   }, [pid]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">{product.name}</h2>
//       <img
//         src={`http://localhost:8080${product.imagePath}`}
//         alt={product.name}
//         className="img-fluid mb-3"
//         style={{ maxHeight: "400px", objectFit: "cover" }}
//       />
//       <h4>Price: ₹{product.price}</h4>
//       <p>Description: {product.description}</p>
//       <p>Category: {product.category}</p>
//     </div>
//   );
// };

// export default ProductDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ProductDetail() {
//   const { pid } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (pid) {
//       axios
//         .get(`http://localhost:8080/api/products/${pid}`)
//         .then((response) => {
//           setProduct(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching product details:", error);
//           setLoading(false); // Make sure to stop loading even on error
//         });
//     }
//   }, [pid]);

//   if (loading) {
//     return <div className="text-center mt-5">Loading product details...</div>;
//   }

//   if (!product) {
//     return <div className="text-center text-danger mt-5">Product not found.</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={`http://localhost:8080${product.imagePath}`}
//             alt={product.name}
//             className="img-fluid rounded shadow"
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 className="mb-3">{product.name}</h2>
//           <h4 className="text-success">₹{product.price}</h4>
//           <p className="mt-3">{product.description}</p>
//           <p className="text-muted">Category: {product.category}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ProductDetail() {
//   const { pid } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (pid) {
//       axios
//         .get(`http://localhost:8080/api/products/${pid}`)
//         .then((response) => {
//           console.log("Product fetched:", response.data); // Debug log
//           setProduct(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching product details:", error);
//           setError("Failed to load product details.");
//           setLoading(false);
//         });
//     }
//   }, [pid]);

//   if (loading) {
//     return <div className="text-center mt-5">Loading product details...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-danger mt-5">{error}</div>;
//   }

//   if (!product) {
//     return <div className="text-center text-danger mt-5">Product not found.</div>;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 text-center">
//           <img
//             src={`http://localhost:8080${product.imagePath}`}
//             alt={product.name}
//             className="img-fluid rounded shadow"
//             style={{ maxHeight: '400px' }}
//             onError={(e) => { e.target.src = '/placeholder.jpg'; }} // fallback image
//           />
//         </div>
//         <div className="col-md-6">
//           <h2 className="mb-3">{product.name}</h2>
//           <h4 className="text-success">₹{product.price}</h4>
//           <p className="mt-3">{product.description}</p>
//           <p className="text-muted">Category: {product.category}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;




// File: ProductDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pid) {
      axios
        .get(`http://localhost:8080/api/products/${pid}`)
        .then((response) => {
          console.log("Product fetched:", response.data); // Debug log
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setError("Failed to load product details.");
          setLoading(false);
        });
    }
  }, [pid]);

  if (loading) {
    return <div className="text-center mt-5">Loading product details...</div>;
  }

  if (error) {
    return <div className="text-center text-danger mt-5">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-danger mt-5">Product not found.</div>;
  }

  // Dynamic placeholder text using product name
  const placeholderURL = `https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}`;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            //src={`http://localhost:8080/api/products/images/${product.imageUrl}`}
            src={`http://localhost:8080${product.imageUrl}`}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/fallback-image.jpg';
            }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">{product.name}</h2>
          <h4 className="text-success">₹{product.price}</h4>
          <p className="mt-3">{product.description}</p>
          <p className="text-muted">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

