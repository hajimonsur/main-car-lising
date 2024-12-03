import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


function Register() {
    const styles = {
        show: {
         position: "relative",
            justifyContent: "space-between",
           color: "blue",
           cursor: "pointer",
           left: "90%",
           bottom: "40px"
        }
    }
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  // handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    
  };
  console.log(formData);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  // handle clear input of fields
  const handleClear = () => {
    setFormData({ name: "", username: "", email: "", password: "" });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
   

    // send data to server
    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
     
      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        console.log(data);
        alert("Registeration successful");
        
        handleClear();
        // redirect to login page on successful signup
        navigate("/login");

        
      } else {
        setLoading(false);
        alert("Registeration failed");
      }
   } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  return (
    <div className="container my-5">
      <h1 className="mb-5 text-danger">Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Enter full name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
          <div style={styles.show}> {showPassword ? <p onClick={togglePassword} >Hide</p> : <p onClick={togglePassword}>Show</p>}
          </div>
         
        </Form.Group>
      
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button variant="danger" type="submit">
          Register
        </Button>

        ) }
        <p  className="text-muted mt-4">
          Already have an account ? <Link to="/login" className="text-danger" id="login">Sign In!</Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
