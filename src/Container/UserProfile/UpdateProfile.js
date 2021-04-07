import axios from "axios";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class UpdateProfile extends Component {
    state = {
        firstName: "",
        lastName: "",
        dob: "",
        username: "",
        email:"",
        id: this.props.match.params.id,  //url ko id taneko 
    
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get('http://localhost:90/user/single/' + this.state.id) //backend ma id pathako
            .then((message) => {
                this.setState({
                    firstName: message.data.firstName,
                    lastName: message.data.lastName,
                    dob: message.data.dob,
                    email: message.data.email,
                    username:message.data.username

                })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    updateUser = (e) => {
        const data = {
            id: this.props.match.params.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            dob:this.state.dob

        }
        e.preventDefault();
        axios.put('http://localhost:90/user/update/'+this.state.id, data)
            .then((response) => {
                console.log(response)
                this.setState({ firstName: "",
                lastName: "",
                dob: "",
                username: "",
                email:""})
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
                            <h3 className="mb-4" style={{ textAlign: 'center' }}>Update Profile</h3>
                            <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="name">First Name</label>
                                            <input type="text" className="form-control" placeholder="First Name"
                                                name="firstName" onChange={this.changeHandler} value={this.state.firstName} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Last Name</label>
                                            <input type="text"  className="form-control" placeholder="Last Name"
                                                name="lastName" onChange={this.changeHandler} value={this.state.lastName} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Username</label>
                                            <input type="text" className="form-control" placeholder="Username"
                                                name="username" onChange={this.changeHandler} value={this.state.username} />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Date of birth</label>
                                            <input type="text" className="form-control" placeholder="Date of birth"
                                                name="dob" onChange={this.changeHandler} value={this.state.dob} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" htmlFor="subject">Email</label>
                                            <input type="text" className="form-control" placeholder="Email"
                                                name="email" onChange={this.changeHandler} value={this.state.email} />
                                        </div>
                                    </div>


                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <button type="submit" defaultValue="Send Message" className="btn btn-primary"
                                                onClick={this.updateUser}>Update</button>
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
export default UpdateProfile