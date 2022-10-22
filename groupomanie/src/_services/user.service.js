import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/users')
};

let getUser = (uid) => {
  console.log(uid);
  return Axios.get('/api/user/' + uid)
}

let modifyUser = (user) => {
  return Axios.patch('/api/user/edit/' + user._id)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};