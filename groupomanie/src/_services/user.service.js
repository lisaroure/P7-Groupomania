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

let deleteUser = (uid) => {
  return Axios.delete('/api/users/delete/' + uid)
}

export const userService = {
  getAllUsers, getUser, modifyUser, deleteUser
};