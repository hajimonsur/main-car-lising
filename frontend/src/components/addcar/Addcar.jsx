import { useEffect, useState } from "react";
import Bbutton from "../Bbutton";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


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
      width: "80%",
      height: "100px",
      padding: "12px 20px",
      margin: "8px 15px",
      display: "inline-block",
      border: "2px solid #ccc",
      borderRadius: "4px",
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

    // update the backend
   
      try {
        const response = await fetch("http://localhost:5000/api/cars", {
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
            pictures: image,
          }),
        })
        const data = await response.json();
        console.log(data);
        // redirect to all cars page if response is ok
        if (response.ok) {
          navigate("/listing");
        } else {
          setLoading(false);
          alert("you have to login first");
          navigate("/login");

         

        }
       
      }  catch(error) {
        console.log(error.message);
        setLoading(false);
      };  
  };

  return (
    <div style={styles.container} className="container mt-5">
      <h1 className="text-center">Add A Car</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formCard}>
          <label htmlFor="make"> Make:</label>
          <input
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
            type="number"
            name="year"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div style={styles.formCard}>
          <label htmlFor="pictures">Pictures</label>
          <input
            type="text"
            name="pictures"
            id="pictures"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            type="boolean"
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

        ) }
       
      </form>
    </div>
  );
};

export default Addcar;
