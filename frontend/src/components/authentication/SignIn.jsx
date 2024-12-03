import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function SignIn() {
  const styles = {
    show: {
      position: "relative",
      justifyContent: "space-between",
      color: "red",
      cursor: "pointer",
      left: "90%",
      bottom: "55px",
    },
  };
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;


  // handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // handle clear input of fields
  const handleClear = () => {
    setFormData({ email: "", password: "" });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    // send data to server
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
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
        // Extract token
        const { authToken, user } = data;
        // Save token to local storage
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful");

        handleClear();
        // redirect to login page on successful signup
          navigate("/listing");
      } else {
        setLoading(false);
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className="container my-5">
      <h1 className="mb-5 text-danger">Sign In</h1>
      <Form onSubmit={handleSubmit}>
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
            type={showPassword ? "text" : "password" }
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <div style={styles.show}>
          {showPassword ? (
            <p onClick={togglePassword}>Hide</p>
          ) : (
            <p onClick={togglePassword}>Show</p>
          )}
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          <Button variant="danger" type="submit">
          Sign In
        </Button>

        ) }
       
      
        <p  className="text-muted mt-4">
          Do not have an account ? <Link to="/register" className="text-danger" id="signup">Sign Up!</Link>
        </p>
      </Form>
    </div>
  );
}


export default SignIn;
