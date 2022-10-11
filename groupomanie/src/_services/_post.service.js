import Axios from "./caller.service";

let getAllPosts = () => {
    return Axios.get('/api/post/')
};

let getPost = (id) => {
    return Axios.get('/api/post/' + id)
}

export const postService = {
    getAllPosts, getPost
};