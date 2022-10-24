import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/users')
};

let getUser = (_id) => {
  console.log(_id);
  return Axios.get('/api/user/' + _id)
}

let modifyUser = (user) => {
  return Axios.patch('/api/user/edit/' + user._id)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};