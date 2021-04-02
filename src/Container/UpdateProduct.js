import axios from "axios";
import { Component } from "react";

class UpdateProduct extends Component{
    state={
        ailaName:"",
        ailaMl:"",
        ailaPrice:"",
        ailaType:"",
        id:this.props.match.params.id,  //url ko id taneko 
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
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

    updateAila=(e)=>{
        const data={
            id:this.props.match.params.id,
            ailaName:this.state.ailaName,
            ailaMl:this.state.ailaMl,
            ailaPrice:this.state.ailaPrice,
            ailaType:this.state.ailaType

        }
        e.preventDefault();
        axios.put('http://localhost:90/aila/update',data,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div>
                <form>
                    <p>
                        Product Name
                        <input type="text" name="ailaName" onChange={this.changeHandler} value={this.state.ailaName} />
                    </p>

                    <p>
                        Product Ml
                        <input type="text" name="ailaMl"  onChange={this.changeHandler} value={this.state.ailaMl}/>
                    </p>

                    <p>
                        Product Price
                        <input type="text" name="ailaPrice" onChange={this.changeHandler} value={this.state.ailaPrice} />
                    </p>

                    <p>
                        Product Type
                        <input type="text" name="ailaType" onChange={this.changeHandler} value={this.state.ailaType} />
                    </p>
                    
                    <p><button onClick={this.updateAila}>Update</button></p>
                </form>
            </div>
        )
    }
}
export default UpdateProduct