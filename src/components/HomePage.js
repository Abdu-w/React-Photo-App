import React, { Component } from 'react'

export default class HomePage extends Component{
    state = {
      logedIn  : false,
      upload: []
    }
    handleImgUpload = (e) => {
      this.setState({
        // upload previous file add store them in array 
        upload: [...this.state.upload, e.target.value]

      })
    //   console.log(e.target.value)
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
  
  