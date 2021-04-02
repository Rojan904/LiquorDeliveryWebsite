import axios from "axios";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class UpdateProduct extends Component {
    state = {
        ailaName: "",
        ailaMl: "",
        ailaPrice: "",
        ailaType: "",
        id: this.props.match.params.id,  //url ko id taneko 
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

                })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    updateAila = (e) => {
        const data = {
            id: this.props.match.params.id,
            ailaName: this.state.ailaName,
            ailaMl: this.state.ailaMl,
            ailaPrice: this.state.ailaPrice,
            ailaType: this.state.ailaType

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
    render() {
        return (
            <div>
                <div className="row no-gutters">
                    <div className="col-md-4 mx-auto">
                        <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4" style={{ textAlign: 'center' }}>Update Product</h3>
                            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="name">Aila Name</label>
                                            <input type="text" className="form-control" placeholder="Aila Name"
                                                name="ailaName" onChange={this.changeHandler} value={this.state.ailaName} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Aila Ml</label>
                                            <input type="number" min="1" className="form-control" placeholder="Aila Ml"
                                                name="ailaMl" onChange={this.changeHandler} value={this.state.ailaMl} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Aila Price</label>
                                            <input type="text" className="form-control" placeholder="Aila Price"
                                                name="ailaPrice" onChange={this.changeHandler} value={this.state.ailaPrice} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Aila Type</label>
                                            <input type="text" className="form-control" placeholder="Aila Type"
                                                name="ailaType" onChange={this.changeHandler} value={this.state.ailaType} />
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" defaultValue="Send Message" className="btn btn-primary"
                                                onClick={this.updateAila}>Update</button>
                                            <div className="submitting" />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default UpdateProduct