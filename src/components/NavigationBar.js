import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar className="bg-dark" fixed="top" expand="lg">
    <Navbar.Brand href="/">WIF</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="navbar-dark" id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">HOME</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/#about">ABOUT</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/#skills">SKILLS</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/#portfolio">PORTFOLIO</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/contact">CONTACT</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
