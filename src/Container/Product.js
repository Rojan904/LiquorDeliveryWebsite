import axios from "axios";
import { Component } from "react";

class Product extends Component{
    state={
        products:[]
    }
    componentDidMount(){
        axios.get("http://localhost:90/aila/all")
        .then((allAila)=>{
            
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
        axios.delete('http:localhost:90/aila/delete/' + ailaId)
        .then((message)=>{
            console.log(message)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {
                        this.state.products.map((product)=>{
                            return(
                                <div>

                                <div className="col-md-3">{product.ailaName}</div>
                                <p><button onClick={this.deleteAila.bind(this,product._id)}>Delete</button></p>  bind for sending parameter
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