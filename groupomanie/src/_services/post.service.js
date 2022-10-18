import Axios from "./caller.service";

let getAllPosts = async () => {
    const { data } = Axios.get('/api/post')
    return data
};

let getPost = (id) => {
    return Axios.get('/api/post/' + id)
}

export const postService = {
    getAllPosts, getPost
};