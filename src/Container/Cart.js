import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class Cart extends Component {
  state={
    products:[],
    total: 0,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
      
  }
  }
  componentDidMount() {   //page load hudei run hune function
    axios.get("http://localhost:90/cart/all",this.state.config)
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
  updateAila = (e) => {
    const data = {
        id: this.props.match.params.id,
        ailaQty: this.state.ailaQty

    }
    e.preventDefault();
    axios.put('http://localhost:90/aila/update', data, this.state.config)
        .then((response) => {
            console.log(response)
            this.setState({ ailaName: "",
            ailaMl: "",
            ailaPrice: "",
            ailaType: "",})

            toast(response.data.message)
        })
        .catch((err) => {
            console.log(err.response)
        })
}
  deleteAila = (ailaId) => {
    axios.delete('http://localhost:90/cart/delete/' + ailaId)
        .then((message) => {
            console.log(message)
            toast(message.data.message)
            return window.location.href = "/cart"
        })
        .catch((error) => {
            console.log(error.message)
        })
}
    render() {
        return (
            <div>
                <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("images/nick.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container-liquor">
                        <div className="row no-gutters slider-text align-items-end justify-content-center">
                            <div className="col-md-9 ftco-animate mb-5 text-center">
                                <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right" /></a></span> <span>Cart <i className="fa fa-chevron-right" /></span></p>
                                <h2 className="mb-0 bread">My Cart</h2>
                            </div>
                        </div>
                    </div>
                </section>

               <section className="ftco-section">
  <div className="container-liquor">
    <div className="row">
      <div className="table-wrap one">
        <table className="table tableone">
          <thead className="thead-primary one">
            <tr>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>Product</th>
              <th>Price (Rs.)</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map((product) => {
                return(
<tr className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </td>
              <td>
                <div className="img" >
                  <img src={'http://localhost:90/'+product.ailaId.ailaImage} height="120px" width="100px"/>
                </div>
              </td>
              <td>
                <div className="email">
                  <span>{product.ailaId.ailaName}</span>
                  <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                </div>
              </td>
              <td>{product.ailaId.ailaPrice}</td>
              <td className="quantity">
                <div className="input-group">
                  <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={product.ailaQty} min={1} max={100} ></input>
                </div>
              </td>
              <td id="price">{product.ailaPrice}</td>
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="fa fa-close" onClick={this.deleteAila.bind(this,product._id)}/></span>
                </button>
              </td>
            </tr>
           
                )
              })
            }
            
            
           
           
          </tbody>
        </table>
      </div>
    </div>
    <div className="row justify-content-end">
      <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
      <div className="cart-total mb-3">
  <h3>Cart Totals</h3>
  <p className="d-flex">
    <span>Subtotal</span>
    <span>{}</span>
  </p>
  <p className="d-flex">
    <span>Delivery</span>
    <span>$0.00</span>
  </p>
  <p className="d-flex">
    <span>Discount</span>
    <span>$3.00</span>
  </p>
  <hr />
  <p className="d-flex total-price">
    <span>Total</span>
    <span>$17.60</span>
  </p>
</div>

        <p className="text-center"><Link to={"/checkout"}>
          <a href="checkout.html" className="btn btn-primary py-3 px-4">Proceed to Checkout</a></Link>
          </p>
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}
export default Cart