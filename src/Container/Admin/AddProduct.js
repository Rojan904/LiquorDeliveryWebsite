import axios from "axios";
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
class AddProduct extends Component{
    state={
        ailaName:'',
        ailaMl:'',
        ailaPrice:'',
        ailaType:'',
        ailaImage:'',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    
    addAila=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //name is of input name
        })
    }
    fileHandler = (e)=>{
        this.setState({
            ailaImage : e.target.files[0]
        })
    }
    sendAila=(e)=>{
        e.preventDefault(); //stops reloading page
        const data = new FormData() // new line

        data.append('ailaName', this.state.ailaName)
        data.append('ailaMl', this.state.ailaMl)
        data.append('ailaPrice', this.state.ailaPrice)
        data.append('ailaType', this.state.ailaType)
        data.append('ailaImage', this.state.ailaImage)
        
        axios.post('http://localhost:90/aila/insert',data)  //axios helps inserting data into db
        
        .then((message)=>{
            console.log(message)
            toast(message.data.message)
            this.setState({ailaName:'',
            ailaMl:'',
            ailaPrice:'',
            ailaType:'',
            ailaImage:''})
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }  
    render(){
        return(
            <div>
                

                <div className="row no-gutters">
            <div className="col-md-4 mx-auto">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4" style={{textAlign:'center'}}>Add Product</h3>
                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="name">Aila Name</label>
                        <input type="text" className="form-control"  placeholder="Aila Name" 
                        name="ailaName" value={this.state.ailaName} onChange={this.addAila} required/>
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Aila Ml</label>
                        <input type="number" min="1"className="form-control" placeholder="Aila Ml" 
                        name="ailaMl" value={this.state.ailaMl} onChange={this.addAila} required/>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Aila Price</label>
                        <input type="text" className="form-control" placeholder="Aila Price" 
                        name="ailaPrice" value={this.state.ailaPrice} onChange={this.addAila} required/>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="label" htmlFor="subject">Aila Type</label>
                        <input type="text" className="form-control" placeholder="Aila Type" 
                        name="ailaType" value={this.state.ailaType} onChange={this.addAila} required/>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <div className="form-group">
                      <input type="file" name="ailaImage"  onChange={this.fileHandler} />
                        <div className="submitting" />
                      </div>
                    </div>
                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" 
                        onClick={this.sendAila}/>
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

export default AddProduct;