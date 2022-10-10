import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/user/user')
};

let getUser = (uid) => {
  return Axios.get('/api/user/user/' + uid)
};

export const userService = {
  getAllUsers, getUser
};