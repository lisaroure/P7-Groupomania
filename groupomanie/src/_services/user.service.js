import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/user/users')
};

let getAdmin = (id) => {
  return Axios.get('/api/user/admin/' + id)
}

let getUser = (id) => {
  return Axios.get('/api/user/user/' + id)
};

export const userService = {
  getAllUsers, getAdmin, getUser
};