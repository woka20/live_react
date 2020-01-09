import createStore from 'unistore'
import axios from 'axios'

const initialState = {
   poster:"298765",
   category:"woka",
   title:"apa",
   year:"woka@email.com",
   synopsis:"",
   isLoading:true,
   slice:5,
   isLogin:true  
  };

  
export const store=createStore(initialState);

