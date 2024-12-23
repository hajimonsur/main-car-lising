import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "./SignIn.css"; // New CSS file for custom styles

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  // Toggle Password Visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // Handle Form Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle Clear Fields
  const handleClear = () => setFormData({ email: "", password: "" });

  // Handle Submit
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
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
        const { authToken, user } = data;

        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
        handleClear();
        navigate("/");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container d-flex justify-content-center align-items-center">
      <div className="signin-card shadow">
        <h2 className="text-center text-danger fw-bold mb-4">Welcome Back!</h2>
        <p className="text-center text-muted mb-4">
          Sign in to explore amazing features on CarBay.
        </p>
        <Form onSubmit={handleSubmit}>
          {/* Email Field */}
          <Form.Group controlId="email" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <div className="password-field">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="toggle-password" onClick={togglePassword}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </Form.Group>

          {/* Submit Button */}
          <div className="d-grid mb-3">
            {loading ? (
              <Button variant="danger" disabled>
                <Spinner as="span" animation="border" size="sm" role="status" />
                Signing In...
              </Button>
            ) : (
              <Button type="submit" variant="danger">
                Sign In
              </Button>
            )}
          </div>

          <div className="text-center mt-3">
            <p className="text-muted">
              Don't have an account?{" "}
              <Link to="/register" className="text-danger fw-bold">
                Sign Up!
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
