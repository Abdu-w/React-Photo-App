import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class HomePage extends Component{
    constructor(props) {
      super(props)
      this.state = {
        //when the user is logged in stay true else false
        logedIn  : true,
        upload: []
      }
      this.myRef = React.createRef();
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
    // when photo is deleted reset state to empty array
    deletePhoto = (e) => {
      this.setState({
        upload: []
      })
    }
    //removes userauth from localstorage and reset sate to rerender page
    signOut = (e) => {
      localStorage.removeItem('userAuth')
      this.setState({
        logedIn: false
      })
    }

    render(){
      //when page rerenders after signout and userAuth is not in the localstorage obj it will redirect to login
      if(!localStorage.getItem('userAuth')) {
        return <Redirect to="/" />
      }


      return(
       <div className='homePage'> 
          <h2>User logged in : {this.state.logedIn ? 'True' : 'False'}</h2>
          <button onClick={this.signOut}>sign out</button>
          <br />
          <br />
          <br />
          <input 
            ref="file" 
            name="imageFile"
            type="file" 
            alt="Uploaded Image" 
            value={this.state.img} 
            onChange={this.handleImgUpload}
            />    

          <br />

          {
          this.state.upload.length
          ? <LoadImage 
              upload={this.state.upload}
              deletePhoto={this.deletePhoto}
              />
          : null 
          }
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





