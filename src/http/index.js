import axios from "axios";



const $host = axios.create({
    // baseURL:'https://info.renault.by/'
    baseURL:'/'
})



export {
    $host,
}