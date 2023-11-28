import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Authorization: window.localStorage.getItem("token")
    }
})

export default Axios;