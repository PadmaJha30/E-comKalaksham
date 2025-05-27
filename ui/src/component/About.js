import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css"; // Custom CSS for styling

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="about-container">
          {/* Banner Section */}
          <div className="banner">
            <img src="path-to-banner-image.jpg" alt="Banner" className="banner-image" />
          </div>
          
          {/* About Details Section */}
          <Container className="mt-5">
            <Row>
              <Col>
                <h2>About Our E-Commerce Platform</h2>
                <p>
                  Welcome to our online marketplace dedicated to supporting talented artisans and small business owners. Our platform is designed to provide a space where handmade and unique products can be showcased to a broad audience.
                </p>
                <p>
                  We believe in empowering individuals by offering them an opportunity to reach customers easily. Whether it's handcrafted jewelry, bags, candles, or paintings, our platform connects buyers with authentic, high-quality products directly from skilled artisans.
                </p>
                <p>
                  Join us in celebrating craftsmanship and supporting small businesses. Explore our collection and discover one-of-a-kind items made with passion and creativity.
                </p>
                <Button variant="primary">Explore Now</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;