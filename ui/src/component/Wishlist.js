import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import "./Wishlist.css";

const Wishlist = ({ wishlist, toggleWishlist }) => {
  const ratings = [3.5, 4, 4.5];

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="wishlist-heading">Your Wish, Our Responsibility... Order Now to Make Your Wish Come True!</h2>
        <div className="row mt-4">
          {wishlist.length > 0 ? (
            wishlist.map((productId, index) => {
              const randomRating = ratings[index % ratings.length];
              return (
                <div className="col-md-3 mb-4" key={productId}>
                  <Card>
                    <Card.Img variant="top" src={`path-to-product-image${productId}.jpg`} />
                    <Card.Body>
                      <Card.Title>Product {productId}</Card.Title>
                      <Card.Text>Price: ₹{productId * 100}</Card.Text>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < randomRating ? "#ffc107" : "#e4e5e9"} />
                        ))}
                        <span> ({randomRating})</span>
                      </div>
                      <div className="wishlist" onClick={() => toggleWishlist(productId)}>
                        <FaHeart size={22} className="wishlist-icon" color="#dc3545" />
                      </div>
                      <Link to={`/product/${productId}`}>
                        <Button variant="primary">Add to Cart</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          ) : (
            <p className="text-center mt-5">No items in your wishlist yet. Start adding your favorites!</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
