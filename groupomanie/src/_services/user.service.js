import Axios from "./caller.service";

let getAllUsers = async () => {
  const { data } = await Axios.get('/api/user/users')
  return data
};

let getUser = async (id) => {
  const { data } = await Axios.get('/api/user/user/' + id)
  console.log(data);
  return data
}

let modifyUser = (user) => {
  return Axios.patch('/api/user/user/' + user)
}

export const userService = {
  getAllUsers, getUser, modifyUser
};