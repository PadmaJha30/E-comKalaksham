// // Categories.js
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const Categories = () => {
//   const { category } = useParams(); // Move inside the component
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/products/category/${category}`)
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching category products:", error);
//       });
//   }, [category]);

//   return (
//     <div>
//       <h2>{category} Products</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {products.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
//             <img
//               src={`data:image/jpeg;base64,${product.image}`}
//               alt={product.name}
//               style={{ width: "200px", height: "200px" }}
//             />
//             <h3>{product.name}</h3>
//             <p>Price: ₹{product.price}</p>
//             <p>{product.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;


//========================================

// Categories.js

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./Categories.css"; // Optional, include only if you create this CSS file

// const Categories = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/api/products/category/${category}`)
//       .then((response) => {
//         console.log("Fetched products:", response.data);
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching category products:", error);
//       });
//   }, [category]);

//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 text-capitalize text-center">{category} Products</h2>

//       {products.length === 0 ? (
//         <p className="text-center text-muted">No products found in this category.</p>
//       ) : (
//         <div className="row">
//           {products.map((product) => (
//             <div className="col-md-4 mb-4" key={product.pid}>
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={
//                     product.image?.startsWith("http") 
//                       ? product.image 
//                       : `data:image/jpeg;base64,${product.image}`
//                   }
//                   className="card-img-top"
//                   alt={product.name}
//                   style={{ height: "250px", objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text">₹{product.price}</p>
//                   <p className="card-text text-muted">
//                     {product.description || "No description"}
//                   </p>
//                   <button className="btn btn-outline-dark mt-auto">View More</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;





// Categories.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";


function Categories() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/category/${category}`)
      .then((response) => {
        console.log(`Products for category: "${category}"`, response.data);

        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching category products:", error);
      });
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{category}</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.pid}>
            <div className="card h-100 shadow-sm">
              {/* Show Product Image */}
              <img
                src={`http://localhost:8080/api/products/images/${product.imagePath}`}
                className="card-img-top"
                alt={product.name}
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />

              <div className="card-body">
                {/* <h5 className="card-title">{product.name}</h5> */}
                <Link to={`/product/${product.pid}`} className="text-decoration-none text-dark">
  <h5 className="card-title">{product.name}</h5>
</Link>

                <p className="card-text">₹{product.price}</p>
                <p className="card-text">{product.description}</p>
                <Link to={`/product/${product.pid}`} className="btn btn-outline-dark mt-auto">View More</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

