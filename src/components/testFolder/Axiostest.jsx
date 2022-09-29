import React from 'react'
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

export function Axiostest() {
    const a=useContext(LoginContext);
    console.log(a);
    console.log("yyyy");
    let axiosClient = axios.create({
        baseURL: "http://topline-cti.com:8082",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${a.jwtToken} `
        },
    })
  return axiosClient;
}
