import PropTypes from "prop-types"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link } from "react-router-dom";

function NavigationBar() {

  const styles = {
    profile: {
      marginLeft: "30px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      border: "1px solid black",
      backgroundColor: "white"
    },
  };

  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  // handle logout
  const logout = () => {
    // remove token from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    // redirect to login page
    navigate("/login");
  }

   // handle profile click
    
   const handleProfileClick = (username) => {
    if (authToken) {
      // redirect to profile page
      navigate(`/profile/${username}`); 
    } else {
      // redirect to login page
      navigate("/login");
    }
};
  return (
    <Navbar expand="lg" bg="danger" data-bs-theme="dark">
      <Container fluid className="container">
        <Navbar.Brand href="/" className="text-white">CarBay</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/listing" className="text-white">Cars</Nav.Link>
            <Nav.Link href="/about" className="text-white">About</Nav.Link>
            <Nav.Link href="/blog" className="text-white">Blog</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
            
            
            <NavDropdown title="More" id="navbarScrollingDropdown"  className="text-white">
              <NavDropdown.Item href="/car">Add Car</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                My Favorite
              </NavDropdown.Item>
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
          <Form className="d-flex " >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             
            />
            <Button variant="dark">Search</Button>
          </Form>
          <p className="mx-3 text-warning">Hello {user?.username || " " }</p>
          {authToken ? (  <div style={styles.profile} onClick={() => handleProfileClick(user.username)}></div>) : ( <div></div>  )}
          {/* onClick={() => openCarDetails(car._id)} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default NavigationBar;