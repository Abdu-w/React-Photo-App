import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'




export default class Logging extends Component {
    state ={
        login:false,
        userName:'',
        password:'',
      }
  
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e, this.props)
        // <Redirect to="/dashboard" /> 
        // https://reacttraining.com/react-router/web/example/auth-workflow
        this.props.locaction.push('/home')
    }

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
  