import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Cars to Watch Out for in 2024",
      image: "/public/Mercedes-Benz.jpg",
      description:
        "Explore the most anticipated cars of 2024, featuring innovative designs, cutting-edge technology, and impressive performance.",
      date: "December 20, 2024",
      author: "Jane Doe",
    },
    {
      id: 2,
      title: "Electric Cars: Revolutionizing the Auto Industry",
      image: "/public/Electric_Car.jpg",
      description:
        "How electric vehicles are transforming the automobile industry and what this means for the future of transportation.",
      date: "December 18, 2024",
      author: "John Smith",
    },
    {
      id: 3,
      title: "5 Tips for First-Time Car Buyers",
      image: "/public/Porsche.jpg",
      description:
        "A comprehensive guide for first-time car buyers to make informed decisions and avoid common pitfalls.",
      date: "December 15, 2024",
      author: "Sarah Johnson",
    },
  ];

  return (
    <Container fluid className="py-5">
      {/* Page Header */}
      <Row className="mb-4">
        <Col className="text-center">
          <h1 className="fw-bold text-danger">CarBay Blog</h1>
          <p className="text-muted">
            Stay updated with the latest trends, tips, and news in the world of automobiles.
          </p>
        </Col>
      </Row>

      {/* Search Bar */}
      <Row className="mb-5 justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for blog posts"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Col>
      </Row>

      {/* Blog Posts */}
      <Row>
        {blogPosts.map((post) => (
          <Col xs={12} md={6} lg={4} className="mb-4" key={post.id}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={post.image}
                alt={post.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-danger fw-bold">{post.title}</Card.Title>
                <Card.Text className="text-muted small">
                  By {post.author} | {post.date}
                </Card.Text>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="outline-danger" href={`/blog/${post.id}`}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
