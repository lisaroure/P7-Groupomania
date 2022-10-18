import Axios from "./caller.service";

let getAllPosts = async () => {
    const { data } = await Axios.get('/api/post')
    return data
};

let getPost = (id) => {
    return Axios.get('/api/post/' + id)
}

let createPost = (post) => {
    return Axios.post('/api/post', post)
}

export const postService = {
    getAllPosts, getPost, createPost
};