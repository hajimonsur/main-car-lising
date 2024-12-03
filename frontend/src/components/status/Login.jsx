import Bbutton from "../Bbutton";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };

  // handle login logic to generate token
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Handle success
        const data = await response.json();
        // Extract token
        const { authToken } = data;
        // Save token to local storage
        localStorage.setItem("authToken", authToken);
        console.log(data);
        // setToken(data.token);
        // console.log(data.message); // Access the success message
           //  redirct to dashboard if login was successful
       window.location.href = "/";
       setIsLoggedIn(true);
      } else {
        // Handle error response
        // const errorData = await response.json();
        // alert(errorData.error); // Access the error message
      }
    } catch (error) {
      // console.log(error.message);
      alert(`Something went wrong: ${error}`);
    }
  };

  return (
    <div className="container mt-5" style={styles.container}>
      <h1 className="text-center"> Login</h1>
      <form action="" className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3" style={styles.container}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3" style={styles.container}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Bbutton type="submit">Login</Bbutton>
        </div>
        <p>
          Do not have an account ? <Link to="/signup" className="text-danger" id="signup">Sign Up!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
