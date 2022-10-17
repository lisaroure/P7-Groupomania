import Axios from "./caller.service"

let signup = (credentials) => {
    return Axios.post('/api/user/signup', credentials)
}

let login = (credentials) => {
    return Axios.post('/api/user/login', credentials)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

let uid =  () => {
    return localStorage.getItem('req.data.id')
}

export const accountService = {
    signup, login, saveToken, logout, isLogged, getToken, uid
}