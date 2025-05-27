import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroSection.css";  // Optional CSS for custom styles

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/promo-banner1.jpg" // Update with your image
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Exclusive Offer!</h3>
          <p>Get 50% off on all Handcrafted Bags. Limited time only!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/promo-banner2.jpg" // Update with your image
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Fresh Candles Collection</h3>
          <p>Explore our new range of scented candles. Perfect for any occasion!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/promo-banner3.jpg" // Update with your image
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Handcrafted Jewelry</h3>
          <p>Shop unique and beautifully crafted jewelry pieces!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
