import axios from "axios";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";


let axiosClient = axios.create({
    baseURL: "http://topline-cti.com:8082",
    headers: {
        "Content-Type": "application/json",
        // "Authorization":"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NTQ1IiwiZXhwIjoxNjY0NDYzMTQ1LCJpYXQiOjE2NjQ0NDUxNDV9.jUAlRHbw7ebKShxU297IlGK6HKzX83NKqBfSUc26_YnmKhLTYWuERUzNWmpqVP4SBJfjhiXN-y1TBKRhRbYT7g", 
    },
});

export default axiosClient;