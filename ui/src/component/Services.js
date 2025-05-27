import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <>
      <Header />
      <div className="services-container">
        <Container className="text-center mt-5">
          <h2>Our Services</h2>
          <p>Explore the various services we offer to enhance your experience.</p>
          <Row className="mt-4">
            <Col md={4} className="mb-3">
              <Link to="/orders">
                <Button variant="primary" className="w-100">Your Orders</Button>
              </Link>
            </Col>
            <Col md={4} className="mb-3">
              <Link to="/wishlist">
                <Button variant="primary" className="w-100">Your Wishlist</Button>
              </Link>
            </Col>
            <Col md={4} className="mb-3">
              <Link to="/account">
                <Button variant="primary" className="w-100">Account Settings</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Services;
