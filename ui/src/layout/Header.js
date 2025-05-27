// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import "./Header.css"; // Custom CSS for hover effect

// const Header = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         {/* Website Logo Placeholder */}
//         <a className="navbar-brand" href="/">
//           <img src="/images/logo.png" alt="Logo" className="logo-img" />
//         </a>
        
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
//             <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
            
//             {/* Categories Dropdown (Hover Effect) */}
//             <li className="nav-item dropdown hover-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" id="categoriesDropdown">
//                 Categories
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="/candles">Candles</a></li>
//                 <li><a className="dropdown-item" href="/bags">Handcrafted Bags</a></li>
//                 <li><a className="dropdown-item" href="/jewelry">Handcrafted Jewelry</a></li>
//                 <li><a className="dropdown-item" href="/painting">Painting</a></li>
//               </ul>
//             </li>

//             {/* Services Dropdown (Hover Effect) */}
//             <li className="nav-item dropdown hover-dropdown">
//               <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown">
//                 Services
//               </a>
//               <ul className="dropdown-menu">
//                 <li><a className="dropdown-item" href="/orders">Your Orders</a></li>
//                 <li><a className="dropdown-item" href="/wishlist">Your Wishlist</a></li>
//                 <li><a className="dropdown-item" href="/account">Account Settings</a></li>
//               </ul>
//             </li>
            
//             <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>

//             {/* Icons */}
//             <li className="nav-item">
//               <a className="nav-link" href="/cart">
//                 <FaShoppingCart size={20} />
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/profile">
//                 <FaUser size={20} />
//               </a>
//             </li>
            
//             {/* Register Button */}
//             <li className="nav-item">
//               <a className="btn btn-primary" href="/register">Register</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import "./Header.css"; // Custom CSS for hover effect

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Website Logo Placeholder */}
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            
            {/* Categories Dropdown (Hover Effect) */}
            <div className="nav-item dropdown hover-dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="categoriesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><Link className="dropdown-item" to="/category/candles">Candles</Link></li>
                <li><Link className="dropdown-item" to="/category/bags">Handcrafted Bags</Link></li>
                <li><Link className="dropdown-item" to="/category/jewelry">Handcrafted Jewelry</Link></li>
                <li><Link className="dropdown-item" to="/category/painting">Painting</Link></li>
              </ul>
            </div>

            {/* Services Dropdown (Hover Effect) */}
            <div className="nav-item dropdown hover-dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/orders">Your Orders</Link></li>
                <li><Link className="dropdown-item" to="/wishlist">Your Wishlist</Link></li>
                <li><Link className="dropdown-item" to="/account">Account Settings</Link></li>
              </ul>
            </div>
            
            <Link className="nav-link" to="/contact">Contact</Link>

            {/* Icons */}
            <div className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart size={20} />
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/profile">
                <FaUser size={20} />
              </Link>
            </div>
            
            {/* Register Button */}
            <div className="nav-item">
              <Link className="btn btn-primary" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

