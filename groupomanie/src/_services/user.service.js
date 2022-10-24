import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/users')
};

let getUser = (uid) => {
  console.log(uid);
  Axios.get('/api/users/' + uid)

}

let modifyUser = (user) => {
  return Axios.patch('/api/users/edit/' + user._id, user)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};