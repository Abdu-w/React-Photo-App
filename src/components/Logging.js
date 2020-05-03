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
    //use bracket notaion to matchh input's  name props  and state[keys]
    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    
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
  
