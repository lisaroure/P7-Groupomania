import Axios from "./caller.service";

let getAdmin = (uid) => {
    return Axios.get('/admin/ + uid')
}


export const adminService = {
    getAdmin
};
