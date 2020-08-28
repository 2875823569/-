import axios from "axios"

let server = axios.create({
    baseURl:"http://localhost:8888",
    timeout:6000
})

export default server