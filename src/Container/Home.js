import { Component } from "react";
import HeroSection from "./HeroComponent/HeroSection";
import './aila.css'
class Home extends Component{
    render(){
        return(
            <div>
            <HeroSection/>
  <section className="ftco-section ftco-no-pb">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-5 img img-3 d-flex justify-content-center align-items-center image" style={{backgroundImage: 'url(images/about.jpg)'}}>
      </div>
      <div className="col-md-5 wrap-about pl-md-5 ftco-animate py-5 para">
        <div className="heading-section">
          <span className="subheading">Since 1905</span>
          <h2 className="mb-4">Desire Meets A New Taste</h2>
          <p style={{color:"black"}}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
          <p className="year">
            <strong className="number" data-number={115}>0</strong>
            <span>Years of Experience In Business</span>
          </p>
        </div>
      </div>
       <div className="col-md-1"></div>
    </div>
  </div>
</section>

<section className="ftco-section ftco-no-pb">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-1.jpg)'}} />
          <h3>Brandy</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-2.jpg)'}} />
          <h3>Gin</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-3.jpg)'}} />
          <h3>Rum</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-4.jpg)'}} />
          <h3>Tequila</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-5.jpg)'}} />
          <h3>Vodka</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 ">
        <div className="sort w-100 text-center ftco-animate">
          <div className="img" style={{backgroundImage: 'url(images/kind-6.jpg)'}} />
          <h3>Whiskey</h3>
        </div>
      </div>
    </div>
  </div>
</section>


            </div>
            

            
        )
    }
}
export default Home