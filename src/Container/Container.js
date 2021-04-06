import { Component } from "react";
import Register from './Register'

import LoginSignUp from './LoginSignUp'

import {Route} from 'react-router-dom'
import Home from "./Home";
import Product from "./Product";
import AddProduct from "./Admin/AddProduct";
import UpdateProduct from "./Admin/UpdateProduct";
import Logout from "./Logout";
import About from "./About";
import Contact from "./Contact";
import ViewAila from "./Admin/ViewAila";
import ViewProductDetails from "./ViewProductDetails";
import Cart from "./Cart";
import Checkout from "./Checkout";
import UpdateCart from "./UpdateCart";

class Container extends Component{
   
    render(){
        return(
            <div className="container-fluid">
                <div className="">

                            <div className="col-md-12">
                                {/* //path of link and Register from above imported */}
                                <Route path='/register' component={Register}/>  
                            </div>
                        
                        
                            {/* //path of link and Register from above imported */}
                              

                                <Route path='/loginsignup' component={LoginSignUp}/>

                                <Route path='/home' component={Home}/>
                                  
                                <Route path='/about' component={About}/>
                                <Route path='/product' component={Product}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/addProduct' component={AddProduct}/>
                                {/* :id hold the id of specific product */}
                                 <Route path='/updateProduct/:id' component={UpdateProduct}/>  
                                 <Route path='/updateCart/:id' component={UpdateCart}/>  
                                 <Route path='/logout' component={Logout}/>

                                 <Route path='/viewAila' component={ViewAila}/>
                                 <Route path='/cart' component={Cart}/>
                                 <Route path='/viewProduct/:id' component={ViewProductDetails}/>  
                                <Route path='/checkout' component={Checkout}/>
                        
                </div>
            </div>
        )
    }
}

export default Container