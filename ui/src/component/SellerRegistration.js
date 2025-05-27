import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import "./SellerRegistration.css";
import { useNavigate } from "react-router-dom";

class SellerRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",         
      email: "",        
      contact: "",      
      address: "",      
      city: "",         
      state: "",        
      sex: "",          
      aadhaarNo: "",    
      udidNumber: "",   
      accountNo: "",    
      ifscCode: "",     
      password: "",     
      aadhaarPdf: null, 
      udidPdf: null,    
      bankPassbookPdf: null
    };
  }

  // Handle Text Input Change
  handleChange = (event) => {
    const { name, value } = event.target;
  
    // Convert Sex field to uppercase before sending to backend
    const updatedValue = name === "sex" ? value.toUpperCase() : value;
  
    this.setState({ [name]: updatedValue });
  };
  

  // Handle File Input Change
  handleFileChange = (event) => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };

  // Handle Form Submission
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // Append only non-null values
    Object.entries(this.state).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formData.append(key, value);
      }
    });

    // Debug: Log form data before sending
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const response = await axios.post("http://localhost:8080/api/seller/register", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.status === 200 || response.status === 201) {
        //alert("Seller Registered Successfully!");
        alert("Seller Registered Successfully!");
        window.location.href = "/login-seller";
      }
    } catch (error) {
      console.error("Error Response:", error.response ? error.response.data : error.message);
      alert("Error: " + (error.response?.data?.message || JSON.stringify(error.response?.data) || error.message));
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="registration-container">
          <Container className="registration-box text-center">
            <h2>Seller Registration (For Handicapped Individuals)</h2>
            <Form onSubmit={this.handleSubmit}>

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
                <Form.Control type="number" name="contact" value={this.state.contact} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group>
                <Form.Label>Sex</Form.Label>
                <div>
                  <Form.Check inline type="radio" label="Male" name="sex" value="MALE" onChange={this.handleChange} />
                  <Form.Check inline type="radio" label="Female" name="sex" value="FEMALE" onChange={this.handleChange} />
                  <Form.Check inline type="radio" label="Not prefer to say" name="sex" value="NOT_SPECIFIED" onChange={this.handleChange} />
                </div>
              </Form.Group>

              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" value={this.state.city} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" name="state" value={this.state.state} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="aadhaarNo">
                <Form.Label>Aadhaar Card Number</Form.Label>
                <Form.Control type="text" name="aadhaarNo" value={this.state.aadhaarNo} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="udidNumber">
                <Form.Label>UDID Number</Form.Label>
                <Form.Control type="text" name="udidNumber" value={this.state.udidNumber} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="accountNo">
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control type="text" name="accountNo" value={this.state.accountNo} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="ifscCode">
                <Form.Label>Bank IFSC Code</Form.Label>
                <Form.Control type="text" name="ifscCode" value={this.state.ifscCode} onChange={this.handleChange} required />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              </Form.Group>

              {/* File Upload Fields */}
              <Form.Group controlId="aadhaarPdf">
                <Form.Label>Upload Aadhaar Card (PDF Only)</Form.Label>
                <Form.Control type="file" name="aadhaarPdf" accept="application/pdf" onChange={this.handleFileChange} required/>
              </Form.Group>

              <Form.Group controlId="udidPdf">
                <Form.Label>Upload UDID Card (PDF Only)</Form.Label>
                <Form.Control type="file" name="udidPdf" accept="application/pdf" onChange={this.handleFileChange} required/>
              </Form.Group>

              <Form.Group controlId="bankPassbookPdf">
                <Form.Label>Upload Bank Passbook (PDF Only)</Form.Label>
                <Form.Control type="file" name="bankPassbookPdf" accept="application/pdf" onChange={this.handleFileChange} required />
              </Form.Group>

              <Button variant="primary" className="mt-3 w-100" type="submit">Register</Button>
            </Form>
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

export default SellerRegistration;
