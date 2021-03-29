import { Component } from "react";
import HeroSection from "./HeroComponent/HeroSection";
import './aila.css'


class Home extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <section className="ftco-section ftco-no-pb">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 img img-3 d-flex justify-content-center align-items-center image" style={{ backgroundImage: 'url(images/about.jpg)' }}>
              </div>
              <div className="col-md-5 wrap-about pl-md-5 ftco-animate py-5 para">
                <div className="heading-section">
                  <span className="subheading">Since 1905</span>
                  <h2 className="mb-4">Desire Meets A New Taste</h2>
                  <p style={{ color: "black" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
          <div className="container-liquor">
            <div className="row">
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-1.jpg)' }} />
                  <h3>Brandy</h3>
                </div>
              </div>
              <div className="col-lg-2 ">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-2.jpg)' }} />
                  <h3>Gin</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-3.jpg)' }} />
                  <h3>Rum</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-4.jpg)' }} />
                  <h3>Tequila</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-5.jpg)' }} />
                  <h3>Vodka</h3>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sort w-100 text-center ftco-animate">
                  <div className="img" style={{ backgroundImage: 'url(images/kind-6.jpg)' }} />
                  <h3>Whiskey</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container-liquor">
            <div className="row justify-content-center pb-5">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <span className="subheading">Our Delightful offerings</span>
                <h2>Tastefully Yours</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-1.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="sale">Sale</span>
                    <span className="category">Brandy</span>
                    <h2>Bacardi 151</h2>
                    <p className="mb-0"><span className="price price-sale">$69.00</span> <span className="price">$49.00</span></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-2.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="seller">Best Seller</span>
                    <span className="category">Gin</span>
                    <h2>Jim Beam Kentucky Straight</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-3.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="new">New Arrival</span>
                    <span className="category">Rum</span>
                    <h2>Citadelle</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-4.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="category">Rum</span>
                    <h2>The Glenlivet</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-5.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="category">Whiskey</span>
                    <h2>Black Label</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-6.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="category">Tequila</span>
                    <h2>Macallan</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/prod-7.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="category">Vodka</span>
                    <h2>Old Monk</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
                <div className="product ftco-animate">
                  <div className="img d-flex align-items-center justify-content-center imgs" style={{ backgroundImage: 'url(images/prod-8.jpg)' }}>
                    <div className="desc">
                      <p className="meta-prod d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-shopping-bag" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-heart" /></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="flaticon-visibility" /></a>
                      </p>
                    </div>
                  </div>
                  <div className="text text-center">
                    <span className="category">Whiskey</span>
                    <h2>Jameson Irish Whiskey</h2>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <a href="product.html" className="btn btn-primary d-block">View All Products <span className="fa fa-long-arrow-right" /></a>
              </div>
            </div>
          </div>
        </section>


      </div>



    )
  }
}
export default Home