import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4">
      <div className="container text-center">
        <div className="row">
          
          {/* About Section */}
          <div className="col-md-4">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
            </ul>
          </div>
          
          {/* Help Section */}
          <div className="col-md-4">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="/payments" className="footer-link">Payments</a></li>
              <li><a href="/shipping" className="footer-link">Shipping</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#" className="footer-icon"><FaTwitter size={24} /></a>
              <a href="#" className="footer-icon mx-3"><FaFacebook size={24} /></a>
              <a href="#" className="footer-icon"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-3">
          <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
