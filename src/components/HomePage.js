import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomePage extends Component{
    state = {
      logedIn  : false,
      upload: []
    }

// source to read img : https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
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
      return(
       <div className='homePage'> 
          
          <input 
            ref="file" 
            name="imageFile"
            type="file" 
            alt="Uploaded Image" 
            value={this.state.img} 
            onChange={this.handleImgUpload}
            />  
             
       </div>
      )
    } 
  }
  
    
function LoadImage(props){  
  return (
   <div>
     <img src={props.upload} />
     <br />
     <button onClick={props.deletePhoto}>delete photo</button>
   </div>
 )
}
  
  
