import { Component } from "react";

class Checkout extends Component{
    render(){
        return(
            <div>
            <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
  <div className="container-liquor">
    <div className="row no-gutters slider-text align-items-end justify-content-center">
      <div className="col-md-9 ftco-animate mb-5 text-center">
        <p className="breadcrumbs mb-0"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right" /></a></span> <span>Checkout <i className="fa fa-chevron-right" /></span></p>
        <h2 className="mb-0 bread">Checkout</h2>
      </div>
    </div>
  </div>
</section>

<section className="ftco-section">
  <div className="container-liquor">
    <div className="row justify-content-center">
      <div className="col-xl-10 ftco-animate">
        <form action="#" className="billing-form">
          <h3 className="mb-4 billing-heading">Billing Details</h3>
          <div className="row align-items-end">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="w-100" />
            {/* <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="country">State / Country</label>
                <div className="select-wrap">
                  <div className="icon"><span className="ion-ios-arrow-down" /></div>
                  <select name id className="form-control">
                    <option value>France</option>
                    <option value>Italy</option>
                    <option value>Philippines</option>
                    <option value>South Korea</option>
                    <option value>Hongkong</option>
                    <option value>Japan</option>
                  </select>
                </div>
              </div>
            </div> */}
            <div className="w-100" />
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="streetaddress">Street Address</label>
                <input type="text" className="form-control" placeholder="House number and street name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <label htmlFor="streetaddress">Select Delivery Date</label>
                <input type="date" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="towncity">Town / City</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="postcodezip">Postcode / ZIP *</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="w-100" />
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="emailaddress">Email Address</label>
                <input type="text" className="form-control" placeholder />
              </div>
            </div>
            <div className="w-100" />
            
          </div>
        </form>
        <div className="row mt-5 pt-3 d-flex">
          <div className="col-md-6 d-flex">
            <div className="cart-detail cart-total p-3 p-md-4">
              <h3 className="billing-heading mb-4">Cart Total</h3>
              <p className="d-flex">
                <span style={{width:'100%'}}>Subtotal</span>
                <span>$20.60</span>
              </p>
              <p className="d-flex">
                <span  style={{width:'100%'}}>Delivery</span>
                <span>$0.00</span>
              </p>
              <p className="d-flex">
                <span  style={{width:'100%'}}>Discount</span>
                <span>$3.00</span>
              </p>
              <hr />
              <p className="d-flex total-price">
                <span  style={{width:'100%'}}>Total</span>
                <span>$17.60</span>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cart-detail p-3 p-md-4">
              <h3 className="billing-heading mb-4">Payment Method</h3>
              <div className="row">
              <div className="col-md-2">
                <img src="images/cash.jpg" width="100px" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 my-auto">
               <p style={{float:'left'}}>Cash On Delivery</p>
            </div>
              </div>
           
              <div className="form-group " style={{marginTop:'10px',}}>
                <div className="col-md-12">
                  <div className="checkbox">
                    <label ><input type="checkbox" defaultValue className="mr-2" style={{marginTop:'5px',marginLeft:'-10px'}}/> I accept the terms and conditions.</label>
                  </div>
                </div>
              </div>
              <p><a href="#" className="btn btn-primary py-3 px-4">Place an order</a></p>
            </div>
          </div>
        </div>
      </div> {/* .col-md-8 */}
    </div>
  </div>
</section>

</div>
        )
    }
}
export default Checkout