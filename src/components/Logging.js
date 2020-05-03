import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'




export default class Logging extends Component {
    state ={
        login:false,
        userName:'',
        password:'',
      }
  
    handleSubmit = (e) => {
      //prevent page from reloading to keep state
        e.preventDefault()
    }
    
    
       // sorce redirect: https://reacttraining.com/react-router/web/example/auth-workflow
      // when logged in send userAuth and true to windows local sorage as key values pairs
      window.localStorage.setItem('userAuth', 'true')
      console.log(this.props)
      //if this is true then push home page to the top of the borwser hisory  
      this.props.history.push('/home')
      //then it can reset the usernme and password 
      this.setState({
        username: '',
        password: ''
      })        
    }
    
      //use bracket notaion to matchh input's  name props  and state[keys]
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
    

    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>Username  </label>
        <input 
            type="text" 
            placeholder="Username" 
            name="userName" 
            value={this.state.userName} 
            onChange={this.handleChange} required />
        <br>
        </br>
   
        <label>Password  </label>
        <input 
            type="password" 
            placeholder="Password" 
            name="password"
            value={this.state.pass} 
            onChange={this.handleChange} 
            required />
        <br>
        </br>
  
        <button onClick={this.handleClick}  type="submit">
          Login   
        </button>
  
        </form>
  
      );
    }
  }
  
