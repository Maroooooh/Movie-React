import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/* <Link to ="/">Home </Link>
          <Link to="/products"> Products</Link>
          <Link to ="/contact">Contact US</Link>
          <Link to = "/about"> About Us</Link> */}
          <NavLink  style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to ="/"  className="nav-link me-3">Home </NavLink>
          <NavLink style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to="/products" className="nav-link me-3"> Movies </NavLink>
          <NavLink  style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to ="/contact" className="nav-link me-3">Contact US</NavLink>
          <NavLink  style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to = "/about" className="nav-link me-3"> About Us</NavLink>
          <NavLink  style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to = "/login"className="nav-link me-3"> Log in </NavLink>
          <NavLink  style = {({isActive}) =>{
             return (isActive) ? {color: "red" } : {color : "blue"}
          }}to = "/register" className="nav-link me-3"> Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
};

export default Header;
