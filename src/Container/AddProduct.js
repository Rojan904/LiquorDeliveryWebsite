import axios from "axios";
import { Component } from "react";

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


                    <p>
                    <input type="file" name="ailaImage" onChange={this.fileHandler}/> 
                    <button type="submit" onClick={this.sendAila}>Submit</button></p>
                </form>
            </div>
        )
    }
}

export default AddProduct;