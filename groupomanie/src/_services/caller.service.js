import axios from 'axios'
import { accountService } from '../_services/account.service'

const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

/**
 * Intercepteur token
 * Injecter le token si on est connecté
 */
Axios.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

export default Axios;