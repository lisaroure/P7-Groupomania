import Axios from "./caller.service";

let getAllPosts = () => {
  return Axios.get("/api/post");

};

let getPost = (_id) => {
  return Axios.get("/api/post/" + _id);

};

let createPost = (post) => {
  return Axios.post("/api/post", post);
};

let modifyPost = async (post) => {
  const { data } = Axios.patch("/api/post/" + post._id, post);
  return data
};

let likePost = (_id) => {
  return Axios.patch("/api/post/like/" + _id)
}

let unlikePost = (_id) => {
  return Axios.patch("/api/post/unlike/" + _id)
}

let delPost = (post) => {
  return Axios.delete("/api/post/" + post._id, post)
}

export const postService = {
  getAllPosts,
  getPost,
  createPost,
  modifyPost,
  likePost,
  unlikePost,
  delPost
};
