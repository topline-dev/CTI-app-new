import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://topline-cti.com:8082",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;