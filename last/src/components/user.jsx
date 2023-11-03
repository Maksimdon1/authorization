import React, { useEffect, useState } from "react";
import "../style/user.css";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import {LoginRequests}  from "../requests/login.ts"
import { useSelector } from "react-redux";
import LoadingUser from "./user-page-components/loading";
import ErrorUser from "./user-page-components/error";
import { Sucsess } from "./user-page-components/Success";
import Login from './login' 

export function User() {
  const LoginData = useSelector(state=> state.loginReducer )
  console.log(LoginData)








  



  React.useEffect(() => {

    window.scrollTo(0, 0);
    
  },[]);

  // if (data.isError) {
  //  return <ErrorUser/>
  // }
  // if (data.isLoading) {
  //   return (
  //     <LoadingUser />
  //   )
  //   }
  if(LoginData.IsAuthorized){
    console.log(54535)
  //  if (data.isSuccess) {
  //   return(

     return <Sucsess  data = {LoginData.User}/>
    // )
  // }
}
  else{
    return(
      <Login type={'login'}/>
      
    )
  }


}
