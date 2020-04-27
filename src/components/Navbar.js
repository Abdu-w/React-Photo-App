import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'


export default class Navbar extends Component{

    render(){
        return(
            <div className='navbar'>
                <ul className='links-container' >
                    <li><Link className='nav-link' to='/'>Home</Link></li>
                    <li><Link className='nav-link' to='/gallery'>Gallery</Link></li>
                </ul>
                            
            </div>           
        )
    }

}