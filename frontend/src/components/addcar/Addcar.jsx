import { useEffect, useState } from "react";
import Bbutton from "../Bbutton";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Widget } from "@uploadcare/react-widget";
import "./Addcar.css";

const Addcar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]); // Updated to handle multiple images
  const [condition, setCondition] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const pubKey = import.meta.env.VITE_REACT_APP_UPLOADCARE_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
        body: JSON.stringify({
          make,
          model,
          year,
          description,
          price,
          condition,
          pictures: images, // Send images array
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/listing");
      } else {
        setLoading(false);
        alert("You have to log in first");
        navigate("/login");
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left Image Section */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="carwallpaper.jpg"
            alt="Car Wallpaper"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "800px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Form Section */}
        <div className="col-12 col-md-6">
          <h1 className="text-center text-danger mb-4">Add A Car</h1>
          <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
            <div className="mb-3">
              <label htmlFor="make" className="form-label">Make:</label>
              <input
                type="text"
                id="make"
                name="make"
                className="form-control"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="model" className="form-label">Model:</label>
              <input
                type="text"
                id="model"
                name="model"
                className="form-control"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="year" className="form-label">Year:</label>
              <input
                type="number"
                id="year"
                name="year"
                className="form-control"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="pictures" className="form-label">Pictures:</label>
              <Widget
                publicKey={pubKey}
                multiple={true} // Enable multiple file selection
                onChange={(fileGroupInfo) => {
                  // Update state with all selected images
                  const urls = fileGroupInfo.cdnUrl.split("~");
                  setImages(urls);
                }}
                previewStep
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description:</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="condition" className="form-label">Condition:</label>
              <select
                id="condition"
                name="condition"
                className="form-select"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option value="">Select Condition</option>
                <option value="Used">Used</option>
                <option value="New">New</option>
              </select>
            </div>

            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <Bbutton
                type="submit"
                className="btn btn-primary w-100"
                bgColor="red"
              >
                Submit
              </Bbutton>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcar;
