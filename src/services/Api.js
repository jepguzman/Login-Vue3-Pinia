import axios from "axios";

export default ()=>{
    return axios.create({
        baseURL: "https://reqres.in/api",
    })
}