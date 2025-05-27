import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./CustomerRegistration.css";
import { useNavigate } from "react-router-dom";


class CustomerRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact: "",
      address: "",
      sex:"",
      city: "",
      state: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Creating object to send to backend
    const customerData = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      address: this.state.address,
      sex:this.state.sex,
      city: this.state.city,
      state: this.state.state,
      password: this.state.password
    };

  //   try {
  //     const response = await fetch("http://localhost:8080/api/customers/register", {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(customerData)
  //     });
  //     if (response.ok) {
  //         const data = await response.json();
  //         console.log("Customer registered successfully:", data);
  //     } else {
  //         console.error("Failed to register customer:", response.statusText);
  //     }
  // } catch (error) {
  //     console.error("Error registering customer:", error);
  // }
  
  // };

   try {
      const response = await axios.post("http://localhost:8080/api/customers/register", customerData);

      if (response.status === 201 || response.status === 200) {
        //alert("Customer Registered Successfully!"); 
        alert("Customer Registered Successfully!");
        window.location.href = "/login-customer";
      }

    } catch (error) {
      console.error("Error registering customer:", error);

      if (error.response && error.response.status === 409) {
        alert(error.response.data);  
      } else {
        alert("Registration failed! Please try again.");
      }
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="registration-container">
          <Container className="registration-box text-center">
            <h2>Customer Registration</h2>
            <form onSubmit={this.handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" name="contact" value={this.state.contact} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="sex">
                <Form.Label>Sex</Form.Label>
                <Form.Control type="text" name="sex" value={this.state.sex} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={this.state.city} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" value={this.state.state} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
              </Form.Group>

              <Button variant="primary" className="mt-3 w-100" type="submit">Register</Button>
            </form>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default CustomerRegistration;
