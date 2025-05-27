import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Blog.css";

import blog1 from "../blog1.jpg"
import blog2 from "../blog2.jpg";
import blog3 from "../blog3.jpg";

class Blog extends React.Component{
  render() {
    const blogPosts = [
        { id: 1, title: "Blog Title 1", image: blog1, description: "This is a dummy blog description." },
        { id: 2, title: "Blog Title 2", image: blog2, description: "Another dummy blog description." },
        { id: 3, title: "Blog Title 3", image: blog3, description: "More dummy content." }
      ];
    return (
      <>
        <Header />
        <div className="blog-container">
          <Container className="mt-5">
            <h2 className="text-center">Our Latest Blogs</h2>
            <Row className="mt-4">
              {blogPosts.map((post) => (
                <Col md={4} key={post.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={post.image} alt={post.title} />
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        
        <Footer />
      </>
    );
  }
}

export default Blog;
