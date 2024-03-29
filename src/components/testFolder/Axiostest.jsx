import React from 'react'
import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";

export function Axiostest() {
    const a=useContext(LoginContext);
    const defaultOptions = {
            baseURL: "http://topline-cti.com:8082",
            headers: {
                "Content-Type": "application/json",
            }
        };
    
      // Create instance
      let instance = axios.create(defaultOptions);
    
      // Set the AUTH token for any request
      instance.interceptors.request.use(function (config) {
        const token = a.jwtToken;
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
      });
    
      return instance;
    };
