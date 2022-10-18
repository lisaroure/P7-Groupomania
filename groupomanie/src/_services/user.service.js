import Axios from "./caller.service";

let getAllUsers = async () => {
  const { data } = Axios.get('/api/user/users')
  return data
};

let getUser = (id) => {
  return Axios.get('/api/user/user/' + id)
}

let modifyUser = (id) => {
  return Axios.patch('/api/user/user/' + id)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};