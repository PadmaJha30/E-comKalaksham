import React from "react";
import { useCart } from "./CartContext";
import { Card, Button } from "react-bootstrap";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./CartPage.css"; // Optional: for custom styling

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // You can later replace this with an API call to the backend /api/orders
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="row">
              {cartItems.map((item) => (
                <div className="col-md-4 mb-4" key={item.pid}>
                  <Card>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>₹{item.price}</Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.pid)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Button variant="success" size="lg" onClick={handlePlaceOrder}>
                Place Order
              </Button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
