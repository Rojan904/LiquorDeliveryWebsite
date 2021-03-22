import React, { Component } from 'react'
import { Link } from 'react-router-dom'




import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

class Header extends Component {
  state = {
    bg: "transparent",

  };

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ bg: "dark", });
    } else {
      this.setState({ bg: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <Link className="navbar-brand" to="#">Navbar</Link>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon" />
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav">
      //       <li className="nav-item active">
      //         <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/loginsignup">Features</Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/login">Login</Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/register">Register</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>



      <div>
        {/* <Navbar bg={this.state.bg} fixed="top" variant="black" expand="lg">
  <Navbar.Brand href="#home" className="logo">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <li className="nav-item active">
               <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
             </li>
             <li className="nav-item">
               <Link className="nav-link" to="/loginsignup">Features</Link>
             </li>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
    
   
  </Navbar.Collapse>
</Navbar> */}

        <nav bg={this.state.bg} className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">Liquor <span>store</span></a>
            <div className="order-lg-last btn-group">
              <a href="#" className="btn-cart dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="flaticon-shopping-bag" />
                <div className="d-flex justify-content-center align-items-center"><small>3</small></div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-item d-flex align-items-start" href="#">
                  <div className="img" style={{ backgroundImage: 'url(images/prod-1.jpg)' }} />
                  <div className="text pl-3">
                    <h4>Bacardi 151</h4>
                    <p className="mb-0"><a href="#" className="price">$25.99</a><span className="quantity ml-3">Quantity: 01</span></p>
                  </div>
                </div>
                <div className="dropdown-item d-flex align-items-start" href="#">
                  <div className="img" style={{ backgroundImage: 'url(images/prod-2.jpg)' }} />
                  <div className="text pl-3">
                    <h4>Jim Beam Kentucky Straight</h4>
                    <p className="mb-0"><a href="#" className="price">$30.89</a><span className="quantity ml-3">Quantity: 02</span></p>
                  </div>
                </div>
                <div className="dropdown-item d-flex align-items-start" href="#">
                  <div className="img" style={{ backgroundImage: 'url(images/prod-3.jpg)' }} />
                  <div className="text pl-3">
                    <h4>Citadelle</h4>
                    <p className="mb-0"><a href="#" className="price">$22.50</a><span className="quantity ml-3">Quantity: 01</span></p>
                  </div>
                </div>
                <a className="dropdown-item text-center btn-link d-block w-100" href="cart.html">
                  View All
          <span className="ion-ios-arrow-round-forward" />
                </a>
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
    </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="product.html">Products</a>
                    <a className="dropdown-item" href="product-single.html">Single Product</a>
                    <a className="dropdown-item" href="cart.html">Cart</a>
                    <a className="dropdown-item" href="checkout.html">Checkout</a>

                  </div>
                </li>
                <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addProduct">AddProduct</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </div>

    )
  }
}
export default Header