import { useEffect, useState } from "react";
import { Spinner, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./team/AllCars.css";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cars`);
        const data = await response.json();
        setCars(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const openCarDetails = (id) => {
    navigate(`/cardetails/${id}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger">All Cars</h1>

      {loading && <Spinner animation="border" variant="danger" />}
      {error && <p className="text-center text-danger">{error}</p>}
      {!loading && cars.length === 0 && (
        <p className="text-center">No cars available at the moment.</p>
      )}

      <Row className="mt-4 g-4">
        {cars.map((car) => (
          <Col key={car._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 shadow-sm"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                variant="top"
                src={car.pictures}
                alt={`${car.make} ${car.model}`}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Card.Body
                style={{
                  flexGrow: 1, // Ensures equal height for card content
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Card.Title className="text-danger">{car.make}</Card.Title>
                  <Card.Text>
                    <strong>Model:</strong> {car.model}
                  </Card.Text>
                  <Card.Text>
                    <strong>Year:</strong> {car.year}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    {car.description.slice(0, 50)}...
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ₦{car.price.toLocaleString()}
                  </Card.Text>
                  <Card.Text>
                    <strong>Condition:</strong> {car.condition}
                  </Card.Text>
                </div>
                <Button
                  variant="danger"
                  onClick={() => openCarDetails(car._id)}
                  style={{
                    width: "100%",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#e60000")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  View Car
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllCars;
