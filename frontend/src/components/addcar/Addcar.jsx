import { useEffect, useState } from "react";
import Bbutton from "../Bbutton";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Widget } from '@uploadcare/react-widget';
import "./Addcar.css";

const Addcar = () => {
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
    },
    btn: {
      width: "100px ",
      height: "50px",
    },
    container: {
      width: "400px",
      margin: "auto",
    },
    formCard: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    desinput: {
      width: "120%",
      height: "100px",
      padding: "12px 20px",
      margin: "8px 15px",
      display: "inline-block",
      border: "3px solid #ccc",
      borderRadius: "10px",
      boxSizing: "border-box",
    },

    bgname: {
display: "grid",
gridTemplateColumns: "repeat(2, 1fr)",
 justifyContent: "center",
 alignItems: "center",
    },
    inputs: {
      width: "120%",
      padding: "12px 20px",
      margin: "8px 15px",
      display: "inline-block",
      border: "2px solid #ccc",
      borderRadius: "10px",
      boxSizing: "border-box",
    },
  };

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [condition, setCondition] = useState("");

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const pubKey = import.meta.env.VITE_REACT_APP_UPLOADCARE_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // reset form fields
    setMake("");
    setModel("");
    setYear("");
    setDescription("");
    setPrice("");
    setCondition("");
    setImage("");

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
          pictures: image, // Use the image URL here
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/listing");
      } else {
        setLoading(false);
        alert("You have to login first");
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
   <div style={styles.bgname} className="container mt-5">
    <div style={styles.leftbg}>
      <img src="carwallpaper.jpg" alt="" 
      style={{ width: "100%", height: "90%", objectFit: "cover", borderRadius: "50px", }}/>
    </div>
    <div style={styles.container} >
      <h1 className="text-center">Add A Car</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formCard}>
          <label htmlFor="make"> Make:</label>
          <input
            style={styles.inputs}
            type="text"
            name="make"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="model">Model:</label>
          <input
          style={styles.inputs}
            type="text"
            name="model"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="year">Year:</label>
          <input
          style={styles.inputs}
            type="number"
            name="year"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="pictures">Pictures</label>
          {/* Uploadcare Widget for Image Upload */}
          <Widget
            publicKey={pubKey}  // Replace with your Uploadcare public key
            // multiple={true}
            
            onChange={(fileInfo) => {
              setImage(fileInfo.cdnUrl); // Set the CDN URL to state
              
            }}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="description">Description</label>
          <input
            style={styles.desinput}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="price"> Price: </label>
          <input
          style={styles.inputs}
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div style={styles.formCard}>
          <label htmlFor="condition">Condition:</label>
          <select
          style={styles.inputs}
            name="condition"
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="">Select Condition</option>
            <option value="Used">Used</option>
            <option value="New">New</option>
          </select>
        </div>
        
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Bbutton
            style={styles.btn}
            type="submit"
            className="d-flex justify-content-center align-items-center"
            bgColor="red"
          >
            Submit
          </Bbutton>
        )}
      </form>
    </div>
   </div>
  );
};

export default Addcar;
