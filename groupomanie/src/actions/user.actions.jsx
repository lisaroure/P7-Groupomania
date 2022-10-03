import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_ADMIN = "GET_ADMIN";

export const getUser = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:3000/api/user/${uid}`)
            .then((res) => {
                dispatch({
                    type: GET_USER,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    };
};

export const getAdmin = (uid) => {
    return (dispatch) => {
        return axios
            .get(`http://localhost:3000/api/admin/${uid}`)
            .then((res) => {
                dispatch({
                    type: GET_ADMIN,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    };
};
