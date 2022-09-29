import LoginContext from "./LoginContext";
import React, { useState } from 'react'

export default function LoginState(props) {
    
    const [token,setToken]=useState(true);
    const [jwtToken,setJwtToken]=useState("");
  return (
    <LoginContext.Provider value={{token,setToken,jwtToken,setJwtToken}}>
        {props.children}
    </LoginContext.Provider>
  )
}
