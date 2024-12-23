import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import "./CarDetails.css";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/cars/${id}`);
        const data = await response.json();
        setCar(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  return (
    <div className="container my-5">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <div className="row g-4">
          {/* Image Carousel */}
          <div className="col-12 col-md-6">
            {car?.pictures?.length > 0 ? (
              <Carousel>
                {car.pictures.map((picture, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={picture}
                      alt={`Slide ${index + 1}`}
                      className="img-fluid rounded shadow"
                      style={{
                        maxHeight: "400px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img
                src="/default-car-image.jpg" // Fallback image
                alt="Default Car"
                className="img-fluid rounded shadow"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
            )}
          </div>

          {/* Car Details */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
            <div>
              <h1>{car?.model || "Unknown Model"}</h1>
              <p>
                <strong>Make:</strong> {car?.make || "N/A"}
              </p>
              <p>
                <strong>Condition:</strong> {car?.condition || "N/A"}
              </p>
              <p>
                <strong>Mileage:</strong> {car?.mileage?.toLocaleString() || "N/A"} miles
              </p>
              <p className="text-muted">{car?.description || "No description provided."}</p>
              <p>
                <strong>Posted By:</strong> {car?.postedBy || "Unknown"}
              </p>
            </div>

            {/* Price and Contact */}
            <div className="mt-4">
              <p className="h4 ">
                ₦ {car?.price?.toLocaleString() || "0"}
              </p>
              <button
                className="btn btn-danger btn-lg w-100 mt-3"
                onClick={() => alert("Contact Seller functionality coming soon!")}
              >
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
