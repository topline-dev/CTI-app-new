import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8083",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;