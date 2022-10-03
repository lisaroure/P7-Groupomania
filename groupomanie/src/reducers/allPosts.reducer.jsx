import { DELETE_POST, GET_ALL_POSTS } from "../actions/post.actions"

const initialState = {}

export default function allPostsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload

        case DELETE_POST:
            return state.data.filter((post) => post._id !== action.payload.postId)

        default:
            return state
    }
}