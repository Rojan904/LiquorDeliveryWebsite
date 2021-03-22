import { Component } from "react";
import './LoginForm.css'
import axios from 'axios'

class LoginSignUp extends Component{
    click=()=>{
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    }

    state={
      firstName:"",
      lastName:"",
      dob:"",
      username:"",
      email:"",
      password:""

  }

  register=(err)=>{
      err.preventDefault()
      const userData={
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          dob:this.state.dob,
          username:this.state.username,
          email:this.state.email,
          password:this.state.password
      }
      axios.post("http://localhost:90/register",userData)
      .then(res=>{
          console.log(res)
         
      })
      .catch(err=>{
          console.log(err)
      })

  }
    render(){
        return(
         <div>
 
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fa fa-facebook-f" /></a>
          <a href="#" className="social"><i className="fa fa-google-plus" /></a>
          <a href="#" className="social"><i className="fa fa-linkedin" /></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="First name" 
         name="firstName" 
         value={this.state.firstName} 
         onChange={(event)=>{this.setState({firstName:event.target.value})}}/>

        <input type="text" placeholder="Last name"
        name="lastName" 
        value={this.state.lastName} 
        onChange={(event)=>{this.setState({lastName:event.target.value})}} />
       
        <input type="text" placeholder="Date of birth" 
        name="dob" 
        value={this.state.dob} 
        onChange={(event)=>{this.setState({dob:event.target.value})}}/>
        
      
        <input type="text" placeholder="Username" 
        name="username" 
        value={this.state.username} 
        onChange={(event)=>{this.setState({username:event.target.value})}}/>

        <input type="email" placeholder="Email" 
        name="email" 
        value={this.state.email} 
        onChange={(event)=>{this.setState({email:event.target.value})}}/>
          
        <input type="password" placeholder="Password" 
        name="password" 
        value={this.state.password} 
        onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <button type="submit"onClick={this.register}>Sign Up</button>
      </form>
    </div>

    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="https://www.facebook.com/"className="social"><i className="fa fa-facebook" />
          </a>
          <a href="#" className="social"><i className="fa fa-google-plus" /></a>
          <a href="#" className="social"><i className="fa fa-linkedin" /></a>
        </div>
        <span>or use your account</span>
        <input type="text" placeholder="Username" 
        name="username" 
        value={this.state.username} 
        onChange={(event)=>{this.setState({username:event.target.value})}}/>
          
        <input type="password" placeholder="Password" 
        name="password" 
        value={this.state.password} 
        onChange={(event)=>{this.setState({password:event.target.value})}}/>
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost" id="signIn" onClick={this.click}>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost" id="signUp" onClick={this.click}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  
</div>


        )
    }
}
export default LoginSignUp