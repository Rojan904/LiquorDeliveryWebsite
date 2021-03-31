import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';
import './aila.css'
class Product extends Component {
    state = {
        products: []
    }
    componentDidMount() {   //page load hudei run hune function
        axios.get("http://localhost:90/aila/all")
            .then((allAila) => {
                console.log(allAila)
                this.setState({
                    products: allAila.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            }
            )
    }

    deleteAila = (ailaId) => {
        axios.delete('http://localhost:90/aila/delete/' + ailaId)
            .then((message) => {
                console.log(message)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    render() {
        return (

            <div>
               <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
  <div className="overlay" />
  <div className="container-liquor">
    <div className="row no-gutters slider-text align-items-end justify-content-center">
      <div className="col-md-9 ftco-animate mb-5 text-center">
        <p className="breadcrumbs mb-0"><span className="mr-2"><a href="/home">Home <i className="fa fa-chevron-right" /></a></span> <span>Products <i className="fa fa-chevron-right" /></span></p>
        <h2 className="mb-0 bread">Products</h2>
      </div>
    </div>
  </div>
</section>
<section className="ftco-section">
  <div className="container-liquor">
    <div className="row">
      <div className="col-md-9">
        {/* <div className="row mb-4">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h4 className="product-select">Select Types of Products</h4>
            <select className="selectpicker" multiple>
              <option>Brandy</option>
              <option>Gin</option>
              <option>Rum</option>
              <option>Tequila</option>
              <option>Vodka</option>
              <option>Whiskey</option>
            </select>
            <button type="button" class="btn dropdown-toggle bs-placeholder btn-light" data-toggle="dropdown" role="button" title="Nothing selected"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Nothing selected</div></div> </div></button>
            <div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div>
            <div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-1.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-2.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-3.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-4.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-5.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-6.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-7.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-8.jpg)'}}>
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
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-9.jpg)'}}>
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
                <h2>Screwball</h2>
                <span className="price">$69.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-10.jpg)'}}>
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
                <h2>Screwball</h2>
                <span className="price">$69.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-11.jpg)'}}>
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
                <h2>McClelland's</h2>
                <span className="price">$69.00</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="product ftco-animate">
              <div className="img d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(images/prod-12.jpg)'}}>
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
                <h2>Plantation</h2>
                <span className="price">$69.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="sidebar-box ftco-animate">
          <div className="categories">
            <h3>Product Types</h3>
            <ul className="p-0">
              <li><a href="#">Brandy <span className="fa fa-chevron-right" /></a></li>
              <li><a href="#">Gin <span className="fa fa-chevron-right" /></a></li>
              <li><a href="#">Rum <span className="fa fa-chevron-right" /></a></li>
              <li><a href="#">Tequila <span className="fa fa-chevron-right" /></a></li>
              <li><a href="#">Vodka <span className="fa fa-chevron-right" /></a></li>
              <li><a href="#">Whiskey <span className="fa fa-chevron-right" /></a></li>
            </ul>
          </div>
        </div>
        {/* <div className="sidebar-box ftco-animate">
          <h3>Recent Blog</h3>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="fa fa-calendar" /> Apr. 18, 2020</a></div>
                <div><a href="#"><span className="fa fa-comment" /> 19</a></div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="fa fa-calendar" /> Apr. 18, 2020</a></div>
                <div><a href="#"><span className="fa fa-comment" /> 19</a></div>
              </div>
            </div>
          </div>
          <div className="block-21 mb-4 d-flex">
            <a className="blog-img mr-4" style={{backgroundImage: 'url(images/image_3.jpg)'}} />
            <div className="text">
              <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
              <div className="meta">
                <div><a href="#"><span className="fa fa-calendar" /> Apr. 18, 2020</a></div>
                <div><a href="#"><span className="fa fa-comment" /> 19</a></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
</section>


                <div className="row">
                    {
                        this.state.products.map((product) => {
                            return (
                                <div>
                                    <div className="col-md-3">
                                        <p>{product.ailaName}</p>
                                        <p>{product.ailaType}</p>
                                        <p>{product.ailaMl}</p>
                                        <p>{product.ailaPrice}</p>
                                        <p><img src={'http://localhost:90/' + product.ailaImage.replace("\\", "/")} height="400px" width="300px" /></p>
                                    </div>
                                    {/* Bind is used for sending id as parameter */}
                                    <p><button onClick={this.deleteAila.bind(this, product._id)}>Delete</button></p>
                                    <p><Link to={"/updateProduct/" + product._id}>Update</Link></p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}
export default Product