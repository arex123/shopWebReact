import React from "react";
import {Navbar,Nav, NavDropdown, Container} from 'react-bootstrap'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import { useSelector } from "react-redux";
export default function NavbarC() {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <NavLink className="navbar-brand fw-normal fs-4" to="/">E-commerce</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link"  to="/products">Products</NavLink>
        <NavLink className="nav-link"  to="/About">About</NavLink>
        <NavLink className="nav-link"  to="/Contacts">Contacts</NavLink>
      </Nav>
      <Nav className="ms-auto">
        <NavLink to='/login' className="btn btn-outline-dark ms-2">login</NavLink>
        <NavLink to='/register' className="btn btn-outline-dark ms-2">register</NavLink>
        <NavLink to='/cart' className="btn btn-outline-dark ms-2">Cart({state.length})</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
