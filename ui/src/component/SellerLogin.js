// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./SellerLogin.css"; // Import the CSS file

// const SellerLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/seller/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 200) {
//         const sellerId = response.data.sellerId;
//         if (!sellerId) {
//           alert("Login successful, but seller ID missing in response.");
//           return;
//         }

//         localStorage.setItem("sellerId", sellerId);
//         alert(response.data.message || "Login successful");
//         navigate("/seller-dashboard");
//       }

//     } catch (error) {
//       console.error("Login Error:", error.response?.data || error.message);
//       setErrorMessage(error.response?.data?.error || "Invalid email or password.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Seller Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         {/* Register Redirect Link */}
//         <div className="register-link">
//           <p>
//             Don't have an account? <a href="/register" className="register-text">Register</a>
//           </p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default SellerLogin;


// =========================

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SellerLogin.css"; // Import the CSS file

const SellerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/seller/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        const sellerId = response.data.sellerId;
        if (!sellerId) {
          setSuccessMessage("Login successful, but seller ID missing.");
          return;
        }

        localStorage.setItem("sellerId", sellerId);
        setSuccessMessage(response.data.message || "Login successful ✅");

        // Redirect after delay
        setTimeout(() => {
          navigate("/seller-dashboard");
        }, 1500);
      }

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Seller Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Register link */}
        <div className="register-link mt-3">
          <p>
            Don't have an account? <a href="/register" className="register-text">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
