import axios from "axios";
import { Component } from "react";

class AddProduct extends Component{
    state={
        ailaName:'',
        ailaMl:'',
        ailaPrice:'',
        ailaType:''
    }
    addAila=(e)=>{
        this.setState({
            [e.target.name]:e.target.value  //name is of input name
        })
    }
    sendAila=(e)=>{
        e.preventDefault(); //stops reloading page
        axios.post('http://localhost:90/aila/insert',this.state)  //axios helps inserting data into db
        
        .then((message)=>{
            console.log(message)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }  
    render(){
        return(
            <div>
                <form>
                    <p>
                        Product ailaName
                        <input type="text" name="ailaName" value={this.state.ailaName} onChange={this.addAila} placeholder="Aila Name"/>
                    </p>

                    <p>
                        Product ailaMl
                        <input type="text" name="ailaMl" value={this.state.ailaMl} onChange={this.addAila}/>
                    </p>

                    <p>
                        Product ailaPrice
                        <input type="text" name="ailaPrice" value={this.state.ailaPrice} onChange={this.addAila}/>
                    </p>

                    <p>
                        <label>Product ailaType</label>
                       <input type="text" name="ailaType" value={this.state.ailaType} onChange={this.addAila}/>
                    </p>

                    <p><button type="submit" onClick={this.sendAila}>Submit</button></p>
                </form>
            </div>
        )
    }
}

export default AddProduct;