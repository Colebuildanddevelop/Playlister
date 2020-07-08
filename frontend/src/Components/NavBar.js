import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Playlister App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/discover">
              Discover
            </Nav.Link>
            <Nav.Link as={Link} to="/my-library">
              My Library
            </Nav.Link>
            <Nav.Link as={Link} to="/playlists">
              Playlists
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {!this.props.loggedIn ? (
              <Button as={Link} to="/log-in">
                SignUp/Login
              </Button>
            ) : (
              <Button
                as={Link}
                to="/log-in"
                variant="danger"
                onClick={this.props.logout}
              >
                Log Out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
