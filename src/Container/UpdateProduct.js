import axios from "axios";
import { Component } from "react";

class UpdateProduct extends Component{
    state={
        ailaName:"",
        ailaMl:"",
        ailaPrice:"",
        ailaType:"",
        id:this.props.match.params.id  //url ko id taneko 
    }
    componentDidMount(){
        axios.get('http://localhost:90/aila/one/' +this.state.id) //backend ma id pathako
        .then((message)=>{
            this.setState({
                ailaName:message.data.ailaName,
                ailaMl:message.data.ailaMl,
                ailaPrice:message.data.ailaPrice,
                ailaType:message.data.ailaType,
            })
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    render(){
        return(
            <div>
                <form>
                    <p>
                        Product Name
                        <input type="text" name="ailaName" value={this.state.ailaName}/>
                    </p>

                    <p>
                        Product Ml
                        <input type="text" name="ailaMl" value={this.state.ailaMl}/>
                    </p>

                    <p>
                        Product Price
                        <input type="text" name="ailaPrice" value={this.state.ailaPrice}/>
                    </p>

                    <p>
                        Product Type
                        <input type="text" name="ailaType" value={this.state.ailaType}/>
                    </p>
                    
                </form>
            </div>
        )
    }
}
export default UpdateProduct