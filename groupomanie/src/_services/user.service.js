import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/user/users')
};

let getAdmin = (adminId) => {
  return Axios.get('/api/user/admin/' + adminId)
}

let getUser = (userId) => {
  return Axios.get('/api/user/user/' + userId)
};

export const userService = {
  getAllUsers, getAdmin, getUser
};