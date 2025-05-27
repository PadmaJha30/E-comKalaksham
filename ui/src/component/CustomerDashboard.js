// src/component/CustomerDashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CustomerDashboard() {
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const customerId = sessionStorage.getItem('customerId');
    if (!customerId) {
      navigate('/login-customer');
      return;
    }

    axios.get(`http://localhost:8080/api/customers/${customerId}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
        navigate('/login-customer');
      });
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.clear(); // Remove all session data
    navigate('/login-customer'); // Redirect to login page
    //setTimeout(() => navigate('/customer-login'), 100);
  };

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2><strong>WELCOME, {customer.name.toUpperCase()}!</strong></h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>
      <div className="card shadow-sm p-4">
        <p><strong>Email:</strong> {customer.email}</p>
        <p><strong>Contact:</strong> {customer.contact}</p>
        <p><strong>Address:</strong> {customer.address}</p>
        <p><strong>City:</strong> {customer.city}</p>
        <p><strong>State:</strong> {customer.state}</p>
        <p><strong>Sex:</strong> {customer.sex}</p>
      </div>
    </div>
  );
}

export default CustomerDashboard;
