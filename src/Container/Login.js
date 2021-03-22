import { Component,state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Login extends Component{
    state = {
        username : "",
        password : "", 
        checkLogin:false
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    submitLogin = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            this.setState({checkLogin:true})
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        if(this.state.checkLogin===true){
            return <Redirect to='/home'/>
        }
        return(
            <div>
                <form>
                    <p>Username<input type="text" name="username" value={this.state.username} onChange={this.changeHandler}/></p>
                    <p>Password<input type="text" name="password" value={this.state.password} onChange={this.changeHandler} /></p>
                    <p><input type="submit" onClick={this.submitLogin} /></p>
                </form>
            </div>
        )
    }
}
export default Login;