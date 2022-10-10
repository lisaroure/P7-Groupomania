import Axios from "./caller.service";

let getUser = (uid) => {
    return Axios.get('/user/' + uid)
};

export const userService = {
  getUser,
};
