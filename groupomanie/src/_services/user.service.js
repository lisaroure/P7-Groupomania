import Axios from "./caller.service";

let getAllUsers = () => {
  return Axios.get('/api/user/users')
};

// let getAdmin = (uid) => {
//   return Axios.get('/api/user/admin/' + uid)
// }

// let getUser = (uid) => {
//   return Axios.get('/api/user/user/' + uid)
// };

export const userService = {
  getAllUsers,
};