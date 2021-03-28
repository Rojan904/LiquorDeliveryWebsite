import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {

  render() {
    if(localStorage.getItem('token')){
      var menu=
      <Navbar className="navbar navbar-dark bg-dark" variant="black" expand="lg">
      <Navbar.Brand href="#home" className="logo">Aila</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <li className="nav-item ">
                   <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/logout">Logout</Link>
                 </li>

                 <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addProduct">AddProduct</Link>
                </li>
       
        </Nav>
       
        
       
      </Navbar.Collapse>
    </Navbar>
    }
    else{
      var menu=
      <Navbar className="navbar navbar-dark bg-dark" expand="lg">
      <Navbar.Brand href="#home" className="logo">Aila</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <li className="nav-item ">
                   <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                 </li>
                 <li className="nav-item">
                   <Link className="nav-link" to="/login">Features</Link>
                 </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
               
       
        </Nav>
       
        
       
      </Navbar.Collapse>
    </Navbar>
    }
    return (
     

      <div>
        {menu} 
      </div>

    )
  }
}
export default Header