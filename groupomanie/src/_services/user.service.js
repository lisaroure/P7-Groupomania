import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/users')
};

let getUser = async (uid) => {
  console.log(uid);
  const { data } = await Axios.get('/api/user/' + uid)
  return data
}

let modifyUser = (user) => {
  return Axios.patch('/api/user/edit/' + user._id)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};