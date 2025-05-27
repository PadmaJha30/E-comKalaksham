import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(""); // dropdown
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Image too large (max 5MB)");
      return;
    }
    setImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sellerId = localStorage.getItem("sellerId");
    if (!sellerId) {
      alert("Seller ID not found. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("image", image);
    formData.append("sellerId", sellerId);

    try {
      const response = await axios.post("http://localhost:8080/api/products/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert("Product added!");
        navigate(`/products/category/${category.toLowerCase()}`); // Redirect to category route
      } else {
        throw new Error("Failed to add product");
      }

    } catch (err) {
      console.error("Product submission error:", err.response?.data || err.message);
      alert("Error adding product: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">-- Select Category --</option>
            <option value="candles">Candles</option>
            <option value="handcrafted-bags">Handcrafted Bags</option>
            <option value="handcrafted-jewelry">Handcrafted Jewelry</option>
            <option value="paintings">Paintings</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="btn btn-dark w-100 fw-bold d-flex align-items-center justify-content-center gap-2">
          ADD PRODUCT <i className="bi bi-send-fill"></i>
        </button>
      </form>
    </div>
  );
};

export default AddProduct;






