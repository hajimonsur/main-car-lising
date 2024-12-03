import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const AllCars = () => {
  const [cars, setCars] = useState([]); // State to hold car data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the backend
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cars");
        const data = await response.json();
        setCars(data); // Update the car state with the data
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // handle click event
  const openCarDetails = (id) => {
    navigate(`/cardetails/${id}`);
  };

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    container: {
      border: "1px solid red",
      padding: "30px",
      margin: "10px",
      marginBottom: "40px",
      borderRadius: "30px",
      hover: {
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
        transform: "scale(1.05)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      active: {
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
        transform: "scale(1.05)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      transition: {
        backgroundColor: "blue",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
        transform: "scale(1.05)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },

    imgSize: {
      width: "360px",
      height: "230px",
    },
    description: {
      fontSize: "18px",
      color: "gray",
      marginTop: "10px",
      marginBottom: "10px",
    },
    buy: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      cursor: "pointer",
    },
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center text-danger">All Cars</h1>

      {loading && <Spinner animation="border" variant="danger" />}

      <div style={styles.grid}>
        {cars.map((car) => (
          <Card style={{ width: "18rem" }} className="mt-5" key={car._id}>
            <Card.Img
              variant="top"
              style={styles.imgSize}
              src={car.pictures}
              alt={`${car.make} ${car.model}`}
            />
            <Card.Body key={car._id} >
              <Card.Title>{car.make}</Card.Title>
              <Card.Text>{car.model}</Card.Text>
              <Card.Text>
                Year: {car.year}
              </Card.Text>
              <Card.Text>{car.description}</Card.Text>
              <Card.Text>
                 ₦ {car.price}
              </Card.Text >
              <Card.Text>{car.condition}</Card.Text>
              <div style={styles.buy}>
                <Button variant="danger" className="me-2" onClick={() => openCarDetails(car._id)}>
                  View Car
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
