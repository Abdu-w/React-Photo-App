import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomePage extends Component{
    state = {
      logedIn  : false,
      upload: []
    }
    handleImgUpload = (e) => {
 
        
    }
  
    render(){
        console.log(this.state)
      return(
       <div className='homePage'> 
         <input type="file" alt="add Image" value={this.state.upload} onChange={this.handleImgUpload}/>     
       </div>
      )
    } 
  }
  
  
