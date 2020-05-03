import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomePage extends Component{
    state = {
      logedIn  : false,
      upload: []
    }


    handleImgUpload = (e) => {
     let file = this.refs.file.files[0];
      // browser API: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      let reader = new FileReader();
      reader.readAsDataURL(file);
      // set the upload to the file.read so it can be displayed 
      reader.onloadend = function () {
        this.setState({
            upload: [reader.result]
        })
      }.bind(this);
        
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
  
  
