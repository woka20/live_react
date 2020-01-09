import React from "react"
import axios from 'axios'
import logo from "../img/logo192.png"

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return (<nav class="navbar">
               <ul>
                   <li><img src={logo}></img></li>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/profile">Profile</Link></li>
                   <li><Link to="/signin">Login</Link></li>
               </ul>
        </nav>)
    }
    

}

export default Navbar