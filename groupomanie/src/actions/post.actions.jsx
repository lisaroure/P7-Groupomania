import axios from "axios";

export const POSTS = "POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const MODIFY_POST = "MODIFY_POST";
export const DELETE_POST = "DELETE_POST";
// errors 
export const GET_POST_ERRORS = "GET_POST_ERRORS";

export const getPosts = (num) => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_API_URL}api/post/`);
            const array = res.data.slice(0, num);
            dispatch({ type: POSTS, payload: array });
            dispatch({ type: GET_ALL_POSTS, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    };
};

export const createPost = (data) => {
    return async (dispatch) => {
        const res = await axios
            .post(`http://localhost:3000/api/post`, data);
        if (res.data.errors) {
            dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
        } else {
            dispatch({ type: GET_POST_ERRORS, payload: "" });
        }
    }
}

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:3000/api/post/like/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `http://localhost:3000/api/post/unlike/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};

export const modifyPost = (postId, message) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `http://localhost:3000/api/post/${postId}`,
            data: { message },
        })
            .then((res) => {
                dispatch({ type: MODIFY_POST, payload: { message, postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `http://localhost:3000/api/post/${postId}`,
        })
            .then((res) => {
                dispatch({ type: DELETE_POST, payload: { postId } });
            })
            .catch((err) => console.log(err));
    };
};