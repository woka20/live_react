import React from 'react'
import { Redirect } from "react-router-dom";
import SignIn from "../pages/SignIn"
import { render } from '@testing-library/react'

const Profile = props =>{
    const isLogin=JSON.parse(localStorage.getItem("isLogin"))
    const nama=localStorage.getItem("full_name")
    const email=localStorage.getItem("email")
    console.warn("isLogin", isLogin)

    const signOut=()=>{
        return <Redirect to={{pathname:"/signin"}}/>
    }
   if (isLogin === null){
       return <Redirect to={{pathname:"/signin"}}/>
   }else{
       return(<div class= "class">
           <p>Nama:{nama} </p>
           <p>email:{email}</p>
           <a href="/logout">Sign Out</a>
           </div>)
   }
    
}
export default Profile