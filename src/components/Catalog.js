import React from "react"
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {store} from "../store"
// import { connect } from "unistore/react";
// import {withRouter} from 'react-router-dom'

const baseURL="https://api-todofancy.herokuapp.com/api/movies"




class Catalog extends React.Component{
    constructor(props){
        super(props)
        this.state= {
                listMovies:[],
                poster:"",
                category:"",
                title:"",
                year:"",
                synopsis:"",
                isLoading:true,
                slice:5,
                isLogin:true  
    }
}
componentDidMount = () => {
    const self = this;
    axios
      .get(baseURL)
      .then(function (response) {
        self.setState({ listMovies: response.data.movies, isLoading: false });
      })
      .catch(function (error) {
        self.setState({ isLoading: false });
      })
  }
  render() {
    console.log("HHAHA", this.state)
    const { listMovies, isLoading } = this.state;
    const allMovies = listMovies.filter(item => {
      if (item.Category === "romance" && item.Poster !== null) {
        return item;
      }
      return false;
    }).slice(0,1)
   
    const allMoviesAction = listMovies.filter(item => {
      if (item.Category === "action" && item.Poster !== null) {
        return item;
      }
      return false;
    }).slice(0,1)

    const allMoviesFiction = listMovies.filter(item => {
      if (item.Category === "fiction" && item.Poster !== null) {
        return item;
      }
      return false;
    }).slice(0,1)
    
    const allMoviesComedy= listMovies.filter(item => {
      if (item.Category === "comedy" && item.Poster !== null) {
        return item;
      }
      return false;
    }).slice(0,1)
    return (<div>
             {allMovies.map((item,key) =>(
                <div>
                  <p>{item.Category}</p>
                  <img src={item.Poster}/>
                  <button><Link to="/romance">See Movies</Link></button>
                </div>
            ))}
            {allMoviesAction.map((item,key) =>(
                <div>
                  <p>{item.Category}</p>
                  <img src={item.Poster}/>
                  <button><Link to="/action">See Movies</Link></button>
                </div>
            ))}
            {allMoviesFiction.map((item,key) =>(
                <div>
                  <p>{item.Category}</p>
                  <img src={item.Poster}/>
                  <button><Link to="/fiction">See Movies</Link></button>
                </div>
            ))}
            {allMoviesComedy.map((item,key) =>(
                <div>
                  <p>{item.Category}</p>
                  <img src={item.Poster}/>
                  <button><Link to="/comedy">See Movies</Link></button>
                </div>
            ))}
        </div>)
    }

}


// export default connect("poster, year, title, synopsis, category, isLoading")(withRouter(Catalog));
export default Catalog