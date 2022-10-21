import Axios from "./caller.service";

let getAllUsers = async () => {
  const { data } = await Axios.get('/api/users')
  return data
};

let getUser = async (id) => {
  const { data } = await Axios.get('/api/user/' + id)
  console.log(data);
  return data
}

let modifyUser = async (id) => {
  const { data } = await Axios.patch('/api/user/edit/' + id)
  console.log(data);
  return data
}

export const userService = {
  getAllUsers, getUser, modifyUser
};