import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom';

class ViewAila extends Component {
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
                    {
                        this.state.products.map((product) => {
                            return (
                                
                                    <div className="col-md-3 ">
                                    <div className="product ftco-animate fadeInUp ftco-animated" style={{marginBottom:'0px'}}>
                                    <div className="img d-flex align-items-center justify-content-center" >
                                    <img src={'http://localhost:90/' + product.ailaImage.replace("\\", "/")} height="100%" width="270px" style={{borderRadius: '4px',position: 'relative',objectFit:'fill'}}/>
                                     </div>
                                     <div className="text text-center">
                                        <span className="category">{product.ailaType}</span>
                                        <h2 style={{margin:'0px'}}>{product.ailaName}</h2>
                                        <p className="mb-0" style={{textAlign:'center',marginTop:'0px'}}><span className="price price-sale">Rs. {product.ailaPrice}</span> </p>
                                    </div>
                                       
                                        <p>{product.ailaMl} ml</p>
                                        
                                       

                                    </div>
                                    {/* Bind is used for sending id as parameter */}
                                    <p style={{marginBottom:'10px'}}><button onClick={this.deleteAila.bind(this, product._id)}>Delete</button></p>
                                    <p style={{marginBottom:'30px'}}><Link to={"/updateProduct/" + product._id}><button style={{backgroundColor: '#6495ED',border:'none'}}>Update</button></Link></p>
                                </div>
                            )
                        })
                    }

                </div>
                </div>
                </section>
         </div>
            
        )
    }
}
export default ViewAila