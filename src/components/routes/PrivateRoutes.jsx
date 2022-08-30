import React, { useContext } from 'react'
import { Outlet } from 'react-router';
import { Navigate } from 'react-router';
import LoginContext from '../../context/LoginContext';

export default function PrivateRoutes() {
    const a=useContext(LoginContext);
    // console.log(a,"aaaa");
  return (
   a.token ? <Outlet/> : <Navigate to="/"/>
  )
}
