import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container fluid className="py-5">
      {/* Page Header */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="fw-bold text-danger">Contact Us</h1>
          <p className="text-muted">
            Got questions or need assistance? Feel free to reach out to us. We're here to help!
          </p>
        </Col>
      </Row>

      {/* Contact Form and Info */}
      <Row className="gy-4">
        {/* Contact Form */}
        <Col xs={12} md={6}>
          <h4 className="text-danger mb-3">Send Us a Message</h4>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Write your message here" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Contact Information */}
        <Col xs={12} md={6}>
          <h4 className="text-danger mb-3">Our Contact Details</h4>
          <p>
            <strong>Address:</strong> 123 CarBay Street, Victoria Island, Lagos, Nigeria
          </p>
          <p>
            <strong>Email:</strong> support@carbay.com
          </p>
          <p>
            <strong>Phone:</strong> +234 700 123 4567
          </p>
          <h5 className="text-danger mt-4">Working Hours</h5>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
