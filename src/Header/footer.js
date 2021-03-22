import { Component } from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
class Footer extends Component{
    render(){
    return(
    <div>  
      <section style={{height: 50}}/>
    <footer id="dk-footer" className="dk-footer">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-lg-4">
        <div className="dk-footer-box-info">
          <a href="index.html" className="footer-logo">
            <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid" />
          </a>
          <p className="footer-info-text">
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
          </p>
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Social link */}
        </div>
        {/* End Footer info */}
        
      </div>
      {/* End Col */}
      <div className="col-md-12 col-lg-8">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-us">
              <div className="contact-icon">
                <i className="fa fa-map-o" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>Jaipur India</h3>
                <p>5353 Road Avenue</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
          <div className="col-md-6">
            <div className="contact-us contact-us-last">
              <div className="contact-icon">
                <i className="fa fa-volume-control-phone" aria-hidden="true" />
              </div>
              {/* End contact Icon */}
              <div className="contact-info">
                <h3>95 711 9 5353</h3>
                <p>Give us a call</p>
              </div>
              {/* End Contact Info */}
            </div>
            {/* End Contact Us */}
          </div>
          {/* End Col */}
        </div>
        {/* End Contact Row */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget footer-left-widget">
              <div className="section-heading">
                <h3>Useful Links</h3>
                <span className="animate-border border-black" />
              </div>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Faq</a>
                </li>
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
          {/* End col */}
          <div className="col-md-12 col-lg-6">
            <div className="footer-widget">
              <div className="section-heading">
                <h3>Subscribe</h3>
                <span className="animate-border border-black" />
              </div>
              <p>{/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
              <form action="#">
                <div className="form-row">
                  <div className="col dk-footer-form">
                    <input type="email" className="form-control" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fa fa-send" />
                    </button>
                  </div>
                </div>
              </form>
              {/* End form */}
            </div>
            {/* End footer widget */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Col */}
    </div>
    {/* End Widget Row */}
  </div>
  {/* End Contact Container */}
 
  {/* End Copyright */}
  {/* Back to top */}
  
  {/* End Back to top */}
</footer>

</div>


    )
}
}

export default Footer