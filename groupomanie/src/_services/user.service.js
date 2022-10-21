import Axios from "./caller.service";

let getAllUsers = async () => {
  const { data } = await Axios.get('/api/users')
  return data
};

let getUser = async (_id) => {
  const { data } = await Axios.get('/api/user/${_id')
  console.log(data);
  return data
}

let modifyUser = async (user) => {
  const { data } = await Axios.patch('/api/user/edit/' + user._id)
  console.log(data);
  return data
}

export const userService = {
  getAllUsers, getUser, modifyUser
};