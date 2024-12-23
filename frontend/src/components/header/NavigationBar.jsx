import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const styles = {
    profile: {
      marginLeft: "30px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "2px solid white",
      backgroundColor: "white",
      cursor: "pointer", // Indicates it's clickable
    },
  };

  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle logout
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Handle profile click
  const handleProfileClick = (username) => {
    if (authToken) {
      navigate(`/profile/${username}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <Navbar expand="lg" bg="danger" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="text-white fw-bold">
          CarBay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/listing" className="text-white">
              Cars
            </Nav.Link>
            <Nav.Link href="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="/blog" className="text-white">
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>

            <NavDropdown
              title={<span className="text-white">More</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/car">Add Car</NavDropdown.Item>
              <NavDropdown.Item href="#action4">My Favorite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              {authToken ? (
                <NavDropdown.Item href="#" onClick={logout}>
                  Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" className="text-danger fw-bold">
              Search
            </Button>
          </Form>

          {/* Username Display */}
          <p className="mx-3 text-warning fw-bold mb-0">
            Hello {user?.username || "Guest"}
          </p>

          {/* Profile Picture */}
          {authToken ? (
            <div
              style={styles.profile}
              onClick={() => handleProfileClick(user?.username || "Guest")}
            />
          ) : (
            <div />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
