import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_ADMIN = "GET_ADMIN";

export const getUser = (uid) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`http://localhost:3000/api/user/${uid}`);
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        } catch (err) {
            return console.log(err);
        }
    };
};

export const getAdmin = (uid) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`http://localhost:3000/api/admin/${uid}`);
            dispatch({
                type: GET_USER,
                payload: res.data
            });
        } catch (err) {
            return console.log(err);
        }
    };
};
