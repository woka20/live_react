import React from "react"
import axios from 'axios'
// import {store} from "../store"
// import { connect } from "unistore/react";
// import {withRouter} from 'react-router-dom'

const baseURL="https://api-todofancy.herokuapp.com/api/movies"


class CategoryRomance extends React.Component{
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
//   }
//    handleInputChange = async event => {
//     let value = event.target.value;
//     await this.setState({ search: value });
//     this.searchNews(value);
//   };
     
 }
 render(){
    const{listMovies}=this.state
    const categoryOnly=listMovies.filter(item =>{
        if (item.Category==="romance"){
            return item
        }
        return false})
     return <div>
             {categoryOnly.map((item) =>(
                <div>
                 <p>{item.Category}</p>
                  <img src={item.Poster}/>
                  <p>{item.Title}</p>
                  <p>{item.Year}</p>
                  <p>{item.Synopsis}</p>
                  
                </div>
            ))}
        </div>
 }
}

export default CategoryRomance