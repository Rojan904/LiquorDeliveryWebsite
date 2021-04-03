import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';
import './aila.css'
class Product extends Component {
  state = {
    products: [],
    ailaType:''
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

  getAilaType=(id)=>{
    axios.get("http://localhost:90/aila/all"+ id)
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
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
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
          <div className="row justify-content-center pb-5">
              <div className="col-md-4 heading-section text-center ftco-animate">
                <h2>Our Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">

                <div className="row">
                  {
                    this.state.products.map((product) => {
                      return (
                        <div className="col-md-4 d-flex">
                          <div className="product ftco-animate fadeInUp ftco-animated">
                            <div className="img d-flex align-items-center justify-content-center" >
                              <img src={'http://localhost:90/' + product.ailaImage.replace("\\", "/")} class="view" height="100%" width="270px" style={{ borderRadius: '4px', position: 'relative', objectFit: 'fill' }} />
                              <div class="middle" >
                                <div class="text"><Link to={"/viewProduct/" + product._id}><button>View</button></Link></div>
                              </div>
                            </div>
                            <div className="text text-center">
                              <span className="sale">Sale</span>
                              <span className="category">{product.ailaType}</span>
                              <h2 style={{ margin: '0px' }}>{product.ailaName}</h2>
                              <p className="mb-0" style={{ textAlign: 'center', marginTop: '0px' }}><span className="price">Rs. {product.ailaPrice}</span></p>
                            </div>
                            <p>{product.ailaMl} ml</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>

              </div>
              <div className="col-md-3">
                <div className="sidebar-box ftco-animate">
                  <div className="categories">
                    <h3>Product Types</h3>
                    <ul className="p-0">
                      <li><a href="/product">All<span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#" onClick={this.getAilaType.bind(this,"Rum")} >Rum  <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getAilaType.bind(this,"Wine")} >Wine <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getAilaType.bind(this,"Vodka")} >Vodka <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getAilaType.bind(this,"Whisky")}>Whiskey <span className="fa fa-chevron-right" /></a></li>
                      <li><a href="#"  onClick={this.getAilaType.bind(this,"Beer")}>Beer <span className="fa fa-chevron-right" /></a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
export default Product