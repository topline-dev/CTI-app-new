import LoginContext from "./LoginContext";
import React, { useState } from 'react'

export default function LoginState(props) {
    
    const [token,setToken]=useState(true);
  return (
    <LoginContext.Provider value={{token,setToken}}>
        {props.children}
    </LoginContext.Provider>
  )
}
