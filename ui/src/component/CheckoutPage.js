// // src/component/CheckoutPage.js

// import React, { useContext, useState } from "react";
// //import { CartContext } from "./CartContext";
// // import { useCart } from './CartContext';  
// import { CartContext } from "./CartContext";
// import { useNavigate } from "react-router-dom";

// const CheckoutPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   const handlePlaceOrder = () => {
//     const order = {
//       items: cartItems,
//       shippingAddress: address,
//       customerId: 1, // Replace with actual logged-in customer ID
//     };

//     fetch("http://localhost:8080/api/orders/place", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         clearCart();
//         alert("Order placed successfully!");
//         navigate("/customer-dashboard");
//       })
//       .catch((err) => {
//         console.error("Order failed:", err);
//         alert("Failed to place order.");
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Checkout</h2>
//       <div className="mb-3">
//         <label htmlFor="address" className="form-label">
//           Shipping Address
//         </label>
//         <textarea
//           id="address"
//           className="form-control"
//           rows="3"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <h4>Order Summary</h4>
//       <ul className="list-group mb-3">
//         {cartItems.map((item) => (
//           <li key={item.pid} className="list-group-item d-flex justify-content-between">
//             <span>{item.name} x 1</span>
//             <strong>₹{item.price}</strong>
//           </li>
//         ))}
//       </ul>
//       <button className="btn btn-success" onClick={handlePlaceOrder}>
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;




import React from 'react';
import { useCart } from './CartContext';  // ✅ Correct import

const CheckoutPage = () => {
    const { cartItems } = useCart();  // ✅ Correct usage

    return (
        <div>
            <h2>Checkout Page</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.product.name} - Quantity: {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CheckoutPage;

