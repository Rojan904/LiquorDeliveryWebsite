import { Component } from "react";
import axios from "axios";
class ViewProductDetails extends Component {
    state = {
        ailaName: "",
        ailaMl: "",
        ailaPrice: "",
        ailaType: "",
        ailaImage:"",
        id: this.props.match.params.id,  //url ko id taneko 
        userid:"",
        ailaQty:"",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:90/aila/one/' + this.state.id) //backend ma id pathako
            .then((message) => {
                this.setState({
                    ailaName: message.data.ailaName,
                    ailaMl: message.data.ailaMl,
                    ailaPrice: message.data.ailaPrice,
                    ailaType: message.data.ailaType,
                    ailaImage:message.data.ailaImage
                })
            })
            .catch((err) => {
                console.log(err.message)
            })
           

    }
    addAila=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //name is of input name
        })
    }
    addToCart=(err)=>{
       
        const cartData={
            ailaName:this.state.ailaName,
            ailaMl:this.state.ailaMl,
            ailaPrice:this.state.ailaPrice,
            ailaType:this.state.ailaType,
            ailaImage:this.state.ailaImage,
            ailaQty:this.state.ailaQty
            
        }
        err.preventDefault()
        axios.post("http://localhost:90/add/cart2/"+this.state.id,cartData,this.state.config)
        .then(response=>{
            console.log(response)
            console.log(this.state.config)
           
        })
        .catch(err=>{
            console.log(err)
            console.log(this.state.config.headers.authorization)
        })


    }
    render() {
        return (
            <div>
                <section>
                    <div className="container-liquor">
                        <div className="row mx-auto" style={{margin:'20px'}}>
                            <div className="col-md-6 ">
                                <figure className="view rounded z-depth-1 main-img " style={{height:'400px',objectFit:'fill'}}>
                                   
                                    <img src={'http://localhost:90/'+this.state.ailaImage} class="img-fluid z-depth-1 img-responsive img-thumbnail lazy" height="400px" width="300px"
                                     style={{ borderRadius: '4px',display:'inline-block' }} />
                                       
                                   
                                </figure>

                            </div>

                            <div className="col-md-6">
                                <h5 style={{textAlign:'left'}}>{this.state.ailaName}</h5>
                                <div>
                                    <p className="mb-2 text-muted text-uppercase small" > {this.state.ailaType}</p>
                                    
                                    <div>
                                        <p><span classname="mr-1" style={{fontSize:'19px'}}><strong> Rs. {this.state.ailaPrice}</strong></span></p>
                                        <p classname="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                                        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                                         officia quis dolore quos sapiente tempore alias.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-sm table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Volume</strong></th>
                                                    <td>{this.state.ailaMl} ml</td>
                                                </tr>
                                                <tr>
                                                    <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                                    <td>Kathmandu Valley</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="table-responsive mb-2">
                                        <table className="table table-sm table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td className="pl-0 pb-0 w-25">Quantity</td>

                                                </tr>
                                                <tr>
                                                    <td className="pl-0">
                                                        <div className="def-number-input number-input safari_only mb-0">
                                                            {/* <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus" >-</button> */}
                                                            <input className="quantity" min={1} name="ailaQty" defaultValue={1} type="number" value={this.state.ailaQty} onChange={this.addAila}></input>
                                                            {/* <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus" >+</button> */}
                                                        </div>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                                        <button type="button" className="btn btn-light btn-md mr-1 mb-2" onClick={this.addToCart}><i className="fa fa-shopping-cart pr-2" />Add to cart</button>
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
export default ViewProductDetails