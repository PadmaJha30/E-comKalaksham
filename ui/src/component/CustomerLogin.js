// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "../layout/Header";
// // import Footer from "../layout/Footer";
// // import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import "./CustomerLogin.css";

// // const CustomerLogin = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);
// //     setError("");

// //     try {
// //       const response = await axios.post("http://localhost:8080/api/customers/login", {
// //         email,
// //         password,
// //       });

// //       if (response.data.token) {
// //         localStorage.setItem("token", response.data.token);
// //         localStorage.setItem("customerId", response.data.customerId); // ✅ Store customerId
// //         alert("Login Successful!");
// //         navigate("/customer-dashboard"); // ✅ Redirect using useNavigate
// //       } else {
// //         throw new Error("Invalid response from server");
// //       }
// //     } catch (error) {
// //       setError("Invalid email or password!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div className="login-container">
// //         <Container className="login-box text-center">
// //           <h2>Customer Login</h2>

// //           {error && <Alert variant="danger">{error}</Alert>} {/* ✅ Show error message */}
          
// //           <Form onSubmit={handleSubmit}>
// //             <Form.Group controlId="email">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control 
// //                 type="email" 
// //                 placeholder="Enter your email" 
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </Form.Group>
            
// //             <Form.Group controlId="password">
// //               <Form.Label>Password</Form.Label>
// //               <Form.Control 
// //                 type="password" 
// //                 placeholder="Enter your password" 
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </Form.Group>
            
// //             <Button variant="primary" className="mt-3 w-100" type="submit" disabled={loading}>
// //               {loading ? <Spinner animation="border" size="sm" /> : "Login"}
// //             </Button>
// //           </Form>

// //           <div className="mt-4 other-login-options">
// //             <h5>Other Login Options</h5>
// //             <Link to="/login-phone">
// //               <Button variant="secondary" className="w-100 mb-2">Login by Phone Number</Button>
// //             </Link>
// //             <Link to="/login-otp">
// //               <Button variant="secondary" className="w-100">Login by OTP</Button>
// //             </Link>
// //           </div>
// //         </Container>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default CustomerLogin;






// //==============================(New Code)===============================

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../layout/Header";
// import Footer from "../layout/Footer";
// import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./CustomerLogin.css";

// const CustomerLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     try {
//       const response = await axios.post("http://localhost:8080/api/customers/login", {
//         email,
//         password,
//       });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("customerId", response.data.customerId);
//         setSuccess(true);
//         setTimeout(() => {
//           navigate("/customer-dashboard");
//         }, 1000);
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       setError("Invalid email or password!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="login-container">
//         <Container className="login-box text-center">
//           <h2 className="mb-4">Customer Login</h2>

//           {error && <Alert variant="danger">{error}</Alert>}
//           {success && <Alert variant="success">Login Successful!</Alert>}

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="email" className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="password" className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control 
//                 type="password" 
//                 placeholder="Enter your password" 
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </Form.Group>

//             <Button 
//               variant="success" 
//               className="mt-2 w-100" 
//               type="submit" 
//               disabled={loading}
//             >
//               {loading ? <Spinner animation="border" size="sm" /> : "Login"}
//             </Button>
//           </Form>

//           <div className="mt-4 other-login-options">
//             <h5>Other Login Options</h5>
//             <Link to="/login-phone">
//               <Button variant="outline-secondary" className="w-100 mb-2">Login by Phone Number</Button>
//             </Link>
//             <Link to="/login-otp">
//               <Button variant="outline-secondary" className="w-100">Login by OTP</Button>
//             </Link>
//           </div>
//         </Container>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default CustomerLogin;




// // src/component/CustomerLogin.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './CustomerLogin.css'; // Assuming this matches seller login styling

// function CustomerLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/customers/login', {
//         email,
//         password
//       });

//       if (response.data.customerId) {
//         sessionStorage.setItem('customerId', response.data.customerId);
//         navigate('/customer-dashboard');
//       } else {
//         throw new Error("Invalid response from server");
//       }
//     } catch (error) {
//       setErrorMessage('Invalid email or password');
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="text-center mb-4">CUSTOMER LOGIN</h2>
//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="form-control mb-3"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="form-control mb-4"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>

//         <div className="text-center mt-4">
//           <h5>Other Login Options</h5>
//           <button className="btn btn-secondary w-100 mb-2">Login with OTP</button>
//           <button className="btn btn-secondary w-100">Forgot Password?</button>
//         </div>

//         <div className="text-center mt-3">
//           <Link to="/register">Don't have an account? Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerLogin;

// ==========





// File: CustomerLogin.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './SellerLogin.css'; // Reuse same CSS for consistent design

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/customers/login', {
        email,
        password
      });

      if (response.data.customerId) {
        sessionStorage.setItem('customerId', response.data.customerId);
        setSuccessMessage(response.data.message || 'Login successful');
        setTimeout(() => {
          navigate('/customer-dashboard');
        }, 1500);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="text-center mb-4">Customer Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-3"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control mb-4"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn w-100">Login</button>
        </form>

        <div className="register-link mt-3">
        <p>
            Don't have an account? <a href="/register" className="register-text">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;



