import axios from "axios";
import { Component } from "react";
import {Link} from 'react-router-dom';
import './aila.css'
class Product extends Component{
    state={
        products:[]
    }
    componentDidMount(){   //page load hudei run hune function
        axios.get("http://localhost:90/aila/all")
        .then((allAila)=>{
            console.log(allAila)
            this.setState({
                products:allAila.data.data
            })
        })
        .catch((err)=>{
               console.log(err.response)
           }
        )
    }

    deleteAila=(ailaId)=>{
        axios.delete('http://localhost:90/aila/delete/' + ailaId)
        .then((message)=>{
            console.log(message)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    render(){
        return(
            <div className="container-liquor">
                <div className="row">
                    {
                        this.state.products.map((product)=>{
                            return(
                                <div>

                                <div className="col-md-3">
                                    <p>{product.ailaName}</p>
                                    <p>{product.ailaType}</p>
                                    <p>{product.ailaMl}</p>
                                    <p>{product.ailaPrice}</p>
                                    <p><img src={'http://localhost:90/' + product.ailaImage} height="400px" width="300px"/></p>
                                </div>
                                {/* Bind is used for sending id as parameter */}
                                <p><button onClick={this.deleteAila.bind(this,product._id)}>Delete</button></p>  
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