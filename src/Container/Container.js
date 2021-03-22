import { Component } from "react";
import Register from './Register'
import Login from './Login'
import LoginSignUp from './LoginSignUp'

import {Route} from 'react-router-dom'
import Home from "./Home";
import Product from "./Product";
import AddProduct from "./AddProduct";

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
                                <Route path='/login' component={Login}/>  

                                <Route path='/loginsignup' component={LoginSignUp}/>

                                <Route path='/home' component={Home}/>
                                <Route path='/product' component={Product}/>
                                <Route path='/addProduct' component={AddProduct}/>

                        
                </div>
            </div>
        )
    }
}

export default Container