import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css"; // Custom CSS for styling

class Register extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="register-container">
          <Container className="text-center mt-5">
            <h2>Join Us</h2>
            <p>Choose an option to get started</p>
            <Row className="mt-4">
              <Col md={6} className="mb-3">
                <Link to="/register-seller">
                  <Button variant="primary" className="w-100">Register as Seller</Button>
                </Link>
              </Col>
              <Col md={6} className="mb-3">
                <Link to="/register-customer">
                  <Button variant="primary" className="w-100">Register as Customer</Button>
                </Link>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6} className="mb-3">
                <Link to="/login-seller">
                  <Button variant="secondary" className="w-100">Login as Seller</Button>
                </Link>
              </Col>
              <Col md={6} className="mb-3">
                <Link to="/login-customer">
                  <Button variant="secondary" className="w-100">Login as Customer</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default Register;
