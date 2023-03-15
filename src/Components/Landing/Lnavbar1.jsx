import React, { useEffect } from "react";
import navIcon from "../../assets/images/landing/Group 21.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "../../Styles/landing/Navbar.css";
import { Link } from "react-router-dom";

const Lnavbar1 = ({ data }) => {
  return (
    <Navbar expand="lg" className="px-md-5 nav-wrap mb-4">
      <Container >
        <Link to='/'>
          <img className="" src={navIcon} alt="" />
        </Link>
        <Navbar.Toggle className="nn " aria-controls="basic-navbar-nav">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="lnavcon ms-auto">
            <Link to='/solution' className="text-light lnavlinks">
              Solutions
            </Link>
            <Nav.Link  className="text-light">
              Products
            </Nav.Link>
            <Link to='/about' className="text-light lnavlinks">
              About
            </Link>
            <Nav.Link href="#link" className="text-light">
              Blog
            </Nav.Link>
            <Link to='/form' className="text-light lnavlinks">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Lnavbar1;
