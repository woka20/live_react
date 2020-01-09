import React from "react"
import axios from 'axios'
import Navbar from "../components/NavBar"
import Catalog from "../components/Catalog"

class Home extends React.Component{
    render(){
        return(<div>
                <Navbar/>
                <div id="catalog">
                <Catalog />
                </div>
            </div>)
            
    }

}

export default Home