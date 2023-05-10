import axios from "axios"

const apiUrl = 'https://www.batikapi.my.id/';

export const getLogin = (props)=>{
    const Login = axios.post(`${apiUrl}login`, props)
    return Login
}

export const getRegister = (props) => {
    const Register = axios.post(`${apiUrl}regist`, props)
    return Register
}