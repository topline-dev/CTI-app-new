import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";


let axiosClient = axios.create({
    baseURL: "http://topline-cti.com:8082",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;