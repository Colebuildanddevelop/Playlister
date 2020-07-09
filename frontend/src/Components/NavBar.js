import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand style={{ color: "white" }} as={Link} to="/">
          Playlister App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "white" }} as={Link} to="/">
              Categories
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/discover">
              Discover
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/my-library">
              My Library
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} as={Link} to="/playlists">
              Playlists
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {!this.props.loggedIn ? (
              <Button as={Link} to="/log-in" className="edit-btn">
                SignUp/Login
              </Button>
            ) : (
              <Button
                as={Link}
                to="/log-in"
                className="delete-btn"
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
