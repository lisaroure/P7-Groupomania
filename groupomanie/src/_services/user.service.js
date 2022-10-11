import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/user/users')
};

let getUser = (id) => {
  return Axios.get('/api/user/user/' + id)
}

let modifyUser = (id) => {
  return Axios.patch('/api/user/user' + id)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};