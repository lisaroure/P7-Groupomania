import Axios from "./caller.service"
import jwt_decode from 'jwt-decode'

let signup = (credentials) => {
    return Axios.post('/api/signup', credentials)
}

let login = (credentials) => {
    return Axios.post('/api/login', credentials)
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

let getInfo = () => {
    return jwt_decode(getToken())
}

// Définition de l'utilisateur admin
let getAdmin = () => {
    return '6357fed57fc541fa54f47735'
}

export const accountService = {
    signup, login, saveToken, logout, isLogged, getToken, getInfo, getAdmin
}