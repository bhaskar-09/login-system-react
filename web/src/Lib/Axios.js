// axios.js
import axios from "axios";
export default axios.create({
    baseURL: "http://api.dev01.localhost/",
    headers: {
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json'
    }
});