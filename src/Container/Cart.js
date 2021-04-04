import { Component } from "react";
import { Link } from 'react-router-dom';
class Cart extends Component {
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
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" defaultChecked />
                  <span className="checkmark" />
                </label>
              </td>
              <td>
                <div className="img" style={{backgroundImage: 'url(images/prod-1.jpg)'}} />
              </td>
              <td>
                <div className="email">
                  <span>Jim Beam Kentucky Straight</span>
                  <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                </div>
              </td>
              <td>$44.99</td>
              <td className="quantity">
                <div className="input-group">
                  <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={2} min={1} max={100} />
                </div>
              </td>
              <td>$89.98</td>
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="fa fa-close" /></span>
                </button>
              </td>
            </tr>
            <tr className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </td>
              <td>
                <div className="img" style={{backgroundImage: 'url(images/prod-2.jpg)'}} />
              </td>
              <td>
                <div className="email">
                  <span>Jim Beam Kentucky Straight</span>
                  <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                </div>
              </td>
              <td>$30.99</td>
              <td className="quantity">
                <div className="input-group">
                  <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                </div>
              </td>
              <td>$30.99</td>
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="fa fa-close" /></span>
                </button>
              </td>
            </tr>
            <tr className="alert" role="alert">
              <td>
                <label className="checkbox-wrap checkbox-primary">
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </td>
              <td>
                <div className="img" style={{backgroundImage: 'url(images/prod-3.jpg)'}} />
              </td>
              <td>
                <div className="email">
                  <span>Jim Beam Kentucky Straight</span>
                  <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                </div>
              </td>
              <td>$35.50</td>
              <td className="quantity">
                <div className="input-group">
                  <input type="text" name="quantity" className="quantity form-control input-number" defaultValue={1} min={1} max={100} />
                </div>
              </td>
              <td>$35.50</td>
              <td>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true"><i className="fa fa-close" /></span>
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
    <div className="row justify-content-end">
      <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
        <div className="cart-total mb-3" style={{padding: '20px'}}> 
          <h3>Cart Totals</h3>
          <p className="d-flex">
            <span>Subtotal</span>
            <span>$20.60</span>
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