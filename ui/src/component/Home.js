
// src/component/Home.js
import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useCart } from "./CartContext"; // ✅ Correct import
import "./Home.css";



const Home = () => {
  
  const bannerImages = [
    
    { id: 1, imageUrl: "/images/banner1.jpg", caption: "Handmade Candles - Light up your life" },
    { id: 2, imageUrl: "/images/banner2.jpg", caption: "Exclusive Traditional Paintings" },
    { id: 3, imageUrl: "/images/banner3.jpg", caption: "Stylish Handmade Bags - Carry Tradition" }
  ];

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  // const { addToCart } = useContext(CartContext); // 
   const { addToCart } = useCart();

  useEffect(() => {
    axios.get("http://localhost:8080/api/products")
      .then(response => {
        const sorted = response.data.sort((a, b) => b.pid - a.pid); // Newest first
        const featured = response.data.slice(0, 12); //  Limit to 12
        setProducts(featured);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        {/* Hero Banner */}
        <Carousel className="home-banner mb-5">
          {bannerImages.map(banner => (
            <Carousel.Item key={banner.id}>
              <img className="d-block w-100 banner-image" src={banner.imageUrl} alt="Banner" />
              <Carousel.Caption className="banner-caption">
                <h3>{banner.caption}</h3>
                <Link to="/blogs">
                  <Button variant="light">Explore More</Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Featured Products */}
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="product-grid">
          {products.map(product => {
            const isWishlisted = wishlist.includes(product.pid);
            return (
              <div className="product-card" key={product.pid}>
                <Card>
                  <Card.Img variant="top" src={product.imageUrl} alt={product.name} className="product-image" />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
                    <p>Category: {product.category}</p>
                    <div className="wishlist" onClick={() => toggleWishlist(product.pid)}>
                      {isWishlisted ? (
                        <FaHeart size={22} className="wishlist-icon" color="#dc3545" />
                      ) : (
                        <FaRegHeart size={22} className="wishlist-icon" />
                      )}
                    </div>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
